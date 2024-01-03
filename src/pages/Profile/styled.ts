import { device } from '@constants/theme';
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
  @media ${device.laptopM} {
    width: 85%;
  }
  @media ${device.tablet} {
    width: 100%;
  }
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
  @media ${device.tablet} {
    font-size: 16px;
    margin: 15px 0 20px 0px;
    height: 30px;
    width: 200px;
  }
`;
export const TweetsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;
