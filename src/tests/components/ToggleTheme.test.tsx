import userEvent from '@testing-library/user-event';
import * as Hooks from '@hooks/redux';
import * as actions from '@store/reducers/themeSlice';
import { ToggleTheme } from '@components/ToggleTheme/index';

import { cleanup, render, screen } from '../test.utils';

const useDispatchMock = jest.spyOn(Hooks, 'useAppDispatch');
afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});
describe('ToggleComponent', () => {
  test('should render ToggleTheme component', () => {
    const component = render(<ToggleTheme />);
    expect(component.getByTestId('toggle-theme')).toBeInTheDocument();
  });
  test('changes style of div as checkbox is checked/unchecked', async () => {
    render(<ToggleTheme />);
    const checkbox = screen.getByRole('checkbox', { hidden: true });
    expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
  test('should dispatch actions', async () => {
    const dispatch = jest.fn();
    const mockedChangeTheme = jest.spyOn(actions, 'changeTheme');
    useDispatchMock.mockReturnValue(dispatch);
    render(<ToggleTheme />);
    const checkbox = screen.getByRole('checkbox', { hidden: true });
    await userEvent.click(checkbox);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(mockedChangeTheme).toHaveBeenCalled();
  });
});
