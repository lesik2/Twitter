import styled, { css } from 'styled-components';

import { SearchBtn } from '../ui/search';

export const OpenSearchBtn = styled(SearchBtn)<{ $isOpen?: boolean }>`
  ${({ theme, $isOpen }) => css`
    display: none;
    ${theme.breakPoints.laptopM} {
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
