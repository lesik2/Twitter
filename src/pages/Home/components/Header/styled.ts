import styled, { css } from 'styled-components';

export const HeaderSection = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 87px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 34px 0px 25px;
    border-bottom: 1px solid ${theme.colors.border};
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
