import { IBurgerMenu } from '@customTypes/index';

import { Line, Wrapper } from './styled';

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
