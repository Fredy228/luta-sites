"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPassword = exports.hashPassword = void 0;
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const process = require("process");
dotenv.config();
const hashPassword = async (password) => {
    const rounds = Number(process.env.SALT_ROUNDS) || 10;
    const salt = await bcrypt.genSalt(rounds);
    return await bcrypt.hash(password, salt);
};
exports.hashPassword = hashPassword;
const checkPassword = (candidate, hash) => bcrypt.compare(candidate, hash);
exports.checkPassword = checkPassword;
//# sourceMappingURL=hashPassword.js.map