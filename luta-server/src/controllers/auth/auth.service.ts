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
    username,
    password,
    userAgent,
  }: LoginAuthDto & { userAgent: Details }): Promise<User & TokenType> {
    const user = await this.usersRepository.findOne({
      where: { username },
      relations: {
        devices: true,
      },
    });

    if (!user)
      throw new CustomException(
        HttpStatus.UNAUTHORIZED,
        `Имя пользователя или пароль неверный`,
      );
    if (user.isBlock)
      throw new CustomException(423, `Пользователь заблокирован`);
    const is_time_try =
      user.login_time &&
      new Date().getTime() - new Date(user.login_time).getTime() < 3600 * 1000;
    if (is_time_try) {
      const time_try = new Date().getTime() - user.login_time.getTime();
      throw new CustomException(
        425,
        `Повторите попытку через ${Math.round(time_try / 1000 / 60)} минут`,
      );
    }

    const isValidPass = await checkPassword(password, user.password);

    if (!isValidPass) {
      if (user.login_attempts === 5 || user.login_attempts === 10) {
        await this.usersRepository.update(user.id, {
          login_time: new Date(),
        });
      }
      if (user.login_attempts > 14) {
        await this.usersRepository.update(user.id, {
          isBlock: true,
        });
      }
      await this.usersRepository.update(user.id, {
        login_attempts: user.login_attempts ? user.login_attempts + 1 : 1,
      });

      throw new CustomException(
        HttpStatus.UNAUTHORIZED,
        `Имя пользователя или пароль неверный`,
      );
    }

    await this.usersRepository.update(user.id, {
      login_attempts: 0,
      login_time: null,
    });

    const deviceModel = `${userAgent.platform} ${userAgent.os} ${userAgent.browser}`;

    await this.deleteOldSession(user.devices);

    const tokens = await this.addDeviceAuth(deviceModel, user);

    return { ...user, ...tokens, password: null };
  }

  async signUpCredentials({
    username,
    password,
    userAgent,
  }: RegisterAuthDto & { userAgent: Details }): Promise<User & TokenType> {
    const userFound = await this.usersRepository.findOneBy({ username });
    if (userFound)
      throw new CustomException(
        HttpStatus.UNAUTHORIZED,
        `Such a user already exists`,
      );

    const deviceModel = `${userAgent.platform} ${userAgent.os} ${userAgent.browser}`;

    const hashPass = await hashPassword(password);

    const newUser = this.usersRepository.create({
      username,
      password: hashPass,
    });
    await this.usersRepository.save(newUser);

    const tokens = await this.addDeviceAuth(deviceModel, newUser);

    return { ...newUser, ...tokens, password: null };
  }

  async refreshToken(
    user: User,
    currentDevice: UserDevices,
    userAgent: Details,
  ): Promise<TokenType> {
    const deviceModel = `${userAgent?.platform} ${userAgent?.os} ${userAgent?.browser}`;

    if (deviceModel !== currentDevice.deviceModel)
      throw new CustomException(
        HttpStatus.UNAUTHORIZED,
        `Login from an untrusted device`,
      );

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
    const payload = { username: user.username, id: user.id };

    const accessToken = this.jwtService.sign(payload, { expiresIn: '45m' });
    const refreshToken = this.jwtService.sign(payload);
    return { accessToken, refreshToken };
  }
}
