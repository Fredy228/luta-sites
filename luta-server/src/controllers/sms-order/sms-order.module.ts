import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { SmsOrderController } from './sms-order.controller';
import { SmsOrderService } from './sms-order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../entity/user.entity';
import { ProtectAuthMiddleware } from '../../middlewares/protect-auth.middleware';
import { SmsOrder } from '../../entity/sms-order.entity';
import { AuthMiddlewareService } from '../../services/auth-middleware.service';
import { ImageService } from '../../services/image.service';
import { MailModule } from '../mail/mail.module';

@Module({
  imports: [TypeOrmModule.forFeature([SmsOrder, User]), MailModule],
  controllers: [SmsOrderController],
  providers: [SmsOrderService, AuthMiddlewareService, ImageService],
})
export class SmsOrderModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ProtectAuthMiddleware).forRoutes(
      {
        path: 'api/sms-order-luta',
        method: RequestMethod.GET,
      },
      {
        path: 'api/sms-order-luta/:id',
        method: RequestMethod.GET,
      },
      {
        path: 'api/sms-order-luta/:id',
        method: RequestMethod.DELETE,
      },
    );
  }
}
