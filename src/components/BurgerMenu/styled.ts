import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ $isOpen?: boolean }>`
  ${({ theme, $isOpen }) => css`
    display: none;
    z-index: ${theme.zIndex.burgerBtn};
    width: 40px;
    height: 40px;
    padding: 15px;
    position: relative;
    cursor: pointer;
    border-radius: 50%;
    &:hover {
      background-color: ${theme.colors.lightBorder};
    }
    &::before {
      content: '';
      position: absolute;
      top: ${$isOpen ? '18px' : '10px'};
      left: 50%;
      width: 20px;
      background: ${theme.colors.third};
      height: 2.5px;
      border-radius: 1px;
      transition:
        transform 0.3s,
        top 0.3s;
      transform: translateX(-50%) ${$isOpen ? 'rotate(45deg)' : ''};
    }
    &::after {
      content: '';
      position: absolute;
      bottom: ${$isOpen ? '19px' : '13px'};
      left: 50%;
      width: 20px;
      background: ${theme.colors.third};
      height: 2.5px;
      border-radius: 1px;
      transition:
        transform 0.3s,
        bottom 0.3s;
      transform: translateX(-50%) ${$isOpen ? 'rotate(-45deg)' : ''};
    }
    ${theme.breakPoints.tablet} {
      display: block;
      position: fixed;
      top: 25px;
      left: ${$isOpen ? '220px' : '15px'};
      transition: left 0.4s;
    }
  `};
`;
export const Line = styled.span<{ $isOpen?: boolean }>`
  ${({ theme, $isOpen }) => css`
    position: absolute;
    top: 17px;
    left: 50%;
    width: 20px;
    background: ${theme.colors.third};
    height: 2.5px;
    border-radius: 1px;
    transition: transform 0.2s;
    transform: translateX(-50%) ${$isOpen ? 'scale(0)' : 'scale(1)'};
  `};
`;
