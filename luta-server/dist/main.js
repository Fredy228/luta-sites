"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const dotenv = require("dotenv");
const process = require("process");
const cookieParser = require("cookie-parser");
dotenv.config();
const main_module_1 = require("./main.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(main_module_1.MainModule, {
        logger: ['error', 'warn', 'log'],
        cors: {
            origin: process.env.CLIENT_URL,
            credentials: true,
        },
    });
    app.use(cookieParser());
    const PORT = process.env.PORT || 3333;
    await app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map