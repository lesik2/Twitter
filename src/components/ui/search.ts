import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SearchSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 10px 10px 18px;
    ${theme.breakPoints.laptopL} {
      padding: 20px 3px 10px 3px;
      align-items: center;
    }
    ${theme.breakPoints.laptopM} {
      padding: 70px 3px 10px 3px;
    }
  `}
`;
export const SearchWrapper = styled.div`
  position: relative;
`;
export const SearchInput = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.third};
    width: 373px;
    height: 55px;
    border: none;
    outline: none;
    background-color: ${theme.colors.border};
    border-radius: 31px;
    font-size: 18px;
    font-style: normal;
    padding: 15px 10px 20px 64px;
    font-weight: ${theme.fontWeight.normal};
    line-height: normal;
    &::placeholder {
      color: ${theme.colors.option};
    }
    &:focus {
      border: 2px solid ${theme.colors.option};
    }
    ${theme.breakPoints.laptopL} {
      width: 300px;
    }
    ${theme.breakPoints.tablet} {
      height: 48px;
      width: 285px;
      font-size: 16px;
    }
  `};
`;
export const SearchBtn = styled.button`
  ${({ theme }) => css`
    width: 24px;
    height: 24px;
    position: absolute;
    top: 15px;
    left: 20px;
    background-color: inherit;
    border: none;
    outline: none;
    padding: 0;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.1);
    }
    ${theme.breakPoints.tablet} {
      width: 20px;
      height: 20px;
      top: 12px;
    }
  `};
`;
export const SearchResultsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: ${theme.colors.lightBorder};
    border-radius: 10px;
    padding: 43px 20px 50px 5px;
    gap: 10px;
    ${theme.breakPoints.laptopL} {
      padding: 30px 3px 40px 3px;
    }
  `};
`;
export const SearchResultText = styled.h2`
  ${({ theme }) => css`
    margin: 0px 0px 29px 10px;
    color: ${theme.colors.third};
    font-family: ${theme.fontFamily.serif};
    font-size: 24px;
    font-style: normal;
    font-weight: ${theme.fontWeight.large};
    line-height: normal;
    ${theme.breakPoints.laptopL} {
      font-size: 20px;
    }
  `};
`;

export const UserWrapper = styled(NavLink)`
  ${({ theme }) => css`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 15px;
    padding: 9px;
    cursor: pointer;
    &:hover {
      background-color: ${theme.colors.border};
    }
  `};
`;
export const UserInfoWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: flex-start;
    justify-content: center;
    margin: 0px 31px 0px 13px;
    ${theme.breakPoints.laptopL} {
      margin: 0px 10px 0px 8px;
    }
  `};
`;

export const UserTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.third};
    font-size: 18px;
    font-style: normal;
    font-weight: ${theme.fontWeight.bold};
    line-height: normal;
    margin: 0px;
    ${theme.breakPoints.tablet} {
      font-size: 16px;
    }
  `};
`;

export const UserSubtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.option};
    font-size: 15px;
    font-style: normal;
    font-weight: ${theme.fontWeight.normal};
    line-height: normal;
    margin: 0px;
  `};
`;
export const FollowBtn = styled.button`
  ${({ theme }) => css`
    display: inline-flex;
    padding: 10px 18px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 50px;
    background: ${theme.colors.third};
    color: ${theme.colors.primary};
    font-family: ${theme.fontFamily.serif};
    font-size: 18px;
    font-style: normal;
    font-weight: ${theme.fontWeight.bold};
    line-height: 100%;
    outline: none;
    border: none;
    ${theme.breakPoints.laptopL} {
      font-size: 16px;
      padding: 8px 15px;
    }
  `};
`;
export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    width: 60px;
    ${theme.breakPoints.laptopL} {
      width: 50px;
    }
  `}
`;
