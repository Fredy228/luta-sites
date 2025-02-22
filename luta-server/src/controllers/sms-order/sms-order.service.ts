import { HttpStatus, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { writeFile, pathExists } from 'fs-extra';
import * as path from 'path';

import { SmsOrder } from '../../entity/sms-order.entity';
import { EntityManager, Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SmsOrderDto } from './sms-order.dto';
import { SiteEnum } from '../../enum/site.enum';
import { FileType } from '../../types/sms_message.type';
import { QueryGetAllType } from '../../types/query';
import { CustomException } from '../../services/custom-exception';
import { ImageService } from '../../services/image.service';
import { MailService } from '../mail/mail.service';

@Injectable()
export class SmsOrderService {
  constructor(
    @InjectRepository(SmsOrder)
    private readonly smsOrderRepository: Repository<SmsOrder>,
    private readonly imageService: ImageService,
    private readonly entityManager: EntityManager,
    private readonly mailService: MailService,
  ) {}

  async create(
    body: SmsOrderDto,
    fileUploaded: Express.Multer.File | null,
    site: SiteEnum,
  ): Promise<void> {
    let file: FileType | undefined = undefined;
    if (fileUploaded) {
      fileUploaded.originalname = Buffer.from(
        fileUploaded.originalname,
        'latin1',
      ).toString('utf8');
      const fileName = fileUploaded.originalname.split('.')[0];
      const filePath = `client-files/${fileName}-${uuidv4()}${path.extname(fileUploaded.originalname)}`;

      file = {
        name_file: fileUploaded.originalname,
        path_to_file: filePath,
        size: fileUploaded.size,
      };

      writeFile(`${process.cwd()}/static/${filePath}`, fileUploaded.buffer);
    }

    const newSmsOrder = this.smsOrderRepository.create({
      name: body.name,
      email: body.email,
      phone: body.phone,
      message: body.message || undefined,
      site,
      file,
    });

    await this.smsOrderRepository.save(newSmsOrder);

    const price_list_path = `${process.cwd()}/static/price-list/price-list.pdf`;
    if (Boolean(body.getPrice) && (await pathExists(price_list_path))) {
      await this.mailService.sendPriceList(
        body.email,
        'Прайс лист LutaPro',
        'Добрый день. \n \nВас приветствует компания "ЛЮТАПРО", г. Одесса.' +
          '\n \nВо вложении Вы увидите прайс-лист.' +
          '\n \nТак же на сайте вы можете ознакомиться с примерами наших работ.' +
          '\n \nС уважением, Игорь Викторович, компания "ЛЮТАПРО"',
        {
          filename: 'price-list.pdf',
          path: price_list_path,
        },
      );
    }

    await this.mailService.noticeOrder(newSmsOrder, 'LutaPro');
  }

  async getAll({ range, filter, sort }: QueryGetAllType, site: SiteEnum) {
    const filterOption: { [key: string]: any } = {
      ...filter,
      site,
    };
    if (filter.name) filterOption.name = Like('%' + filter.name + '%');
    if (filter.phone) filterOption.phone = Like('%' + filter.phone + '%');
    if (filter.email) filterOption.email = Like('%' + filter.email + '%');
    if (filter.message) filterOption.message = Like('%' + filter.message + '%');
    // if (filter.file) filterOption.file = Like('%' + filter.file + '%');
    if (filter.createAt) filterOption.createAt = filter.createAt;

    const rangeOption: { [key: string]: any } = {};
    if (range && range.length === 2) {
      rangeOption.take = range[1] - range[0] + 1;
      rangeOption.skip = range[0];
    }

    const sortOption: { [key: string]: any } = {};
    if (sort && sort.length === 2) sortOption[sort[0]] = sort[1];

    const [result, total] = await this.smsOrderRepository.findAndCount({
      where: filterOption,
      order: sortOption,
      ...rangeOption,
    });

    return {
      data: result,
      total,
    };
  }

  async getOne(id: number) {
    if (!id)
      throw new CustomException(
        HttpStatus.BAD_REQUEST,
        `ID ${id} не корректное`,
      );

    const smsOrder = await this.smsOrderRepository.findOneBy({ id });

    if (!smsOrder)
      throw new CustomException(
        HttpStatus.NOT_FOUND,
        `Запись не найдено (ID ${id})`,
      );

    return smsOrder;
  }

  async deleteById(id: number) {
    return this.entityManager.transaction(async (entityManager) => {
      const smsOrder = await this.getOne(id);

      await entityManager.delete(SmsOrder, id);

      if (smsOrder.file && smsOrder.file.path_to_file)
        await this.imageService.deleteImages([smsOrder.file.path_to_file]);

      return smsOrder;
    });
  }
}
