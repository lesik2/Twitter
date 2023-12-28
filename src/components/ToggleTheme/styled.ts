import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;
export const ToggleThemeInput = styled.input`
  display: none;
  &:checked + .theme-label .theme-bowl {
    transform: translateX(25px);
  }
`;
export const ToggleThemeLabel = styled.label`
  ${({ theme }) => css`
    display: block;
    width: 50px;
    height: 26px;
    border-radius: 50px;
    border: 2px solid ${theme.colors.disabled};
    position: relative;
    cursor: pointer;
  `};
`;
export const ThemeBowl = styled.div<{ $checked?: boolean }>`
  ${({ theme, $checked }) => css`
    background-color: ${$checked ? theme.colors.disabled : theme.colors.primary};
    border-radius: 100%;
    width: 25px;
    height: 25px;
    border: 2px solid ${theme.colors.disabled};
    position: absolute;
    bottom: -1px;
    left: -2px;
    transition:
      transform 0.3s,
      background-color 0.3s;
  `};
`;
