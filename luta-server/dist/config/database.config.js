"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const process = require("process");
const user_entity_1 = require("../entity/user.entity");
const gallery_entity_1 = require("../entity/gallery.entity");
const sms_order_entity_1 = require("../entity/sms-order.entity");
dotenv.config();
const config = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [user_entity_1.User, user_entity_1.UserDevices, gallery_entity_1.Gallery, sms_order_entity_1.SmsOrder],
    synchronize: process.env.PRODUCTION !== 'true',
    logging: process.env.PRODUCTION !== 'true',
};
exports.default = config;
//# sourceMappingURL=database.config.js.map