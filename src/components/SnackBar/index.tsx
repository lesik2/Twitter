import { useState } from 'react';
import { ISnackbar } from '@customTypes/index';

import { Wrapper } from './styled';
import { useShowSnackBar } from './hooks/useShowSnackBar';

export function SnackBar({ message }: ISnackbar) {
  const [isOpen, setIsOpen] = useState(true);

  useShowSnackBar(isOpen, setIsOpen);

  return <Wrapper $isOpen={isOpen}>{message}</Wrapper>;
}
