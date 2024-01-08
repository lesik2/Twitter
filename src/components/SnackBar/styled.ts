import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ $isOpen?: boolean }>`
  ${({ theme, $isOpen }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    padding: 10px 15px 10px 15px;
    border-radius: 10px;
    background-color: ${theme.colors.error};
    font-size: 17px;
    color: ${theme.colors.primary};
    position: absolute;
    bottom: 70px;
    left: 50%;
    transform: translateX(-50%);
    opacity: ${$isOpen ? '1' : '0'};
    visibility: ${$isOpen ? 'visible' : 'hidden'};
    transition:
      opacity 0.4s,
      visibility 0.4s;
    ${theme.breakPoints.tablet} {
      width: 350px;
      font-size: 15px;
    }
    ${theme.breakPoints.mobileL} {
      width: 300px;
      padding: 5px 8px 5px 8px;
      font-size: 14px;
    }
  `};
`;
