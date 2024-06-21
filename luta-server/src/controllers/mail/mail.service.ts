import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import * as dotenv from 'dotenv';
import * as process from 'process';

import { SmsOrder } from '../../entity/sms-order.entity';

dotenv.config();

@Injectable()
export class MailService {
  constructor(
    @InjectRepository(SmsOrder)
    private usersRepository: Repository<SmsOrder>,
    private readonly mailerService: MailerService,
    private readonly entityManager: EntityManager,
  ) {}

  async sendPriceList(
    email: string,
    subject: string,
    text: string,
    file: {
      filename: string;
      path: string;
    },
  ) {
    await this.mailerService.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject,
      text,
      attachments: [
        {
          filename: file.filename,
          path: file.path,
        },
      ],
    });
  }
}
