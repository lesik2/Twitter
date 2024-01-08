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
export const WrapperImage = styled.div`
  width: 100%;
`;
export const UserWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    height: 140px;
    ${theme.breakPoints.tablet} {
      height: 100px;
    }
  `}
`;
export const UserWrapperImage = styled.div`
  ${({ theme }) => css`
    width: 150px;
    height: 150px;
    position: absolute;
    top: -60px;
    left: 0px;
    ${theme.breakPoints.tablet} {
      width: 120px;
      height: 120px;
      top: -40px;
    }
  `}
`;
export const TweetsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;
