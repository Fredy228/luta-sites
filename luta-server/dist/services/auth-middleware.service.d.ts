import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
export declare class AuthMiddlewareService {
    private usersRepository;
    private jwtService;
    constructor(usersRepository: Repository<User>, jwtService: JwtService);
    checkAccessToken(authorization: string | undefined): string;
    findUser(token: string): Promise<User>;
}
