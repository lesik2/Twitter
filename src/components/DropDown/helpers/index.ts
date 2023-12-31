import { IDate } from '@customTypes/models';
import { Dispatch } from 'react';

export const getMonthName = (numberOfMonth: number) => {
  const date = new Date(0, numberOfMonth);

  return date.toLocaleString('en', { month: 'long' });
};

export const validateDayForMonth = (date: IDate, setDate: Dispatch<React.SetStateAction<IDate>>) => {
  const { day, month } = date;
  if (month && day) {
    const year = date.year ?? new Date().getFullYear();
    const inputDate = new Date(year, month + 1, 0).getDate();
    if (day > inputDate) {
      setDate({ ...date, day: undefined });
    }
  }
};
