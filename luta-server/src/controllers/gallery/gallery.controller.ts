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
import { ImageValidatorPipe } from '../../pipe/validator-img.pipe';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { GalleryService } from './gallery.service';
import { GalleryDto } from './gallery.dto';
import { Response } from 'express';
import { BodyValidationPipe } from '../../pipe/validator-body.pipe';
import { galleryCreateSchema } from '../../joi-schema/gallerySchema';
import { QueryGetAllStringifyType, QueryGetAllType } from '../../types/query';
import { parseQueryGetAll } from '../../services/parseQuery';

@Controller('api/gallery-luta')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(
    new ImageValidatorPipe({ maxSize: 10, nullable: false }),
    new BodyValidationPipe(galleryCreateSchema),
  )
  @UseInterceptors(FileFieldsInterceptor([{ name: 'file', maxCount: 1 }]))
  async create(
    @Body() body: GalleryDto,
    @UploadedFiles()
    files: {
      file?: Array<Express.Multer.File>;
    },
  ) {
    return this.galleryService.createOne(body, files?.file[0]);
  }

  @Get('/')
  @HttpCode(HttpStatus.OK)
  async getAll(
    @Query()
    query: QueryGetAllStringifyType,
    @Res() res: Response,
  ) {
    const { range, filter, sort } = parseQueryGetAll(query);
    console.log('query', query);

    const galleries = await this.galleryService.getAll({ range, filter, sort });

    res
      .setHeader(
        'Content-Range',
        `gallery ${range[0]}-${range[1]}/${galleries.total}`,
      )
      .json(galleries.data);
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async getOneById(@Param('id') id: string) {
    return this.galleryService.getOne(Number(id));
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  async deleteById(@Param('id') id: string) {
    return this.galleryService.deleteById(Number(id));
  }
}
