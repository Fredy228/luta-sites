import { HttpException, HttpStatus } from '@nestjs/common';
export declare class CustomException extends HttpException {
    constructor(status: HttpStatus | number, message: string);
}
