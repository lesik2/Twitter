import { IDropDown } from '@customTypes/index';
import {getMonthName,validateDayForMonth } from '@components/DropDown/helpers/index'
import { DropDown } from '@components/DropDown';
import userEvent from '@testing-library/user-event';

import { render, screen } from "../test.utils"

describe('DropDown', ()=>{
  test('Should return name of month',()=>{
    expect(getMonthName(0)).toBe('January');
    expect(getMonthName(11)).toBe('December');
    expect(getMonthName(3)).toBe('April');
  })
  test('Should reset day when it exceeds the number of days in the selected month', () => {
    const setDateMock = jest.fn();
    const date = {
      day: 31,
      month: 1,
      year: 2022,
    };

    validateDayForMonth(date, setDateMock);

    expect(setDateMock).toHaveBeenCalledWith({ ...date, day: undefined });
  });

  test('Should not reset day when it is within the number of days in the selected month', () => {
    const setDateMock = jest.fn();
    const date = {
      day: 15,
      month: 2,
      year: 2022,
    };

    validateDayForMonth(date, setDateMock);

    expect(setDateMock).not.toHaveBeenCalled();
  });
  test('Should render DropDown', ()=>{
    const props: IDropDown = {
      date:{},
      setDate: jest.fn(),
      type: 'year',
      values: [2000,2001,2002,2003,2004,2005,2006],
    }
    
    render(<DropDown {...props}/>)
    expect(screen.getByTestId('drop-down')).toBeInTheDocument();
  })
  test('Should show list with values after clicking on button', async () => {
    const props: IDropDown = {
      date: {},
      setDate: jest.fn(),
      type: 'year',
      values: [2000, 2001, 2002, 2003, 2004, 2005, 2006],
    };

    render(<DropDown {...props} />);
    const selectedValue = screen.getByRole('button');
    await userEvent.click(selectedValue);
    const list = screen.queryByTestId('list-drop-down');
    expect(list).toBeInTheDocument();
    expect(list?.children.length).toBe(7);
  });

  test('Should call setDate and validateDayForMonth when selecting a value', async () => {
    const setDateMock = jest.fn();
    const mockValidateDayForMonth = jest.fn(()=>1);
    jest.mock('@components/DropDown/helpers',()=>({
      validateDayForMonth: mockValidateDayForMonth,
    }))
    const props: IDropDown = {
      date: {},
      setDate: setDateMock,
      type: 'month',
      values: [0, 1, 2, 3, 4, 5, 6],
    };

    render(<DropDown {...props} />);
    const listItem = screen.getByText('January');
    await userEvent.click(listItem);

    expect(setDateMock).toHaveBeenCalledTimes(1);
    expect(setDateMock).toHaveBeenCalledWith({ month: 0 });

  });

  test('Should display selected value', () => {
    const props: IDropDown = {
      date: { month: 2 },
      setDate: jest.fn(),
      type: 'month',
      values: [0, 1, 2, 3, 4, 5, 6],
    };

    render(<DropDown {...props} />);
    const selectedValue = screen.getByRole('button');
    expect(selectedValue).toHaveTextContent('March');
  });

})