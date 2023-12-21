import styled, { css } from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
`
export const AuthTitle = styled.h1`
  ${({ theme }) => css`
    margin: 57px 0px 46px 0px;
    color: ${theme.colors.third};
    font-size: 84px;
    font-style: normal;
    font-weight: ${theme.fontWeight.large};
    line-height: normal;
  `};
`
export const AuthSubTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.third};
    font-size: 42px;
    font-style: normal;
    font-weight: ${theme.fontWeight.large};
    line-height: normal;
    margin: 0px 0px 31px 0px;
  `};
`
export const IconTwitter = styled.img`
  width: 50px;
  height: 41px;
`