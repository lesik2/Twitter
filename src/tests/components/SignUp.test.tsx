import {isValidDate} from '@pages/SignUp/helpers/index'
import { SignUp } from '@pages/SignUp';

import { render, screen } from "../test.utils"

describe('SignUp', ()=>{
  test('Should return true for a valid date', () => {
    const validDate = {
      day: 10,
      month: 9,
      year: 2022,
    };

    expect(isValidDate(validDate)).toBe(true);
  });

  test('Should return false if any date part is missing', () => {
    const incompleteDate1 = {
      day: 20,
      month: 11,
    };

    const incompleteDate2 = {
      month: 5,
      year: 2023,
    };

    const incompleteDate3 = {
      day: 15,
      year: 2024,
    };

    expect(isValidDate(incompleteDate1)).toBe(false);
    expect(isValidDate(incompleteDate2)).toBe(false);
    expect(isValidDate(incompleteDate3)).toBe(false);
  });

  test('Should return false if all date parts are missing', () => {
    const emptyDate = {};

    expect(isValidDate(emptyDate)).toBe(false);
  });
  test('Should render SignUp component', ()=>{
    render(<SignUp />)
    expect(screen.getByTestId('sign-up')).toBeInTheDocument();
  })

})