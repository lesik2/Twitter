import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  ${({ theme }) => css`
    padding: 18px 0px 18px 0px;
    width: 100%;
    display: flex;
    gap: 19px;
    align-items: flex-start;
    justify-content: center;
    ${theme.breakPoints.laptopL} {
      padding: 12px 0px 12px 0px;
      flex-wrap: wrap;
      gap: 15px;
    }
    ${theme.breakPoints.tablet} {
      gap: 10px;
      width: 90%;
      margin-top: 35px;
    }
  `}
`;
export const FooterLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.third};
    font-size: 13px;
    font-style: normal;
    font-weight: ${theme.fontWeight.normal};
    line-height: normal;
    ${theme.breakPoints.tablet} {
      font-size: 12px;
    }
  `};
`;
