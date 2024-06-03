/// <reference types="cookie-parser" />
import { Request, Response } from 'express';
import { LoginAuthDto, RegisterAuthDto } from './auth.dto';
import { AuthService } from './auth.service';
import { User, UserDevices } from '../../entity/user.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(req: Request, registerBody: RegisterAuthDto, res: Response): Promise<User & import("../../types/token-type").TokenType>;
    login(req: Request, loginBody: LoginAuthDto, res: Response): Promise<User & import("../../types/token-type").TokenType>;
    refreshToken(req: Request & {
        user: User;
        currentDevice: UserDevices;
    }, res: Response): Promise<import("../../types/token-type").TokenType>;
    logOut(req: Request & {
        user: User;
        currentDevice: UserDevices;
    }): Promise<void>;
}
