import { device } from '@constants/theme';
import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  padding: 18px 0px 18px 0px;
  width: 100%;
  display: flex;
  gap: 19px;
  align-items: flex-start;
  justify-content: center;
  @media ${device.laptopL} {
    padding: 12px 0px 12px 0px;
    flex-wrap: wrap;
    gap: 15px;
  }
  @media ${device.tablet} {
    gap: 10px;
    width: 90%;
  }
`;
export const FooterLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.third};
    font-size: 13px;
    font-style: normal;
    font-weight: ${theme.fontWeight.normal};
    line-height: normal;
  `};
  @media ${device.tablet} {
    font-size: 12px;
  }
`;
