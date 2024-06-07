import * as Joi from 'joi';

import { GalleryTypeEnum } from '../enum/gallery-type.enum';

export const galleryCreateSchema = Joi.object()
  .keys({
    title: Joi.string().min(1).max(250).required().messages({
      'string.empty': 'Заголовок не может быть пустым.',
      'string.min': 'Заголовок не может быть меньше чем 1 символ',
      'string.max': 'Заголовок не может быть больше чем 250 символов',
    }),
    type: Joi.string()
      .valid(...Object.values(GalleryTypeEnum))
      .required(),
  })
  .options({ stripUnknown: true });
