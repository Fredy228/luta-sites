import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { ArraySchema, ObjectSchema } from 'joi';
export declare class BodyValidationPipe implements PipeTransform {
    private schema;
    constructor(schema: ObjectSchema | ArraySchema);
    transform(value: any, metadata: ArgumentMetadata): any;
}
