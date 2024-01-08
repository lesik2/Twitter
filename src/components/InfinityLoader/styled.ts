import styled, { keyframes, css } from 'styled-components';

const spin = keyframes`
  100%{
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  animation: ${spin} 1s infinite;
  ${({ theme }) => css`
    display: block;
    align-self: center;
    justify-self: center;
    height: 35px;
    width: 35px;
    border: 4px solid ${theme.colors.border};
    border-radius: 50%;
    border-right-color: ${theme.colors.secondary};
    ${theme.breakPoints.mobileL} {
      height: 25px;
      width: 25px;
    }
  `};
`;
