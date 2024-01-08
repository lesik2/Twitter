import { FieldError } from 'react-hook-form';
import styled, { css } from 'styled-components';

export const Input = styled.input<{ $error?: FieldError }>`
  ${({ theme, $error }) => css`
    height: 70px;
    border-radius: 6px;
    border: 1px solid ${$error ? theme.colors.error : theme.colors.border};
    background-color: ${theme.colors.primary};
    color: ${theme.colors.third};
    font-size: 18px;
    font-style: normal;
    font-weight: ${theme.fontWeight.normal};
    line-height: normal;
    padding: 23px 20px 26px 20px;
    outline: none;
    &::placeholder {
      color: ${theme.colors.option};
    }
    &:focus {
      border: 2px solid ${$error ? theme.colors.error : theme.colors.third};
    }
  `};
`;
