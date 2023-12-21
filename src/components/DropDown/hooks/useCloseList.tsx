
import { RefObject, useEffect, useRef } from 'react';

export function useCloseList(
  handleCloseList: () => void
): [RefObject<HTMLDivElement>, RefObject<HTMLUListElement>]{

  const wrapperRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node) &&
        listRef.current &&
        !listRef.current.contains(event.target as Node)
      ) {
        handleCloseList();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef,listRef, handleCloseList]);

  return [wrapperRef, listRef]
}
