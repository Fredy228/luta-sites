import * as Joi from 'joi';
import { parsePhoneNumber } from 'libphonenumber-js';

const phoneNumberExtension = (joi) => ({
  type: 'phoneNumber',
  base: joi.string(),
  messages: {
    'phoneNumber.invalid': 'phone|Не корректный номер телефона',
  },
  validate(value: string, helpers: { error: (arg0: string) => any }) {
    const phoneNumber = parsePhoneNumber(value, 'UA');
    if (!phoneNumber || !phoneNumber.isValid()) {
      return { value, errors: helpers.error('phoneNumber.invalid') };
    }
  },
});

const customJoi = Joi.extend(phoneNumberExtension);

export const smsOrderCreateSchema = customJoi
  .object()
  .keys({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        'string.email': 'email|Email введен не корректно',
        'string.empty': 'email|Email пустой',
      }),
    name: Joi.string().min(1).max(250).required().messages({
      'string.empty': 'name|Имя не может быть пустым.',
      'string.min': 'name|Имя не может быть меньше чем 1 символ',
      'string.max': 'name|Имя не может быть больше чем 250 символов',
    }),
    message: Joi.string().min(1).max(500).messages({
      'string.empty': 'message|Сообщение не может быть пустым.',
      'string.min': 'message|Сообщение не может быть меньше чем 1 символ',
      'string.max': 'message|Сообщение не может быть больше чем 500 символов',
    }),
    getPrice: Joi.string().min(1).max(10),
    phone: customJoi.phoneNumber().required(),
  })
  .options({ stripUnknown: true });
