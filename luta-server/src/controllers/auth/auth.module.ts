import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthController } from './auth.controller';
import { User, UserDevices } from '../../entity/user.entity';
import { AuthService } from './auth.service';
import { ProtectRefreshMiddleware } from '../../middlewares/protect-refresh.middleware';
import { UserAgentMiddleware } from '../../middlewares/user-agent.middleware';
import { AuthMiddlewareService } from '../../services/auth-middleware.service';
import { MailModule } from '../mail/mail.module';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserDevices]), MailModule],
  controllers: [AuthController],
  providers: [AuthService, AuthMiddlewareService],
})
export class AuthModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ProtectRefreshMiddleware).forRoutes(
      {
        path: '/api/auth/refresh',
        method: RequestMethod.GET,
      },
      {
        path: '/api/auth/logout',
        method: RequestMethod.GET,
      },
    );

    consumer.apply(UserAgentMiddleware).forRoutes(
      {
        path: '/api/auth/register',
        method: RequestMethod.POST,
      },
      {
        path: '/api/auth/login',
        method: RequestMethod.POST,
      },
      {
        path: '/api/auth/refresh',
        method: RequestMethod.GET,
      },
    );
  }
}
