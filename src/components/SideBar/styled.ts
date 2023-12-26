import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Button } from '../ui';

export const Aside = styled.aside`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 22%;
    align-items: flex-end;
    border-right: 1px solid ${theme.colors.border};
  `};
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 31px 51px 76px 10px;
`;
export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 49px 0px 30px 0px;
  gap: 10px;
`;
export const TweetBtn = styled(Button)`
  width: 230px;
  height: 55px;
  border-radius: 27px;
`;
export const WrapperLink = styled(NavLink)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 25px 10px 10px;
    border-radius: 27px;
    gap: 20px;
    transition: background-color 0.1s;
    &:hover {
      background-color: ${theme.colors.border};
    }
  `};
`;
export const Icon = styled.img`
  width: 28px;
  height: 28px;
`;
export const TextLink = styled.h4<{ $isActive?: boolean }>`
  ${({ theme, $isActive }) => css`
    color: ${theme.colors.third};
    margin: 0;
    font-family: ${$isActive ? theme.fontFamily.serif : theme.fontFamily.roboto};
    font-size: 18px;
    font-style: normal;
    font-weight: ${$isActive ? theme.fontWeight.large : theme.fontWeight.medium};
    line-height: normal;
    transition: color 0.2s;
  `};
`;
export const LogOutBtn = styled(Button)`
  ${({ theme }) => css`
    width: 230px;
    height: 55px;
    border-radius: 27px;
    background-color: ${theme.colors.disabled};
    margin-right: 51px;
    &:hover {
      background-color: ${theme.colors.option};
    }
  `};
`;
export const UserWrapper = styled.div`
  padding: 22px 46px 21px 17px;
  display: flex;
  gap: 37px;
  align-items: center;
  justify-content: center;
  margin: 0px 0px 16px 0px;
  height: 97px;
`;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
  justify-content: center;
`;
export const UserName = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.third};
    font-size: 16px;
    font-style: normal;
    font-weight: ${theme.fontWeight.meduimL};
    line-height: normal;
    margin: 0px;
  `};
`;
export const UserEmail = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.option};
    font-size: 16px;
    font-style: normal;
    font-weight: ${theme.fontWeight.normal};
    line-height: normal;
    margin: 0px;
  `};
`;
export const ImageWrapper = styled.div`
  width: 49px;
`;
export const ImageUser = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
`;
