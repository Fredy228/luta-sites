import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { Details } from 'express-useragent';

import { User, UserDevices } from '../../entity/user.entity';
import { LoginAuthDto, RegisterAuthDto } from './auth.dto';
import { TokenType } from '../../types/token-type';
import { CustomException } from '../../services/custom-exception';
import { checkPassword, hashPassword } from '../../services/hashPassword';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,

    @InjectRepository(UserDevices)
    private devicesRepository: Repository<UserDevices>,
    private jwtService: JwtService,
    private readonly entityManager: EntityManager,
  ) {}

  async signInCredentials({
    email,
    password,
    userAgent,
  }: LoginAuthDto & { userAgent: Details }): Promise<User & TokenType> {
    const user = await this.usersRepository.findOne({
      where: { email },
      relations: {
        devices: true,
      },
    });

    if (!user)
      throw new CustomException(
        HttpStatus.UNAUTHORIZED,
        `Username or password is wrong`,
      );
    const isValidPass = await checkPassword(password, user.password);

    if (!isValidPass)
      throw new CustomException(
        HttpStatus.UNAUTHORIZED,
        `Username or password is wrong`,
      );

    const deviceModel = `${userAgent.platform} ${userAgent.os} ${userAgent.browser}`;

    await this.deleteOldSession(user.devices);

    const tokens = await this.addDeviceAuth(deviceModel, user);

    return { ...user, ...tokens, password: null };
  }

  async signUpCredentials({
    email,
    password,
    userAgent,
    firstName,
  }: RegisterAuthDto & { userAgent: Details }): Promise<User & TokenType> {
    const userFound = await this.usersRepository.findOneBy({ email });
    if (userFound)
      throw new CustomException(
        HttpStatus.UNAUTHORIZED,
        `Such a user already exists`,
      );

    const deviceModel = `${userAgent.platform} ${userAgent.os} ${userAgent.browser}`;

    const hashPass = await hashPassword(password);

    const name = firstName
      ? firstName
      : `user${Math.floor(Math.random() * 90000) + 10000}`;

    const newUser = this.usersRepository.create({
      email,
      password: hashPass,
      firstName: name,
    });
    await this.usersRepository.save(newUser);

    const tokens = await this.addDeviceAuth(deviceModel, newUser);

    return { ...newUser, ...tokens, password: null };
  }

  async refreshToken(
    user: User,
    currentDevice: UserDevices,
  ): Promise<TokenType> {
    const newTokens = this.createToken(user);

    await this.devicesRepository.update(currentDevice, {
      accessToken: newTokens.accessToken,
      refreshToken: newTokens.refreshToken,
    });

    return newTokens;
  }

  async logout(currentDevice: UserDevices): Promise<void> {
    await this.devicesRepository.delete(currentDevice);
    return;
  }

  async deleteOldSession(devices: UserDevices[]) {
    return Promise.all(
      devices.map(async (device) => {
        const decodedToken = await this.jwtService.decode(device.refreshToken);

        const currExp = decodedToken.exp * 1000;
        const currTime = new Date().getTime();

        if (currExp > currTime) return null;

        return await this.devicesRepository.delete(device);
      }),
    );
  }

  async addDeviceAuth(deviceModel: string, userId: User): Promise<TokenType> {
    const tokens = this.createToken(userId);
    const newDevice = this.devicesRepository.create({
      deviceModel: deviceModel ? deviceModel : null,
      userId,
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    });

    await this.devicesRepository.save(newDevice);

    return tokens;
  }

  createToken(user: User): TokenType {
    const payload = { email: user.email, id: user.id };

    const accessToken = this.jwtService.sign(payload, { expiresIn: '45m' });
    const refreshToken = this.jwtService.sign(payload);
    return { accessToken, refreshToken };
  }
}
