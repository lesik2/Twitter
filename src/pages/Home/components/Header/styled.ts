import styled, { css } from 'styled-components';

export const HeaderSection = styled.header`
  ${({ theme }) => css`
    width: 51%;
    height: 87px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 34px 0px 25px;
    border: 1px solid ${theme.colors.border};
    position: fixed;
    top: 0;
    left: 50%;
    z-index: 1000;
    background-color: ${theme.colors.primary};
    transform: translateX(-55%);
  `};
`;
export const Title = styled.h1`
  ${({ theme }) => css`
    margin: 0px;
    color: ${theme.colors.third};
    font-family: ${theme.fontFamily.serif};
    font-size: 24px;
    font-style: normal;
    font-weight: ${theme.fontWeight.bold};
    line-height: normal;
  `};
`;
