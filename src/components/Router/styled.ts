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
export const SearchSection = styled.section`
  width: 27%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 10px 10px 28px;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
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
  `};
`;
export const SearchBtn = styled.button`
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
    padding: 43px 12px 135px 15px;
  `};
`;
export const SearchResultText = styled.h2`
  ${({ theme }) => css`
    margin: 0px 0px 29px 0px;
    color: ${theme.colors.third};
    font-family: ${theme.fontFamily.serif};
    font-size: 24px;
    font-style: normal;
    font-weight: ${theme.fontWeight.large};
    line-height: normal;
  `};
`;

export const UserWrapper = styled.div`
  ${({ theme }) => css`
    width: 358px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 15px;

    cursor: pointer;
    &:hover {
      background-color: ${theme.colors.border};
    }
  `};
`;
export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  justify-content: center;
  margin: 0px 31px 0px 13px;
`;

export const UserTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.third};
    font-size: 18px;
    font-style: normal;
    font-weight: ${theme.fontWeight.bold};
    line-height: normal;
    margin: 0px;
  `};
`;

export const UserSubtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.option};
    font-size: 18px;
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
  `};
`;
export const ImageWrapper = styled.div`
  width: 60px;
`;
export const ImageUser = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
`;
