import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FieldError } from 'react-hook-form';

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
      background-color: ${theme.colors.hover};
    }
    &:disabled {
      opacity: 0.4;
      background-color: ${theme.colors.secondary};
    }
  `};
`;
export const AuthLink = styled(NavLink)`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: 18px;
    font-style: normal;
    font-weight: ${theme.fontWeight.normal};
    line-height: normal;
    transition: color 0.1s;
    &:hover {
      color: ${theme.colors.hover};
    }
  `};
`;
export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font-size: 11px;
    font-style: normal;
    font-weight: ${theme.fontWeight.medium};
    line-height: normal;
    position: absolute;
    bottom: -15px;
    left: 5px;
  `};
`;
export const InputWrapper = styled.div`
  position: relative;
`;
export const IconTwitter = styled.img`
  width: 40px;
  height: 33px;
  filter: invert(48%) sepia(89%) saturate(1415%) hue-rotate(179deg) brightness(94%) contrast(101%);
`;

export const ImageApp = styled.img`
  width: 100%;
  height: 100%;
`;
export const ImageUserWrapper = styled.div`
  width: 50px;
`;
export const ImageUser = styled(ImageApp)`
  border-radius: 100%;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  justify-content: center;
`;
export const UserTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.third};
    font-size: 20px;
    font-style: normal;
    font-weight: ${theme.fontWeight.bold};
    line-height: normal;
    margin: 0px;
  `};
`;

export const UserSubtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.option};
    font-size: 16px;
    font-style: normal;
    font-weight: ${theme.fontWeight.normal};
    line-height: normal;
    margin: 0px;
  `};
`;
