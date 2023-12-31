import { IDate } from '@customTypes/models';

export const isValidDate = (date: IDate) => Object.values(date).filter((value) => value).length === 3;
