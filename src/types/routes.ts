import { ReactElement } from "react";

export interface IRoute {
  path: string;
  index?: boolean;
  element: ReactElement;
}