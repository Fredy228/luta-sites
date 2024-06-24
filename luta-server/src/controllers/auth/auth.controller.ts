import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
  UsePipes,
} from '@nestjs/common';
import { Request, Response } from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

import { LoginAuthDto, RegisterAuthDto } from './auth.dto';
import { AuthService } from './auth.service';

import { BodyValidationPipe } from '../../pipe/validator-body.pipe';
import { userCreateSchema } from '../../joi-schema/userSchema';
import { User, UserDevices } from '../../entity/user.entity';
import * as process from 'node:process';
import { CustomException } from '../../services/custom-exception';

// const CLIENT_URL = process.env.CLIENT_URL;
const MAX_AGE = 7 * 24 * 60 * 60 * 1000;

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register-123')
  @HttpCode(201)
  @UsePipes(new BodyValidationPipe(userCreateSchema))
  async register(
    @Req()
    req: Request,
    @Body() registerBody: RegisterAuthDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    if (registerBody?.secret_string !== process.env.SECRET_STRING)
      throw new CustomException(HttpStatus.FORBIDDEN, `У вас нет доступа`);

    const userAgent = req['useragent'];
    const createdUser = await this.authService.signUpCredentials({
      ...registerBody,
      userAgent,
    });
    res.cookie('refreshToken', createdUser.refreshToken, {
      httpOnly: true,
      maxAge: MAX_AGE,
    });
    return createdUser;
  }

  @Post('/login')
  @HttpCode(200)
  async login(
    @Req()
    req: Request,
    @Body() loginBody: LoginAuthDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    console.log('loginBody', loginBody);
    const userAgent = req['useragent'];
    const foundUser = await this.authService.signInCredentials({
      ...loginBody,
      userAgent,
    });
    console.log('toooken', foundUser.refreshToken);
    res.cookie('refreshToken', foundUser.refreshToken, {
      httpOnly: true,
      maxAge: MAX_AGE,
    });
    return foundUser;
  }

  @Get('/refresh')
  @HttpCode(200)
  async refreshToken(
    @Req()
    req: Request & {
      user: User;
      currentDevice: UserDevices;
    },
    @Res({ passthrough: true }) res: Response,
  ) {
    const userAgent = req['useragent'];

    const tokens = await this.authService.refreshToken(
      req.user,
      req.currentDevice,
      userAgent,
    );
    res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      maxAge: MAX_AGE,
    });
    return tokens;
  }

  @Get('/logout')
  @HttpCode(204)
  async logOut(
    @Req() req: Request & { user: User; currentDevice: UserDevices },
  ) {
    return this.authService.logout(req.currentDevice);
  }
}
