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
exports.AuthMiddlewareService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../entity/user.entity");
const typeorm_2 = require("typeorm");
const jwt_1 = require("@nestjs/jwt");
const custom_exception_1 = require("./custom-exception");
let AuthMiddlewareService = class AuthMiddlewareService {
    constructor(usersRepository, jwtService) {
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
    }
    checkAccessToken(authorization) {
        return authorization?.startsWith('Bearer') && authorization?.split(' ')[1];
    }
    async findUser(token) {
        let decodedToken;
        try {
            decodedToken = await this.jwtService.verify(token);
        }
        catch (error) {
            throw new custom_exception_1.CustomException(common_1.HttpStatus.UNAUTHORIZED, 'Not authorized');
        }
        const currentUser = await this.usersRepository.findOneBy({
            id: decodedToken.id,
        });
        if (!currentUser)
            throw new custom_exception_1.CustomException(common_1.HttpStatus.UNAUTHORIZED, 'Not authorized');
        return currentUser;
    }
};
exports.AuthMiddlewareService = AuthMiddlewareService;
exports.AuthMiddlewareService = AuthMiddlewareService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], AuthMiddlewareService);
//# sourceMappingURL=auth-middleware.service.js.map