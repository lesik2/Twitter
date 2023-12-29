import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Button } from '../ui';
import { UserTitle } from '../ui/profile';

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 22%;
  align-items: flex-end;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  padding-bottom: 10px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 25px 51px 30px 10px;
`;
export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 25px 0px 30px 0px;
  gap: 7px;
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
  margin: 0px 0px 15px 0px;
  height: 97px;
`;

export const UserName = styled(UserTitle)`
  font-size: 16px;
`;

export const ImageWrapper = styled.div`
  width: 50px;
`;
export const ImageUser = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
`;
export const TweetWrapper = styled.div`
  ${({ theme }) => css`
    padding: 20px 20px 25px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primary};
    border-radius: 20px;
    width: 750px;
  `};
`;
