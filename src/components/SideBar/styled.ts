import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from '@constants/theme';

import { Button, IconTwitter, UserTitle } from '../ui';

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-bottom: 10px;
  @media ${device.tablet} {
    padding: 0px 10px 10px 25px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 25px 51px 30px 10px;
  @media ${device.laptopL} {
    margin: 25px 10px 30px 10px;
    align-items: flex-end;
  }
  @media ${device.laptopM} {
    align-items: center;
    margin: 15px 5px 10px 0px;
  }
`;
export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 25px 0px 25px 0px;
  gap: 5px;
  @media ${device.laptopM} {
    align-items: center;
    margin: 15px 0px 10px 0px;
  }
  @media ${device.tablet} {
    align-items: flex-start;
  }
`;
export const TweetBtn = styled(Button)`
  width: 230px;
  height: 55px;
  border-radius: 27px;
  @media ${device.laptopM} {
    width: 100px;
    font-size: 17px;
    height: 45px;
  }
  @media ${device.tablet} {
    width: 180px;
  }
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
  `};
  @media ${device.laptopM} {
    padding: 7px 15px 7px 10px;
  }
`;
export const Icon = styled.img`
  width: 28px;
  height: 28px;
  @media ${device.laptopM} {
    width: 25px;
  }
`;
export const SideBarIconTwitter = styled(IconTwitter)`
  @media ${device.laptopL} {
    align-self: center;
  }
  @media ${device.laptopM} {
    width: 38px;
    height: 30px;
  }
  @media ${device.tablet} {
    align-self: flex-start;
    margin-left: 15px;
  }
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
  @media ${device.laptopM} {
    display: none;
  }
  @media ${device.tablet} {
    display: block;
    font-size: 16px;
  }
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
  @media ${device.laptopL} {
    margin-right: 10px;
  }
  @media ${device.laptopM} {
    width: 100px;
    margin-right: 5px;
    font-size: 17px;
    height: 45px;
  }
  @media ${device.tablet} {
    width: 180px;
  }
`;
export const UserWrapper = styled.div`
  padding: 18px 46px 18px 17px;
  display: flex;
  gap: 37px;
  align-items: center;
  justify-content: center;
  margin: 0px 0px 15px 0px;
  height: 97px;
  @media ${device.laptopM} {
    gap: 10px;
    padding: 18px 10px 12px 5px;
  }
  @media ${device.laptop} {
    flex-direction: column;
  }
  @media ${device.tablet} {
    flex-direction: row;
    gap: 30px;
  }
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
  `};
`;
