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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const dotenv = require("dotenv");
dotenv.config();
const auth_dto_1 = require("./auth.dto");
const auth_service_1 = require("./auth.service");
const validator_body_pipe_1 = require("../../pipe/validator-body.pipe");
const userSchema_1 = require("../../joi-schema/userSchema");
const process = require("node:process");
const custom_exception_1 = require("../../services/custom-exception");
const MAX_AGE = 7 * 24 * 60 * 60 * 1000;
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async register(req, registerBody, res) {
        if (registerBody?.secret_string !== process.env.SECRET_STRING)
            throw new custom_exception_1.CustomException(common_1.HttpStatus.FORBIDDEN, `У вас нет доступа`);
        const userAgent = req['useragent'];
        const createdUser = await this.authService.signUpCredentials({
            ...registerBody,
            userAgent,
        });
        res.cookie('refreshToken', createdUser.refreshToken, {
            httpOnly: true,
            maxAge: MAX_AGE,
        });
        return createdUser;
    }
    async login(req, loginBody, res) {
        console.log('loginBody', loginBody);
        const userAgent = req['useragent'];
        const foundUser = await this.authService.signInCredentials({
            ...loginBody,
            userAgent,
        });
        console.log('toooken', foundUser.refreshToken);
        res.cookie('refreshToken', foundUser.refreshToken, {
            httpOnly: true,
            maxAge: MAX_AGE,
        });
        return foundUser;
    }
    async refreshToken(req, res) {
        const userAgent = req['useragent'];
        const tokens = await this.authService.refreshToken(req.user, req.currentDevice, userAgent);
        res.cookie('refreshToken', tokens.refreshToken, {
            httpOnly: true,
            maxAge: MAX_AGE,
        });
        return tokens;
    }
    async logOut(req) {
        return this.authService.logout(req.currentDevice);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('/register-123'),
    (0, common_1.HttpCode)(201),
    (0, common_1.UsePipes)(new validator_body_pipe_1.BodyValidationPipe(userSchema_1.userCreateSchema)),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, auth_dto_1.RegisterAuthDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('/login'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, auth_dto_1.LoginAuthDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('/refresh'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshToken", null);
__decorate([
    (0, common_1.Get)('/logout'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logOut", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('api/auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map