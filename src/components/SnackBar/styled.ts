import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ $isOpen?: boolean }>`
  ${({ theme, $isOpen }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    padding: 10px 15px 10px 15px;
    border-radius: 10px;
    background-color: ${theme.colors.secondary};
    font-size: 17px;
    color: ${theme.colors.primary};
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
    opacity: ${$isOpen ? '1' : '0'};
    visibility: ${$isOpen ? 'visible' : 'hidden'};
    transition:
      opacity 0.4s,
      visibility 0.4s;
  `};
`;
