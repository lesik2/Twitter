import { device } from '@constants/theme';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ $isOpen?: boolean }>`
  ${({ theme, $isOpen }) => css`
    width: 22%;
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: auto;
    @media ${device.laptopM} {
      width: 15%;
    }
    @media ${device.tablet} {
      position: fixed;
      top: 0px;
      left: 0px;
      width: ${$isOpen ? '100%' : '0px'};
      height: 100vh;
      transition: width 0.2s;
      z-index: ${(props) => props.theme.zIndex.burgerMenuBack};
      background-color: ${theme.colors.modalWrapper};
    }
  `};
`;
export const Content = styled.div<{ $isOpen?: boolean }>`
  ${({ theme, $isOpen }) => css`
    @media ${device.tablet} {
      position: fixed;
      top: 0px;
      left: ${$isOpen ? '0px' : '-100%'};
      width: 300px;
      height: 100vh;
      background-color: ${(props) => props.theme.colors.primary};
      display: flex;
      flex-direction: column-reverse;
      gap: 80px;
      align-items: center;
      justify-content: center;
      transition: left 0.4s;
      z-index: ${theme.zIndex.burgerMenu};
    }
  `};
`;
