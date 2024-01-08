import { ReactElement } from 'react';

export interface IModal {
  onClose: () => void;
  children: ReactElement;
}
export interface IPortal {
  children: ReactElement;
}
