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
exports.BodyValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const custom_exception_1 = require("../services/custom-exception");
let BodyValidationPipe = class BodyValidationPipe {
    constructor(schema) {
        this.schema = schema;
    }
    transform(value, metadata) {
        if (metadata.type !== 'body') {
            return value;
        }
        console.log(value);
        const { error } = this.schema.validate(value);
        console.log(error);
        if (error) {
            throw new custom_exception_1.CustomException(common_1.HttpStatus.BAD_REQUEST, error.message);
        }
        return value;
    }
};
exports.BodyValidationPipe = BodyValidationPipe;
exports.BodyValidationPipe = BodyValidationPipe = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object])
], BodyValidationPipe);
//# sourceMappingURL=validator-body.pipe.js.map