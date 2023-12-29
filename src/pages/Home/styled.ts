import styled, { css } from 'styled-components';

export const HomeSection = styled.section`
  ${({ theme }) => css`
    width: 51%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid ${theme.colors.border};
    border-left: 1px solid ${theme.colors.border};
    padding-top: 87px;
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
