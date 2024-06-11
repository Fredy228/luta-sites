import { HttpStatus, Injectable } from '@nestjs/common';
import { EntityManager, Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Gallery } from '../../entity/gallery.entity';
import { GalleryDto } from './gallery.dto';
import { ImageService } from '../../services/image.service';
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
    photo: Express.Multer.File | null,
  ): Promise<Gallery> {
    if (!photo)
      throw new CustomException(
        HttpStatus.BAD_REQUEST,
        `Вы не загрузили изображение`,
      );

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
    const filterOption: { [key: string]: any } = {
      ...filter,
    };
    if (filter.title) filterOption.title = Like('%' + filter.title + '%');

    const rangeOption: { [key: string]: any } = {};
    if (range && range.length === 2) {
      rangeOption.take = range[1] - range[0] + 1;
      rangeOption.skip = range[0];
    }

    const sortOption: { [key: string]: any } = {};
    if (sort && sort.length === 2) sortOption[sort[0]] = sort[1];

    const [result, total] = await this.galleryRepository.findAndCount({
      where: filterOption,
      order: sortOption,
      ...rangeOption,
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
    return this.entityManager.transaction(async (entityManager) => {
      const gallery = await this.getOne(id);

      await entityManager.delete(Gallery, gallery.id);

      await this.imageService.deleteImages([gallery.path]);

      return gallery;
    });
  }

  async updateById(
    id: number,
    body: Partial<GalleryDto>,
    photo: Express.Multer.File | null,
  ): Promise<Gallery> {
    console.log('body', body);
    return this.entityManager.transaction(async (entityManager) => {
      const gallery = await this.getOne(id);
      console.log('gallery', gallery);

      const old_path_photo = gallery.path;

      gallery.title = body.title || undefined;
      gallery.type = body.type || undefined;

      if (photo) {
        const path = await this.imageService.saveOne(photo, [
          'gallery',
          body.type || gallery.type,
        ]);

        gallery.path = path;
      }

      await entityManager.save(Gallery, gallery);

      console.log('complete update');

      if (photo) await this.imageService.deleteImages([old_path_photo]);

      console.log('updated-gallery', gallery);

      return gallery;
    });
  }
}
