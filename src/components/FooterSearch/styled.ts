import styled, { css } from 'styled-components';
import { device } from '@constants/theme';

export const FooterTextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 57px;
  gap: 15px;
  @media ${device.laptopL} {
    justify-content: center;
  }
`;
export const FooterText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.option};
    font-size: 16px;
    font-style: normal;
    font-weight: ${theme.fontWeight.normal};
    line-height: normal;
  `};
`;
export const FooterMore = styled(FooterText)`
  cursor: pointer;
`;
export const FooterTwitter = styled.span`
  ${({ theme }) => css`
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: ${theme.colors.third};
    font-size: 16px;
    font-style: normal;
    font-weight: ${theme.fontWeight.normal};
    line-height: normal;
  `};
`;
