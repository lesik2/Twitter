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
export interface IBurgerMenu {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export type PositionModal = 'left' | 'right';
export interface IMenu {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  position: PositionModal;
}
export interface ISearch {
  onClose: () => void;
}
export interface ISideBar {
  onClose: () => void;
}
export interface ITweetForm {
  onClose?: () => void;
}
