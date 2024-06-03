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
exports.ImageValidatorPipe = void 0;
const common_1 = require("@nestjs/common");
const custom_exception_1 = require("../services/custom-exception");
let ImageValidatorPipe = class ImageValidatorPipe {
    constructor(options) {
        this.options = options;
    }
    transform(files, { type }) {
        if (['query', 'body', 'param'].includes(type)) {
            return files;
        }
        console.log('__files', files);
        if (!files)
            return files;
        for (const key in files) {
            if (Object.prototype.hasOwnProperty.call(files, key)) {
                files[key].forEach((item) => {
                    if (item.mimetype.split('/')[0] !== 'image')
                        throw new custom_exception_1.CustomException(common_1.HttpStatus.BAD_REQUEST, `Only images can be uploaded`);
                    if (!['png', 'jpg', 'jpeg', 'webp', 'svg', 'svg+xml'].includes(item.mimetype.split('/')[1]))
                        throw new custom_exception_1.CustomException(common_1.HttpStatus.BAD_REQUEST, `Invalid image format`);
                    if (item.size / (1024 * 1024) > this.options.maxSize)
                        throw new custom_exception_1.CustomException(common_1.HttpStatus.BAD_REQUEST, `The file is too large. Maximum size ${this.options.maxSize} MB`);
                });
            }
        }
        return files;
    }
};
exports.ImageValidatorPipe = ImageValidatorPipe;
exports.ImageValidatorPipe = ImageValidatorPipe = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object])
], ImageValidatorPipe);
//# sourceMappingURL=validator-img.pipe.js.map