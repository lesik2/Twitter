import React from 'react';

import { Content, Wrapper } from './styled';

export interface IMenu {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export function Menu({ children, isOpen, setIsOpen }: IMenu) {
  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <Wrapper onClick={closeMenu} $isOpen={isOpen}>
      <Content onClick={handleClick} $isOpen={isOpen}>
        {children}
      </Content>
    </Wrapper>
  );
}

export default Menu;
