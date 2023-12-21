import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FieldError } from 'react-hook-form';

export const Input = styled.input<{$error?: FieldError}>`
  ${({ theme, $error }) => css`
    height: 70px;
    border-radius: 6px;
    border: 1px solid ${ $error?theme.colors.error:theme.colors.border};
    background-color: ${theme.colors.primary};
    color: ${theme.colors.third};
    font-size: 18px;
    font-style: normal;
    font-weight: ${theme.fontWeight.normal};
    line-height: normal;
    padding: 23px 20px 26px 20px;
    outline: none;
    &::placeholder{
      color: ${theme.colors.option};
    }
    &:focus{
      border: 2px solid ${ $error?theme.colors.error:theme.colors.third};
    }
  `};

`
export const Button = styled.button`
  ${({ theme }) => css`
    height: 60px;
    border-radius: 76px;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.primary};
    font-family: ${theme.fontFamily.font};
    font-size: 18px;
    font-style: normal;
    font-weight: ${theme.fontWeight.bold};
    line-height: normal;
    outline: none;
    border: none;
    transition: background-color 0.3s;
    &:hover{
      background-color:${theme.colors.hover};
    }
    &:disabled{
      opacity: 0.5;
      background-color: ${theme.colors.third};
    }
  `};
`
export const Link = styled(NavLink)`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: 18px;
    font-style: normal;
    font-weight: ${theme.fontWeight.normal};
    line-height: normal;
    transition: color 0.1s;
    &:hover{
      color:${theme.colors.hover};
    }
  `};
`
export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font-size: 12px;
    font-style: normal;
    font-weight: ${theme.fontWeight.medium};
    line-height: normal;
    position: absolute;
    bottom: -16px;
    left: 5px;
  `};
`
export const InputWrapper  = styled.div`
  position: relative;
`