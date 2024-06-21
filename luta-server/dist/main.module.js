"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainModule = void 0;
const common_1 = require("@nestjs/common");
const process = require("process");
const dotenv = require("dotenv");
const jwt_1 = require("@nestjs/jwt");
const database_config_1 = require("./config/database.config");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./controllers/auth/auth.module");
const gallery_module_1 = require("./controllers/gallery/gallery.module");
const sms_order_module_1 = require("./controllers/sms-order/sms-order.module");
const mailer_1 = require("@nestjs-modules/mailer");
dotenv.config();
let MainModule = class MainModule {
};
exports.MainModule = MainModule;
exports.MainModule = MainModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(database_config_1.default),
            jwt_1.JwtModule.register({
                global: true,
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: '7d' },
            }),
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: process.env.SMTP_DOMAIN,
                    port: Number(process.env.SMTP_PORT),
                    secure: true,
                    auth: {
                        user: process.env.SMTP_USER,
                        pass: process.env.SMTP_PASS,
                    },
                    tls: {
                        rejectUnauthorized: false,
                    },
                },
            }),
            auth_module_1.AuthModule,
            gallery_module_1.GalleryModule,
            sms_order_module_1.SmsOrderModule,
        ],
        controllers: [],
        providers: [],
    })
], MainModule);
//# sourceMappingURL=main.module.js.map