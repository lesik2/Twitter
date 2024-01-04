import React from 'react';
import { IMenu } from '@customTypes/index';

import { Content, Wrapper } from './styled';

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
