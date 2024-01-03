import styled, { css } from 'styled-components';
import { device } from '@constants/theme';

import { SearchBtn } from '../ui/search';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    justify-content: center;
    background-color: ${theme.colors.primary};
    transition: background-color 0.2s;
  `};
`;

export const OpenSearchBtn = styled(SearchBtn)<{ $isOpen?: boolean }>`
  ${({ theme, $isOpen }) => css`
    display: none;
    @media ${device.laptopM} {
      display: block;
      position: fixed;
      top: 20px;
      left: auto;
      z-index: ${theme.zIndex.burgerMenu};
      right: ${$isOpen ? '255px' : '20px'};
      transition: right 0.4s;
      border-radius: 50%;
      padding: 7px;
      width: 38px;
      height: 38px;
      &:hover {
        background-color: ${theme.colors.lightBorder};
      }
    }
  `};
`;
