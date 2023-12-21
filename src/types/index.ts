import { Dispatch } from "react";

export interface IDropDown{
  type: TDate;
  values: number[];
  date: IDate;
  setDate: Dispatch<React.SetStateAction<IDate>>;
}
export interface IDateChoose{
  date: IDate;
  setDate: Dispatch<React.SetStateAction<IDate>>;
}
export interface IDate{
  day?: number;
  month?: number;
  year?: number;
}
export type TDate = keyof IDate;