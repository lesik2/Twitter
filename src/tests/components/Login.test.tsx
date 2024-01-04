import { LogIn } from '@pages/LogIn/index';
import userEvent from '@testing-library/user-event';
import { ROUTES } from '@constants/index';

import { render, screen, waitFor } from '../test.utils';


const hookMocked = jest.fn();

const userData = {
  email: 'lesha@gmail.com',
  password: 'Alex1234!',
};

const mockedUseNavigate = jest.fn();

jest.mock(
  'react-router-dom',
  () =>
    ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => mockedUseNavigate,
    }) as unknown,
);

jest.mock('react-firebase-hooks/auth', () => ({
  useSignInWithEmailAndPassword: () => hookMocked() as void,
}));

jest.mock('@db/index', () => ({
  auth: {},
}));

describe('Login page', () => {
  beforeEach(() => {
    hookMocked.mockReturnValue([jest.fn(), null, false, null]);
    render(<LogIn />);
  });
  afterEach(() => {
    hookMocked.mockClear();
  });

  test('Should render Login component', () => {
    expect(screen.getByTestId('login-page')).toBeInTheDocument();
  });
  test('Should have disabled submit button and empty inputs', () => {
    const emailInput: HTMLInputElement = screen.getByTestId('email');
    const passwordInput: HTMLInputElement = screen.getByTestId('password');

    expect(screen.getByText('Log in')).toBeDisabled();
    expect(emailInput.value).toBe('');
    expect(passwordInput.value).toBe('');
  });
  test('Should enabled submit button after filling inputs', async () => {
    const emailInput: HTMLInputElement = screen.getByTestId('email');
    const passwordInput: HTMLInputElement = screen.getByTestId('password');

    expect(screen.getByText('Log in')).toBeDisabled();

    await userEvent.type(emailInput, 'lesha@gmail.com');
    await userEvent.type(passwordInput, 'Alex1234!');

    expect(emailInput.value).toBe('lesha@gmail.com');
    expect(passwordInput.value).toBe('Alex1234!');
    expect(screen.getByText('Log in')).not.toBeDisabled();
  });
  test('Should display a loader during the login process', async () => {
    hookMocked.mockReturnValue([jest.fn(), null, true, null]);
    const emailInput: HTMLInputElement = screen.getByTestId('email');
    const passwordInput: HTMLInputElement = screen.getByTestId('password');
    const submitButton = screen.getByText('Log in');

    await userEvent.type(emailInput, 'lesha@gmail.com');
    await userEvent.type(passwordInput, 'Alex1234!');
    await userEvent.click(submitButton);
    expect(screen.queryByTestId('loader')).toBeInTheDocument();
  });
  test('Should reset inputs and disable button after submission', async () => {
    const emailInput: HTMLInputElement = screen.getByTestId('email');
    const passwordInput: HTMLInputElement = screen.getByTestId('password');
    const submitButton = screen.getByText('Log in');

    await userEvent.type(emailInput, 'lesha@gmail.com');
    await userEvent.type(passwordInput, 'Alex1234!');
    expect(emailInput.value).toBe('lesha@gmail.com');
    expect(passwordInput.value).toBe('Alex1234!');
    expect(submitButton).not.toBeDisabled();
    await userEvent.click(submitButton);
    await waitFor(() => {
      expect(emailInput.value).toBe('');
      expect(passwordInput.value).toBe('');
      expect(submitButton).toBeDisabled();
    });
  });
  test('Should call signIn method with inputs values', async () => {
    const signInWithEmailAndPasswordMock = jest.fn();
    hookMocked.mockReturnValue([signInWithEmailAndPasswordMock, null, false, null]);

    const emailInput: HTMLInputElement = screen.getByTestId('email');
    const passwordInput: HTMLInputElement = screen.getByTestId('password');
    const submitButton = screen.getByText('Log in');

    await userEvent.type(emailInput, 'lesha@gmail.com');
    await userEvent.type(passwordInput, 'Alex1234!');
    await userEvent.click(submitButton);

    expect(signInWithEmailAndPasswordMock).toHaveBeenCalledWith('lesha@gmail.com', 'Alex1234!');
  });
  test('Should navigate to Home page after success login', async () => {
    const signInWithEmailAndPasswordMock = jest.fn().mockResolvedValue(userData);

    hookMocked.mockReturnValue([signInWithEmailAndPasswordMock, null, false, null]);

    const emailInput: HTMLInputElement = screen.getByTestId('email');
    const passwordInput: HTMLInputElement = screen.getByTestId('password');
    const submitButton = screen.getByText('Log in');

    await userEvent.type(emailInput, 'lesha@gmail.com');
    await userEvent.type(passwordInput, 'Alex1234!');
    await userEvent.click(submitButton);
    expect(mockedUseNavigate).toHaveBeenCalledWith(ROUTES.HOME);
  });
});
