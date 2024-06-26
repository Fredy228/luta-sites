import { Module } from '@nestjs/common';
import * as process from 'process';
import * as dotenv from 'dotenv';
import { JwtModule } from '@nestjs/jwt';
import databaseConfig from './config/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './controllers/auth/auth.module';
import { GalleryModule } from './controllers/gallery/gallery.module';
import { SmsOrderModule } from './controllers/sms-order/sms-order.module';
import { MailerModule } from '@nestjs-modules/mailer';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '7d' },
    }),
    MailerModule.forRoot({
      transport: {
        host: process.env.SMTP_DOMAIN,
        port: Number(process.env.SMTP_PORT),
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      // defaults: {
      //   from: '"nest-modules" <modules@nestjs.com>',
      // },
      // template: {
      //   dir: process.cwd() + '/templates/',
      //   adapter: new PugAdapter(),
      //   options: {
      //     strict: true,
      //   },
      // },
    }),
    AuthModule,
    GalleryModule,
    SmsOrderModule,
  ],
  controllers: [],
  providers: [],
})
export class MainModule {}
