import styled, { css } from 'styled-components';

export const UserSection = styled.section`
  ${({ theme }) => css`
    width: 51%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-right: 1px solid ${theme.colors.border};
    border-left: 1px solid ${theme.colors.border};
    overflow-y: auto;
    padding-top: 87px;
    ${theme.breakPoints.laptopM} {
      width: 85%;
    }
    ${theme.breakPoints.tablet} {
      width: 100%;
    }
  `};
`;
export const TweetsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;
