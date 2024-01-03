import { device } from '@constants/theme';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ $isOpen?: boolean; $position: 'left' | 'right' }>`
  ${({ theme, $isOpen, $position }) => css`
    width: ${$position === 'left' ? '22%' : '27%'};
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: auto;
    @media ${device.laptopM} {
      width: ${$position === 'left' ? '15%' : '0%'};
    }
    @media ${$position === 'left' ? device.tablet : device.laptopM} {
      position: fixed;
      top: 0px;
      left: 0px;
      width: ${$isOpen ? '100%' : '0px'};
      height: 100vh;
      transition: width 0.2s;
      z-index: ${theme.zIndex.burgerMenuBack};
    }
  `};
`;
export const Content = styled.div<{ $isOpen?: boolean; $position: 'left' | 'right' }>`
  ${({ theme, $isOpen, $position }) => css`
    @media ${$position === 'left' ? device.tablet : device.laptopM} {
      position: fixed;
      top: 0px;
      ${$position}: ${$isOpen ? '0px' : '-100%'};
      width: ${$position === 'left' ? '280px' : '320px'};
      height: 100vh;
      background-color: ${theme.colors.primary};
      display: flex;
      flex-direction: column;
      gap: 80px;
      align-items: flex-start;
      justify-content: flex-start;
      transition: ${$position} 0.4s;
      z-index: ${theme.zIndex.burgerMenu};
    }
  `}
`;
