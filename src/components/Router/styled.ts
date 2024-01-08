import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    justify-content: center;
    background-color: ${theme.colors.primary};
    transition: background-color 0.2s;
  `};
`;
