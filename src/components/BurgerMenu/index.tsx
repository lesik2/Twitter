import React from 'react';

import { Line, Wrapper } from './styled';

export interface IBurgerMenu {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function BurgerMenu({ isOpen, setIsOpen }: IBurgerMenu) {
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Wrapper $isOpen={isOpen} onClick={handleClick}>
      <Line $isOpen={isOpen} />
    </Wrapper>
  );
}
