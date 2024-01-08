import { IDate } from '@customTypes/models';

export const getArrayOfNumbers = (start: number, end: number) => {
  const numbers: number[] = [];
  for (let i = start; i <= end; i += 1) {
    numbers.push(i);
  }

  return numbers;
};

export const getDays = (date: IDate) => {
  const days: number[] = [];
  if (date.month) {
    const year = date.year ?? new Date().getFullYear();
    const inputDate = new Date(year, date.month + 1, 0);
    days.push(...getArrayOfNumbers(1, inputDate.getDate()));
  } else {
    days.push(...getArrayOfNumbers(1, 31));
  }

  return days;
};
