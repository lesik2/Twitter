import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    height: 60px;
    border-radius: 76px;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.primary};
    font-family: ${theme.fontFamily.serif};
    font-size: 18px;
    font-style: normal;
    font-weight: ${theme.fontWeight.bold};
    line-height: normal;
    outline: none;
    border: none;
    transition: background-color 0.2s;
    &:hover {
      cursor: pointer;
      background-color: ${theme.colors.hover};
    }
    &:disabled {
      cursor: default;
      opacity: 0.4;
      background-color: ${theme.colors.secondary};
    }
  `};
`;
