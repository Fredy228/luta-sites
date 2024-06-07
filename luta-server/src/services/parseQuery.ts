import { QueryGetAllType } from '../types/query';
import { CustomException } from './custom-exception';
import { HttpStatus } from '@nestjs/common';

export const parseQueryGetAll = (query: {
  range?: string;
  sort?: string;
  filter?: string;
}): QueryGetAllType => {
  try {
    const filter = query.filter ? JSON.parse(query.filter) : undefined;
    const sort = query.sort ? JSON.parse(query.sort) : undefined;
    const range = query.range ? JSON.parse(query.range) : undefined;

    if (sort && sort.length !== 2) new Error();
    if (range && range.length !== 2) new Error();

    return {
      filter,
      sort,
      range,
    };
  } catch (e) {
    throw new CustomException(
      HttpStatus.BAD_REQUEST,
      `Не верно переданы query`,
    );
  }
};
