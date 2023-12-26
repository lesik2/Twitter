import { IDate } from '@customTypes/index';

export const isValidDate = (date: IDate) => Object.values(date).filter((value) => value).length === 3;
