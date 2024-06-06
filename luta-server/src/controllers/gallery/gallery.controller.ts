import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
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

@Controller('api/gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(new ImageValidatorPipe({ maxSize: 10, nullable: false }))
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
    @Query() query: { range: string; sort: string[] },
    @Res() res: Response,
  ) {
    console.log('query', query);
    const range: number[] = JSON.parse(query.range);

    const galleries = await this.galleryService.getAll();

    console.log('galleries', galleries);

    res
      .setHeader(
        'Content-Range',
        `gallery ${range[0]}-${range[1]}/${galleries.total}`,
      )
      .json(galleries.data);
  }
}
