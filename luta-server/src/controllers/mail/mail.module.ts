import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SmsOrder } from '../../entity/sms-order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SmsOrder])],
  controllers: [MailController],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
