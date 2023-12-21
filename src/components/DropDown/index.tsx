import { useState } from 'react';
import arrowIcon from '@assets/icons/arrow.svg';
import { IDropDown } from '@customTypes/index';

import {
  Icon, ItemList, List, SelectedValue, Wrapper,
} from './styled';
import { getMonthName } from './helpers';


export function DropDown({type, date, setDate, values}: IDropDown) {

  const [active, setActive] = useState(false);
  const [value, setValue] = useState<number|string>(date[type]??type);
  const handleClick = () => {
    setActive(!active);
  }

  const handleSelect = (select: number) => {

      setValue(type === 'month'?getMonthName(select):select);
      setDate({...date, [type]:select})
      setActive(!active);
  };

  return (
    <Wrapper $type={type}>
      <SelectedValue  onClick={handleClick}>
        {value}
        <Icon alt="arrow" src={arrowIcon} />
      </SelectedValue>
      <List $active={active}>
          {values.map((item)=>(
            <ItemList key={item} onClick={()=>handleSelect(item)}>
              {type === 'month'? getMonthName(item):item}
            </ItemList>
          ))}
      </List>
    </Wrapper>
  );
  
}