import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  padding: 18px 0px 18px 0px;
  width: 100%;
  display: flex;
  gap: 19px;
  align-items: flex-start;
  justify-content: center;
`;
export const FooterLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.third};
    font-size: 13px;
    font-style: normal;
    font-weight: ${theme.fontWeight.normal};
    line-height: normal;
  `};
`;
