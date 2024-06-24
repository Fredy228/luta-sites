"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const jwt_1 = require("@nestjs/jwt");
const user_entity_1 = require("../../entity/user.entity");
const custom_exception_1 = require("../../services/custom-exception");
const hashPassword_1 = require("../../services/hashPassword");
const mail_service_1 = require("../mail/mail.service");
let AuthService = class AuthService {
    constructor(usersRepository, devicesRepository, jwtService, entityManager, mailService) {
        this.usersRepository = usersRepository;
        this.devicesRepository = devicesRepository;
        this.jwtService = jwtService;
        this.entityManager = entityManager;
        this.mailService = mailService;
    }
    async signInCredentials({ username, password, userAgent, }) {
        const deviceModel = `${userAgent.platform} ${userAgent.os} ${userAgent.browser}`;
        const user = await this.usersRepository.findOne({
            where: { username },
            relations: {
                devices: true,
            },
        });
        if (!user)
            throw new custom_exception_1.CustomException(common_1.HttpStatus.UNAUTHORIZED, `Имя пользователя или пароль неверный`);
        if (user.isBlock)
            throw new custom_exception_1.CustomException(423, `Пользователь заблокирован`);
        const is_time_try = user.login_time &&
            new Date().getTime() - new Date(user.login_time).getTime() < 3600 * 1000;
        if (is_time_try) {
            const time_try = new Date().getTime() - user.login_time.getTime();
            throw new custom_exception_1.CustomException(425, `Повторите попытку через ${Math.round(time_try / 1000 / 60)} минут`);
        }
        const isValidPass = await (0, hashPassword_1.checkPassword)(password, user.password);
        if (!isValidPass) {
            if (user.login_attempts === 5 || user.login_attempts === 10) {
                await this.usersRepository.update(user.id, {
                    login_time: new Date(),
                });
                await this.mailService.noticeInfo(`Кто-то пытается войти как ${username}.` +
                    ` \n Использовано ${user.login_attempts} попыток.` +
                    ` \n Источник входа: ${deviceModel}`);
            }
            if (user.login_attempts > 14) {
                await this.usersRepository.update(user.id, {
                    isBlock: true,
                });
                await this.mailService.noticeInfo(`Кто-то пытается войти как ${username}.` +
                    ` \n Использовано ${user.login_attempts} попыток.` +
                    ` \n Источник входа: ${deviceModel}` +
                    ` \n ${username} был заблокирован для безопасности`);
            }
            await this.usersRepository.update(user.id, {
                login_attempts: user.login_attempts ? user.login_attempts + 1 : 1,
            });
            throw new custom_exception_1.CustomException(common_1.HttpStatus.UNAUTHORIZED, `Имя пользователя или пароль неверный`);
        }
        await this.usersRepository.update(user.id, {
            login_attempts: 0,
            login_time: null,
        });
        await this.deleteOldSession(user.devices);
        const tokens = await this.addDeviceAuth(deviceModel, user);
        return { ...user, ...tokens, password: null };
    }
    async signUpCredentials({ username, password, userAgent, }) {
        const userFound = await this.usersRepository.findOneBy({ username });
        if (userFound)
            throw new custom_exception_1.CustomException(common_1.HttpStatus.UNAUTHORIZED, `Such a user already exists`);
        const deviceModel = `${userAgent.platform} ${userAgent.os} ${userAgent.browser}`;
        const hashPass = await (0, hashPassword_1.hashPassword)(password);
        const newUser = this.usersRepository.create({
            username,
            password: hashPass,
        });
        await this.usersRepository.save(newUser);
        const tokens = await this.addDeviceAuth(deviceModel, newUser);
        return { ...newUser, ...tokens, password: null };
    }
    async refreshToken(user, currentDevice, userAgent) {
        const deviceModel = `${userAgent?.platform} ${userAgent?.os} ${userAgent?.browser}`;
        if (deviceModel !== currentDevice.deviceModel)
            throw new custom_exception_1.CustomException(common_1.HttpStatus.UNAUTHORIZED, `Login from an untrusted device`);
        const newTokens = this.createToken(user);
        await this.devicesRepository.update(currentDevice, {
            accessToken: newTokens.accessToken,
            refreshToken: newTokens.refreshToken,
        });
        return newTokens;
    }
    async logout(currentDevice) {
        await this.devicesRepository.delete(currentDevice);
        return;
    }
    async deleteOldSession(devices) {
        return Promise.all(devices.map(async (device) => {
            const decodedToken = await this.jwtService.decode(device.refreshToken);
            const currExp = decodedToken.exp * 1000;
            const currTime = new Date().getTime();
            if (currExp > currTime)
                return null;
            return await this.devicesRepository.delete(device);
        }));
    }
    async addDeviceAuth(deviceModel, userId) {
        const tokens = this.createToken(userId);
        const newDevice = this.devicesRepository.create({
            deviceModel: deviceModel ? deviceModel : null,
            userId,
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken,
        });
        await this.devicesRepository.save(newDevice);
        return tokens;
    }
    createToken(user) {
        const payload = { username: user.username, id: user.id };
        const accessToken = this.jwtService.sign(payload, { expiresIn: '45m' });
        const refreshToken = this.jwtService.sign(payload);
        return { accessToken, refreshToken };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.UserDevices)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        jwt_1.JwtService,
        typeorm_2.EntityManager,
        mail_service_1.MailService])
], AuthService);
//# sourceMappingURL=auth.service.js.map