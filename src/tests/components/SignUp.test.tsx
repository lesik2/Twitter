import { isValidDate } from '@pages/SignUp/helpers/index';
import { SignUp } from '@pages/SignUp';
import userEvent from '@testing-library/user-event';

import { render, screen } from '../test.utils';

jest.mock('@db/index', () => ({
  auth: {},
}));

describe('SignUp', () => {
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
  test('Should render SignUp component', () => {
    render(<SignUp />);
    expect(screen.getByTestId('sign-up')).toBeInTheDocument();
  });
  test('Should display error messages for invalid inputs', async () => {
    render(<SignUp />);

    const nameInput = screen.getByPlaceholderText('Name');
    await userEvent.type(nameInput, '23');

    const emailInput = screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'invalidemail');

    const passwordInput = screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput,'123');

    const phoneNumberInput = screen.getByPlaceholderText('Phone number');
    await userEvent.type(phoneNumberInput, '123456');

    const registerBtn = screen.getByRole('button', {name: 'Next'});
    expect(registerBtn).toBeDisabled();

    expect(screen.queryByText('Invalid input. Please enter letters only.')).toBeInTheDocument();
    expect(screen.queryByText('Invalid email address.')).toBeInTheDocument();
    expect(screen.queryByText('Password should contains at least 8 symbols')).toBeInTheDocument();
    expect(screen.queryByText('Invalid phone number. Format: +375XXXXXXXXX')).toBeInTheDocument();
  });
});
