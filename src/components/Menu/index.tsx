import React from 'react';

import { Content, Wrapper } from './styled';

export type PositionModal = 'left'|'right';
export interface IMenu {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  position: PositionModal;
}
export function Menu({ children, isOpen, setIsOpen, position }: IMenu) {
  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <Wrapper onClick={closeMenu} $isOpen={isOpen} $position={position}>
      <Content onClick={handleClick} $isOpen={isOpen} $position={position}>
        {children}
      </Content>
    </Wrapper>
  );
}

export default Menu;
