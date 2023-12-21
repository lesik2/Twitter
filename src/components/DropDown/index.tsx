import { useEffect, useState } from 'react';
import arrowIcon from '@assets/icons/arrow.svg';
import { IDropDown } from '@customTypes/index';

import {
  Icon, ItemList, List, SelectedValue, Wrapper,
} from './styled';
import { getMonthName, validateDayForMonth } from './helpers';


export function DropDown({type, date, setDate, values}: IDropDown) {

  const [active, setActive] = useState(false);
  const [value, setValue] = useState<number|string>(date[type]??type);
  const handleClick = () => {
    setActive(!active);
  }

  const handleSelect = (select: number) => {
      setValue(type === 'month'?getMonthName(select):select);
      const newDate = {...date, [type]:select};
      setDate(newDate)
      setActive(!active);
      validateDayForMonth(newDate, setDate)
  };

  useEffect(()=>{
    if(type === 'day'){
      setValue(date[type]??type)
    }
  },[date, type])

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