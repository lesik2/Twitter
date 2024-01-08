import { NavLink } from 'react-router-dom';
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
    border-top: none;
    position: fixed;
    top: 0;
    left: 50%;
    z-index: ${theme.zIndex.header};
    background-color: ${theme.colors.primary};
    transform: translateX(-55%);
    ${theme.breakPoints.laptop} {
      top: 0;
      transform: translateX(-62%);
    }
    ${theme.breakPoints.laptopM} {
      width: 85%;
      transform: none;
      right: 0px;
      left: auto;
      padding: 0px 65px 0px 25px;
    }
    ${theme.breakPoints.tablet} {
      width: 100%;
      transform: none;
      padding: 0px 65px 0px 60px;
    }
  `};
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`;
export const BackLink = styled(NavLink)<{ $isDark?: boolean }>`
  ${({ $isDark }) => css`
    width: 30;
    height: 21;
    transition: transform 0.2s;
    filter: ${$isDark
      ? 'invert(100%) sepia(0%) saturate(0%) hue-rotate(253deg) brightness(108%) contrast(101%)'
      : ''};
    &:hover {
      transform: scale(1.1);
    }
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
    ${theme.breakPoints.tablet} {
      font-size: 20px;
    }
  `};
`;
