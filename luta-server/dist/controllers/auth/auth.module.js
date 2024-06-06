"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_controller_1 = require("./auth.controller");
const user_entity_1 = require("../../entity/user.entity");
const auth_service_1 = require("./auth.service");
const protect_refresh_middleware_1 = require("../../middlewares/protect-refresh.middleware");
const user_agent_middleware_1 = require("../../middlewares/user-agent.middleware");
const auth_middleware_service_1 = require("../../services/auth-middleware.service");
const protect_auth_middleware_1 = require("../../middlewares/protect-auth.middleware");
let AuthModule = class AuthModule {
    configure(consumer) {
        consumer.apply(protect_refresh_middleware_1.ProtectRefreshMiddleware).forRoutes({
            path: '/api/auth/refresh',
            method: common_1.RequestMethod.GET,
        }, {
            path: '/api/auth/logout',
            method: common_1.RequestMethod.GET,
        });
        consumer.apply(protect_auth_middleware_1.ProtectAuthMiddleware).forRoutes({
            path: '/api/auth/verification',
            method: common_1.RequestMethod.GET,
        }, {
            path: '/api/auth/verification',
            method: common_1.RequestMethod.POST,
        });
        consumer.apply(user_agent_middleware_1.UserAgentMiddleware).forRoutes({
            path: '/api/auth/google/callback',
            method: common_1.RequestMethod.GET,
        }, {
            path: '/api/auth/register',
            method: common_1.RequestMethod.POST,
        }, {
            path: '/api/auth/login',
            method: common_1.RequestMethod.POST,
        });
    }
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, user_entity_1.UserDevices])],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, auth_middleware_service_1.AuthMiddlewareService],
        exports: [],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map