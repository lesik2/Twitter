import { User } from 'firebase/auth';
import { Dispatch } from 'react';

import { IDate } from './models';

export interface IDropDown {
  type: TDate;
  values: number[];
  date: IDate;
  setDate: Dispatch<React.SetStateAction<IDate>>;
}
export interface IDateChoose {
  date: IDate;
  setDate: Dispatch<React.SetStateAction<IDate>>;
}

export type TDate = keyof IDate;
export interface IRouter {
  user: User | null | undefined;
}
export interface ISnackbar {
  message: string;
  error?: Error;
}
export interface ITweetComponent {
  id: string;
  nameUser: string;
  date: string;
  email: string;
  text: string;
  image: string | undefined;
  authorId: string;
  amountOfLikes: number;
  isLiked: boolean;
}
