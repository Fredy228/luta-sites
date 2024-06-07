import { HttpStatus, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { join } from 'path';
import { ensureDir, removeSync, unlink } from 'fs-extra';
import * as sharp from 'sharp';
import { CustomException } from './custom-exception';

interface InterfaceOptionImage {
  width: number;
  height: number;
  fit?: 'inside' | 'outside';
}

@Injectable()
export class ImageService {
  async saveOne(
    file: Express.Multer.File,
    pathSegments: string[],
    options?: InterfaceOptionImage,
  ) {
    const fileName = `${uuidv4()}.webp`;
    const fullFilePath = join(process.cwd(), 'static', ...pathSegments);

    await ensureDir(fullFilePath);
    await sharp(file.buffer)
      .resize(options || null)
      .toFormat('webp')
      .webp({ quality: 85 })
      .toFile(join(fullFilePath, fileName));

    return join(...pathSegments, fileName);
  }

  async saveMany(
    files: Array<Express.Multer.File>,
    pathSegments: string[],
    options?: InterfaceOptionImage,
  ) {
    const fullFilePath = join(process.cwd(), 'static', ...pathSegments);
    await ensureDir(fullFilePath);

    const arrFilesPath: string[] = await Promise.all(
      files.map(async (file: Express.Multer.File): Promise<string> => {
        return await this.saveOne(file, pathSegments, options);
      }),
    );

    return arrFilesPath;
  }

  async deleteImages(filePaths: string[]): Promise<void> {
    try {
      await Promise.all(
        filePaths.map((filePath: string) =>
          unlink(join(process.cwd(), 'static', filePath)),
        ),
      );
    } catch (err) {
      console.error(err);
      throw new CustomException(
        HttpStatus.BAD_REQUEST,
        'Помилка при видаленні файлу',
      );
    }
  }

  async deleteFolders(folderPaths: string[]): Promise<void> {
    try {
      await Promise.all(
        folderPaths.map((folderPath: string) => removeSync(folderPath)),
      );
    } catch (err) {
      throw new CustomException(
        HttpStatus.BAD_REQUEST,
        'Помилка при видаленні файлу',
      );
    }
  }
}
