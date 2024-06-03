import { EntityManager, Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { Details } from 'express-useragent';
import { User, UserDevices } from '../../entity/user.entity';
import { LoginAuthDto, RegisterAuthDto } from './auth.dto';
import { TokenType } from '../../types/token-type';
export declare class AuthService {
    private usersRepository;
    private devicesRepository;
    private jwtService;
    private readonly entityManager;
    constructor(usersRepository: Repository<User>, devicesRepository: Repository<UserDevices>, jwtService: JwtService, entityManager: EntityManager);
    signInCredentials({ email, password, userAgent, }: LoginAuthDto & {
        userAgent: Details;
    }): Promise<User & TokenType>;
    signUpCredentials({ email, password, userAgent, firstName, }: RegisterAuthDto & {
        userAgent: Details;
    }): Promise<User & TokenType>;
    refreshToken(user: User, currentDevice: UserDevices): Promise<TokenType>;
    logout(currentDevice: UserDevices): Promise<void>;
    deleteOldSession(devices: UserDevices[]): Promise<import("typeorm").DeleteResult[]>;
    addDeviceAuth(deviceModel: string, userId: User): Promise<TokenType>;
    createToken(user: User): TokenType;
}