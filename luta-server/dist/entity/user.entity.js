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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDevices = exports.User = void 0;
const typeorm_1 = require("typeorm");
let User = class User {
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 250, nullable: false }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'createAt',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], User.prototype, "createAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'updateAt',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], User.prototype, "updateAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => UserDevices, (device) => device.userId),
    __metadata("design:type", Array)
], User.prototype, "devices", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)({ name: 'user' }),
    (0, typeorm_1.Unique)(['username'])
], User);
let UserDevices = class UserDevices {
};
exports.UserDevices = UserDevices;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserDevices.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'deviceModel', type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], UserDevices.prototype, "deviceModel", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'createAt',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], UserDevices.prototype, "createAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'updateAt',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], UserDevices.prototype, "updateAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 250, nullable: false }),
    __metadata("design:type", String)
], UserDevices.prototype, "accessToken", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 250, nullable: false }),
    __metadata("design:type", String)
], UserDevices.prototype, "refreshToken", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, (user) => user.devices, { onDelete: 'CASCADE' }),
    __metadata("design:type", User)
], UserDevices.prototype, "userId", void 0);
exports.UserDevices = UserDevices = __decorate([
    (0, typeorm_1.Entity)({ name: 'user_devices' })
], UserDevices);
//# sourceMappingURL=user.entity.js.map