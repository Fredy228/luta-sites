import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
type TFileImg = {
    [key: string]: Array<Express.Multer.File>;
};
export declare class ImageValidatorPipe implements PipeTransform {
    private options;
    constructor(options: {
        maxSize: number;
    });
    transform(files: TFileImg, { type }: ArgumentMetadata): TFileImg;
}
export {};