import { device } from '@constants/theme';
import styled, { css } from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    align-items: center;
  }
`;
export const AuthTitle = styled.h1`
  ${({ theme }) => css`
    margin: 57px 0px 46px 0px;
    color: ${theme.colors.third};
    font-size: 84px;
    font-style: normal;
    font-weight: ${theme.fontWeight.large};
    line-height: normal;
    @media ${device.laptopL} {
      margin: 30px 0 30px 0px;
      font-size: 60px;
    }
    @media ${device.laptop} {
      margin: 20px 0 25px 0px;
      font-size: 50px;
    }
    @media ${device.tablet} {
      font-size: 40px;
    }
    @media ${device.mobileS} {
      font-size: 35px;
    }
  `};
`;
export const AuthSubTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.third};
    font-size: 42px;
    font-style: normal;
    font-weight: ${theme.fontWeight.large};
    line-height: normal;
    margin: 0px 0px 31px 0px;
    @media ${device.laptopL} {
      margin: 0px 0 20px 0px;
      font-size: 35px;
    }
    @media ${device.laptop} {
      font-size: 30px;
    }
    @media ${device.tablet} {
      text-align: center;
    }
    @media ${device.tablet} {
      margin: 0px 0 35px 0px;
      font-size: 27px;
    }
    @media ${device.mobileS} {
      font-size: 25px;
    }
  `};
`;
export const IconTwitter = styled.img`
  width: 50px;
  height: 41px;
  filter: invert(48%) sepia(89%) saturate(1415%) hue-rotate(179deg) brightness(94%) contrast(101%);
  @media ${device.laptop} {
    width: 40px;
    height: 41px;
  }
`;
