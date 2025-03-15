import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
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
import {
  galleryCreateSchema,
  galleryUpdateSchema,
} from '../../joi-schema/gallerySchema';
import { QueryGetAllStringifyType } from '../../types/query';
import { parseQueryGetAll } from '../../services/parseQuery';
import { SiteEnum } from '../../enum/site.enum';
import { CustomException } from '../../services/custom-exception';

@Controller('api/gallery-luta')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @Post('/:site')
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(
    new ImageValidatorPipe({ maxSize: 10, nullable: false }),
    new BodyValidationPipe(galleryCreateSchema),
  )
  @UseInterceptors(FileFieldsInterceptor([{ name: 'file', maxCount: 1 }]))
  async create(
    @Param('site') site: SiteEnum,
    @Body() body: GalleryDto,
    @UploadedFiles()
    files: {
      file?: Array<Express.Multer.File>;
    },
  ) {
    if (!Object.values(SiteEnum).includes(site))
      throw new CustomException(HttpStatus.BAD_REQUEST, `Не верный тип сайта`);

    return this.galleryService.createOne(
      body,
      files?.file?.length > 0 ? files?.file[0] : null,
      site,
    );
  }

  @Post('/many/:site')
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(
    new ImageValidatorPipe({ maxSize: 500, nullable: false }),
    new BodyValidationPipe(galleryCreateSchema),
  )
  @UseInterceptors(FileFieldsInterceptor([{ name: 'file', maxCount: 50 }]))
  async createMany(
    @Param('site') site: SiteEnum,
    @Body() body: GalleryDto,
    @UploadedFiles()
    files: {
      file?: Array<Express.Multer.File>;
    },
  ) {
    if (!Object.values(SiteEnum).includes(site))
      throw new CustomException(HttpStatus.BAD_REQUEST, `Не верный тип сайта`);
    if (!(files?.file && files.file?.length > 0))
      throw new CustomException(HttpStatus.BAD_REQUEST, `Файлы не переданы`);

    return Promise.all(
      files.file.map((file: Express.Multer.File) =>
        this.galleryService.createOne(body, file, site),
      ),
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

    console.log('query', { range, filter, sort });

    const galleries = await this.galleryService.getAll({ range, filter, sort });

    res
      // .setHeader(
      //   'Content-Range',
      //   range && range.length === 2
      //     ? `gallery ${range[0]}-${range[1]}/${galleries.total}`
      //     : galleries.total,
      // )
      .json(galleries);
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

  @Put('/:id')
  @HttpCode(HttpStatus.OK)
  @UsePipes(
    new ImageValidatorPipe({ maxSize: 10, nullable: true }),
    new BodyValidationPipe(galleryUpdateSchema),
  )
  @UseInterceptors(FileFieldsInterceptor([{ name: 'file', maxCount: 1 }]))
  async updateById(
    @Param('id') id: string,
    @Body() body: Partial<GalleryDto>,
    @UploadedFiles()
    files: {
      file?: Array<Express.Multer.File>;
    },
  ) {
    return this.galleryService.updateById(
      Number(id),
      body,
      files?.file?.length > 0 ? files?.file[0] : null,
    );
  }
}
