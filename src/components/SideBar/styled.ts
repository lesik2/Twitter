import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Button, IconTwitter, UserTitle } from '../ui';

export const Aside = styled.aside`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-bottom: 10px;
    ${theme.breakPoints.tablet} {
      padding: 0px 10px 10px 25px;
    }
  `}
`;
export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 22px 51px 30px 10px;
    ${theme.breakPoints.laptopL} {
      margin: 25px 10px 30px 10px;
      align-items: flex-end;
    }
    ${theme.breakPoints.laptopM} {
      align-items: center;
      margin: 15px 5px 10px 0px;
    }
  `}
`;
export const Navigation = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 25px 0px 20px 0px;
    gap: 3px;
    ${theme.breakPoints.laptopM} {
      align-items: center;
      margin: 15px 0px 10px 0px;
    }
    ${theme.breakPoints.tablet} {
      align-items: flex-start;
    }
  `}
`;
export const TweetBtn = styled(Button)`
  ${({ theme }) => css`
    width: 230px;
    height: 55px;
    border-radius: 27px;
    ${theme.breakPoints.laptopM} {
      width: 100px;
      font-size: 17px;
      height: 45px;
    }
    ${theme.breakPoints.tablet} {
      width: 180px;
    }
  `}
`;
export const WrapperLink = styled(NavLink)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 20px 8px 10px;
    border-radius: 27px;
    gap: 20px;
    transition: background-color 0.1s;
    &:hover {
      background-color: ${theme.colors.border};
    }
    ${theme.breakPoints.laptopM} {
      padding: 7px 15px 7px 10px;
    }
  `};
`;
export const Icon = styled.img`
  ${({ theme }) => css`
    width: 28px;
    height: 28px;
    ${theme.breakPoints.laptopM} {
      width: 25px;
    }
  `}
`;
export const SideBarIconTwitter = styled(IconTwitter)`
  ${({ theme }) => css`
    ${theme.breakPoints.laptopL} {
      align-self: center;
    }
    ${theme.breakPoints.laptopM} {
      width: 38px;
      height: 30px;
    }
    ${theme.breakPoints.tablet} {
      align-self: flex-start;
      margin-left: 15px;
    }
  `}
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
    ${theme.breakPoints.laptopM} {
      display: none;
    }
    ${theme.breakPoints.tablet} {
      display: block;
      font-size: 16px;
    }
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
    ${theme.breakPoints.laptopL} {
      margin-right: 10px;
    }
    ${theme.breakPoints.laptopM} {
      width: 100px;
      margin-right: 5px;
      font-size: 17px;
      height: 45px;
    }
    ${theme.breakPoints.tablet} {
      width: 180px;
    }
  `};
`;
export const UserWrapper = styled.div`
  ${({ theme }) => css`
    padding: 15px 46px 18px 17px;
    display: flex;
    gap: 37px;
    align-items: center;
    justify-content: center;
    margin: 0px 0px 15px 0px;
    height: 97px;
    ${theme.breakPoints.laptopM} {
      gap: 10px;
      padding: 18px 10px 12px 5px;
    }
    ${theme.breakPoints.laptop} {
      flex-direction: column;
    }
    ${theme.breakPoints.tablet} {
      flex-direction: row;
      gap: 30px;
    }
  `}
`;

export const UserName = styled(UserTitle)`
  font-size: 16px;
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
    ${theme.breakPoints.tablet} {
      width: 425px;
      padding: 5px 10px 10px 10px;
    }
    ${theme.breakPoints.mobileL} {
      width: 315px;
      padding: 5px;
    }
    ${theme.breakPoints.mobileS} {
      width: 295px;
    }
  `};
`;
export const ImageUserWrapper = styled.div`
  width: 50px;
`;
