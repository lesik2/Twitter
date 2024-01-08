import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    ${theme.breakPoints.tablet} {
      align-items: center;
    }
  `}
`;
export const AuthTitle = styled.h1`
  ${({ theme }) => css`
    margin: 57px 0px 46px 0px;
    color: ${theme.colors.third};
    font-size: 84px;
    font-style: normal;
    font-weight: ${theme.fontWeight.large};
    line-height: normal;
    ${theme.breakPoints.laptopL} {
      margin: 35px 0 30px 0px;
      font-size: 60px;
    }
    ${theme.breakPoints.laptop} {
      font-size: 45px;
    }
    ${theme.breakPoints.mobileL} {
      font-size: 40px;
    }
    ${theme.breakPoints.mobileS} {
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
    ${theme.breakPoints.laptopL} {
      margin: 0px 0 35px 0px;
      font-size: 35px;
    }
    ${theme.breakPoints.laptop} {
      font-size: 30px;
    }
    ${theme.breakPoints.tablet} {
      text-align: center;
    }
    ${theme.breakPoints.mobileL} {
      font-size: 27px;
    }
    ${theme.breakPoints.mobileS} {
      font-size: 25px;
    }
  `};
`;
export const IconTwitter = styled.img`
  ${({ theme }) => css`
    width: 50px;
    height: 41px;
    filter: invert(48%) sepia(89%) saturate(1415%) hue-rotate(179deg) brightness(94%) contrast(101%);
    ${theme.breakPoints.laptop} {
      width: 40px;
      height: 41px;
    }
  `}
`;
