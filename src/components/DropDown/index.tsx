import { useCallback, useEffect, useState } from 'react';
import arrowIcon from '@assets/icons/arrow.svg';
import { IDropDown } from '@customTypes/index';
import { useCloseList } from '@hooks/useCloseList';

import { Icon, ItemList, List, SelectedValue, Wrapper } from './styled';
import { getMonthName, validateDayForMonth } from './helpers';

export function DropDown({ type, date, setDate, values }: IDropDown) {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState<number | string>(date[type] ?? type);

  useEffect(() => {
    const defaultValue = date[type];
    if (defaultValue) {
      setValue(type === 'month' ? getMonthName(defaultValue) : defaultValue);
    } else {
      setValue(type);
    }
  }, [date, type]);

  const handleClick = () => {
    setActive(!active);
  };

  const handleCloseList = useCallback(() => {
    setActive(false);
  }, []);

  const handleSelect = (select: number) => {
    const newDate = { ...date, [type]: select };
    setDate(newDate);
    handleCloseList();
    validateDayForMonth(newDate, setDate);
  };

  const [wrapperRef, listRef] = useCloseList(handleCloseList);

  return (
    <Wrapper ref={wrapperRef} $type={type}>
      <SelectedValue type='button' onClick={handleClick}>
        {value}
        <Icon alt='arrow' src={arrowIcon} />
      </SelectedValue>
      <List ref={listRef} $active={active}>
        {values.map((item) => (
          <ItemList key={item} onClick={() => handleSelect(item)}>
            {type === 'month' ? getMonthName(item) : item}
          </ItemList>
        ))}
      </List>
    </Wrapper>
  );
}
