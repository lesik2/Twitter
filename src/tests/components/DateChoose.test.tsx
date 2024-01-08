import { getArrayOfNumbers, getDays } from '@components/DateDropDown/helpers/index';
import { DateDropDown } from '@components/DateDropDown/index';
import { IDateChoose } from '@customTypes/index';

import { render, screen } from '../test.utils';

describe('DateDropDown', () => {
  test('Should return array of numbers between start and end with start and end', () => {
    expect(getArrayOfNumbers(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(getArrayOfNumbers(2015, 2020)).toEqual([2015, 2016, 2017, 2018, 2019, 2020]);
  });
  test('Should get array of 31 numbers if month is undefined', () => {
    expect(getDays({ day: 10, year: 1978 }).length).toBe(31);
    expect(getDays({}).length).toBe(31);
    expect(getDays({})[0]).toBe(1);
    expect(getDays({})[30]).toBe(31);
  });
  test('Should get array with numbers of days in certain month', () => {
    const currentYear = new Date().getFullYear();
    const februaryDays = new Date(currentYear, 2, 0).getDate();
    expect(getDays({ month: 1 }).length).toBe(februaryDays);
  });
  test('Should render DateDropDown component', () => {
    const props: IDateChoose = {
      date: {},
      setDate: jest.fn(),
    };

    render(<DateDropDown {...props} />);
    expect(screen.getByTestId('date-choose')).toBeInTheDocument();
  });
  test('Should render 3 DropDown', () => {
    const props: IDateChoose = {
      date: {},
      setDate: jest.fn(),
    };

    render(<DateDropDown {...props} />);
    expect(screen.getByTestId('date-choose').children.length).toBe(3);
  });
});
