import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  Res,
  UploadedFiles,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { SmsOrderService } from './sms-order.service';
import { BodyValidationPipe } from '../../pipe/validator-body.pipe';
import { FileValidatorPipe } from '../../pipe/validator-file.pipe';
import { SmsOrderDto } from './sms-order.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { QueryGetAllStringifyType } from '../../types/query';
import { Response } from 'express';
import { parseQueryGetAll } from '../../services/parseQuery';
import { SiteEnum } from '../../enum/site.enum';
import { smsOrderCreateSchema } from '../../joi-schema/smsOrderSchema';

@Controller('api/sms-order-luta')
export class SmsOrderController {
  constructor(private readonly smsOrderService: SmsOrderService) {}

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(
    new BodyValidationPipe(smsOrderCreateSchema),
    new FileValidatorPipe({ maxSize: 100, nullable: true }),
  )
  @UseInterceptors(FileFieldsInterceptor([{ name: 'file', maxCount: 1 }]))
  async create(
    @Body() body: SmsOrderDto,
    @UploadedFiles()
    files: {
      file?: Array<Express.Multer.File>;
    },
  ) {
    return this.smsOrderService.create(
      body,
      files?.file?.length > 0 ? files?.file[0] : null,
      SiteEnum.LUTA_PRO,
    );
  }

  @Get('/')
  @HttpCode(HttpStatus.OK)
  async getAll(
    @Query()
    query: QueryGetAllStringifyType,
    @Res() res: Response,
  ) {
    const { range, filter, sort } = parseQueryGetAll(query);

    const smsOrders = await this.smsOrderService.getAll(
      { range, filter, sort },
      SiteEnum.LUTA_PRO,
    );

    res
      .setHeader(
        'Content-Range',
        range && range.length === 2
          ? `sms-order ${range[0]}-${range[1]}/${smsOrders.total}`
          : smsOrders.total,
      )
      .json(smsOrders.data);
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async getById(@Param('id') id: string) {
    return this.smsOrderService.getOne(Number(id));
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  async deleteById(@Param('id') id: string) {
    return this.smsOrderService.deleteById(Number(id));
  }
}
