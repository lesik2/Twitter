import { useId } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { changeTheme } from '@store/reducers/themeSlice';

import { ThemeBowl, ToggleThemeInput, ToggleThemeLabel, Wrapper } from './styled';

export function ToggleTheme() {
  const id = useId();
  const currentTheme = useAppSelector((state) => state.themeReducer.currentTheme);
  const dispatch = useAppDispatch();

  const handleOnChange = () => {
    dispatch(changeTheme());
  };

  return (
    <Wrapper data-testid='toggle-theme'>
      <ToggleThemeInput
        onChange={handleOnChange}
        checked={currentTheme !== 'light'}
        type='checkbox'
        id={`${id}-themeInput`}
      />
      <ToggleThemeLabel className='theme-label' htmlFor={`${id}-themeInput`}>
        <ThemeBowl data-cy='bowl-theme' $checked={currentTheme !== 'light'} className='theme-bowl' />
      </ToggleThemeLabel>
    </Wrapper>
  );
}
