import { useCallback, useEffect, useState } from 'react';
import arrowIcon from '@assets/icons/arrow.svg';
import { IDropDown } from '@customTypes/index';

import {
  Icon, ItemList, List, SelectedValue, Wrapper,
} from './styled';
import { getMonthName, validateDayForMonth } from './helpers';
import { useCloseList } from './hooks/useCloseList';


export function DropDown({type, date, setDate, values}: IDropDown) {

  const [active, setActive] = useState(false);
  const [value, setValue] = useState<number|string>(date[type]??type);



  useEffect(() => {
    if (type === 'day') {
      setValue(date[type] ?? type)
    }
  }, [date, type])


  const handleClick = () => {
    setActive(!active);
  }

  const handleCloseList = useCallback(()=>{
    setActive(false);
  },[])

  const handleSelect = (select: number) => {
      setValue(type === 'month'?getMonthName(select):select);
      const newDate = {...date, [type]:select};
      setDate(newDate)
      handleCloseList();
      validateDayForMonth(newDate, setDate)
  };

  const [wrapperRef, listRef] = useCloseList(handleCloseList);
  

  return (
    <Wrapper ref={wrapperRef} $type={type}>
      <SelectedValue type='button'  onClick={handleClick}>
        {value}
        <Icon alt="arrow" src={arrowIcon} />
      </SelectedValue>
      <List ref={listRef} $active={active}>
          {values.map((item)=>(
            <ItemList key={item} onClick={()=>handleSelect(item)}>
              {type === 'month'? getMonthName(item):item}
            </ItemList>
          ))}
      </List>
    </Wrapper>
  );
  
}