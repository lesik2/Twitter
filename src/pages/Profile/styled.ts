import styled, { css } from 'styled-components';

export const ProfileSection = styled.section`
  ${({ theme }) => css`
    width: 51%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-right: 1px solid ${theme.colors.border};
    border-left: 1px solid ${theme.colors.border};
    overflow-y: auto;
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
export const TweetsTitle = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 241px;
    height: 45px;
    margin: 19px 0px 48px 0px;
    border-bottom: 1px solid ${theme.colors.border};
    color: ${theme.colors.third};
    font-family: ${theme.fontFamily.serif};
    font-size: 18px;
    font-style: normal;
    font-weight: ${theme.fontWeight.bold};
    line-height: normal;
  `};
`;
export const TweetsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;
