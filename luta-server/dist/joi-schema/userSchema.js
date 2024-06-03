"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userPasswordSchema = exports.userEmailSchema = exports.userCodeSchema = exports.userCreateSchema = void 0;
const Joi = require("joi");
exports.userCreateSchema = Joi.object()
    .keys({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
        'string.email': 'email|The email is incorrect',
        'string.empty': 'email|The email is empty.',
    }),
    firstName: Joi.string().min(2).max(30).required().messages({
        'string.empty': 'name|The name is empty.',
        'string.min': 'name|The name cannot be less than 2 characters',
        'string.max': 'name|The name cannot be more than 30 characters',
    }),
    password: Joi.string()
        .regex(/(?=.*\d)(?=.*[A-Z])[A-Za-z\d]{8,30}/)
        .required()
        .messages({
        'string.empty': 'password|The password is empty.',
        'string.pattern.base': 'password|Password may have a minimum of 8 characters, including at least one capital letter and one number',
    }),
})
    .options({ stripUnknown: true });
exports.userCodeSchema = Joi.object()
    .keys({
    code: Joi.string().min(1).max(10).required().messages({
        'string.empty': 'name|The name is empty.',
        'string.min': 'name|The name cannot be less than 1 characters',
        'string.max': 'name|The name cannot be more than 10 characters',
    }),
})
    .options({ stripUnknown: true });
exports.userEmailSchema = Joi.object()
    .keys({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
        'string.email': 'email|The email is incorrect',
        'string.empty': 'email|The email is empty.',
    }),
})
    .options({ stripUnknown: true });
exports.userPasswordSchema = Joi.object()
    .keys({
    password: Joi.string()
        .regex(/(?=.*\d)(?=.*[A-Z])[A-Za-z\d]{8,30}/)
        .required()
        .messages({
        'string.empty': 'password|The password is empty.',
        'string.pattern.base': 'password|Password may have a minimum of 8 characters, including at least one capital letter and one number',
    }),
})
    .options({ stripUnknown: true });
//# sourceMappingURL=userSchema.js.map