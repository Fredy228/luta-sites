import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Gallery } from '../../entity/gallery.entity';
import { GalleryDto } from './gallery.dto';
import { ImageService } from '../../services/image.service';
import { GalleryTypeEnum } from '../../enum/gallery-type.enum';

@Injectable()
export class GalleryService {
  constructor(
    @InjectRepository(Gallery)
    private galleryRepository: Repository<Gallery>,
    private readonly imageService: ImageService,
  ) {}

  async createOne(
    body: GalleryDto,
    photo: Express.Multer.File,
  ): Promise<Gallery> {
    const path = await this.imageService.saveOne(photo, ['gallery', body.type]);

    const newPhoto = this.galleryRepository.create({
      title: body.title,
      path,
      type: body.type,
    });

    await this.galleryRepository.save(newPhoto);

    return newPhoto;
  }

  async getAll(type: GalleryTypeEnum = GalleryTypeEnum.LAST_WORKS): Promise<{
    data: Gallery[];
    total: number;
  }> {
    const [result, total] = await this.galleryRepository.findAndCount({
      where: {
        type,
      },
    });

    return {
      data: result,
      total,
    };
  }
}
