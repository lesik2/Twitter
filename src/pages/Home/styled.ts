import styled, { css } from 'styled-components';
import { device } from '@constants/theme';

export const HomeSection = styled.section`
  ${({ theme }) => css`
    width: 51%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid ${theme.colors.border};
    border-left: 1px solid ${theme.colors.border};
    padding-top: 87px;
  `};
  @media ${device.laptopM} {
    width: 85%;
  }
  @media ${device.tablet} {
    width: 100%;
  }
`;
