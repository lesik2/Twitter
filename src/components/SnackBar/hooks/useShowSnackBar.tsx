import { useEffect, Dispatch } from 'react';

export function useShowSnackBar(isOpen: boolean, setIsOpen: Dispatch<React.SetStateAction<boolean>>): void {
  useEffect(() => {
    if (!isOpen) return () => {};

    const idTimer = setTimeout(() => setIsOpen(false), 4000);

    return () => {
      clearTimeout(idTimer);
    };
  }, [isOpen, setIsOpen]);
}
