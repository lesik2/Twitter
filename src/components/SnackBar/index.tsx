import { useEffect, useState } from 'react';
import { ISnackbar } from '@customTypes/index';

import { Wrapper } from './styled';
import { useShowSnackBar } from './hooks/useShowSnackBar';

export function SnackBar({ message, error }: ISnackbar) {
  const [isOpen, setIsOpen] = useState(true);
  useEffect(()=>{
    if(error){
      setIsOpen(true);
    }
  },[error])
  useShowSnackBar(isOpen, setIsOpen);

  return <Wrapper $isOpen={isOpen}>{message}</Wrapper>;
}
