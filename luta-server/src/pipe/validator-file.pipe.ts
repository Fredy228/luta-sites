import {
  ArgumentMetadata,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CustomException } from '../services/custom-exception';

type TFileImg = {
  [key: string]: Array<Express.Multer.File>;
};
@Injectable()
export class FileValidatorPipe implements PipeTransform {
  constructor(private options: { maxSize: number; nullable: boolean }) {}

  transform(files: TFileImg, { type }: ArgumentMetadata) {
    if (['query', 'body', 'param'].includes(type)) {
      return files;
    }

    if (!files) {
      if (this.options.nullable) {
        return files;
      } else {
        throw new CustomException(
          HttpStatus.BAD_REQUEST,
          `Ви не завантажили ні одного файлу`,
        );
      }
    }

    for (const key in files) {
      if (Object.prototype.hasOwnProperty.call(files, key)) {
        files[key].forEach((item: Express.Multer.File) => {
          if (item.size / (1024 * 1024) > this.options.maxSize)
            throw new CustomException(
              HttpStatus.BAD_REQUEST,
              `Файл слишком большой. Максимальный размер ${this.options.maxSize} MB`,
            );
        });
      }
    }

    return files;
  }
}
