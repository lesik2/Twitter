import { useState } from 'react';
import arrowIcon from '@assets/icons/arrow.svg';
import { IDropDown } from '@customTypes/index';

import {
  Icon, ItemList, List, SelectedValue, Wrapper,
} from './styled';


export function DropDown({type}: IDropDown) {

  const [active, setActive] = useState(false);
  const [value, setValue] = useState('Month');
  const handleClick = () => {
    setActive(!active);
  }

  const handleSelect = (select: string) => {
      setValue(select);
      setActive(!active);
  };

  return (
    <Wrapper $type={type}>
      <SelectedValue  onClick={handleClick}>
        {value}
        <Icon alt="arrow" src={arrowIcon} />
      </SelectedValue>
      <List $active={active}>
          <ItemList onClick={()=>handleSelect('April')}>
            April
          </ItemList>
          <ItemList onClick={()=>handleSelect('May')}>
            May
          </ItemList>
      </List>
    </Wrapper>
  );
  
}