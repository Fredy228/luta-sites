import { HttpStatus, Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Gallery } from '../../entity/gallery.entity';
import { GalleryDto } from './gallery.dto';
import { ImageService } from '../../services/image.service';
import { GalleryTypeEnum } from '../../enum/gallery-type.enum';
import { CustomException } from '../../services/custom-exception';
import { QueryGetAllType } from '../../types/query';

@Injectable()
export class GalleryService {
  constructor(
    @InjectRepository(Gallery)
    private galleryRepository: Repository<Gallery>,
    private readonly imageService: ImageService,
    private readonly entityManager: EntityManager,
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

  async getAll({ range, filter, sort }: QueryGetAllType): Promise<{
    data: Gallery[];
    total: number;
  }> {
    const [result, total] = await this.galleryRepository.findAndCount({
      where: {
        ...filter,
      },
      order: {
        [sort[0]]: sort[1],
      },
    });

    return {
      data: result,
      total,
    };
  }

  async getOne(id: number): Promise<Gallery> {
    if (!id)
      throw new CustomException(
        HttpStatus.BAD_REQUEST,
        `ID ${id} не корректное`,
      );

    const gallery = await this.galleryRepository.findOneBy({
      id,
    });

    if (!gallery)
      throw new CustomException(
        HttpStatus.NOT_FOUND,
        `Фото не найдено (ID ${id})`,
      );

    return gallery;
  }

  async deleteById(id: number): Promise<Gallery> {
    if (!id)
      throw new CustomException(
        HttpStatus.BAD_REQUEST,
        `ID ${id} не корректное`,
      );

    return this.entityManager.transaction(async (entityManager) => {
      const gallery = await this.getOne(id);

      await entityManager.delete(Gallery, gallery.id);

      await this.imageService.deleteImages([gallery.path]);

      return gallery;
    });
  }
}
