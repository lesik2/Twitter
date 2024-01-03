import { Button, UserTitle, UserInfo } from '@components/ui';
import styled, { css } from 'styled-components';
import { device } from '@constants/theme';

export const HeaderSection = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const TweetsWrapper = styled.div`
  width: 100%;
  height: 87px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 15px;
  @media ${device.tablet} {
    padding-left: 60px;
  }
`;
export const UserInfoProfile = styled(UserInfo)`
  gap: 6px;
`;

export const UserNameProfile = styled(UserTitle)`
  font-size: 24px;
`;

export const WrapperImage = styled.div`
  width: 100%;
  height: 280px;
`;

export const UserWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    border-bottom: 1px solid ${theme.colors.border};
    width: 100%;
    height: 304px;
    display: flex;
    padding: 85px 0px 51px 25px;
    justify-content: flex-start;
    align-items: flex-end;
  `};
`;
export const EditBtn = styled(Button)`
  ${({ theme }) => css`
    border-radius: 50px;
    border: 1px solid ${theme.colors.border};
    padding: 10px 15px;
    height: 44px;
    width: 120px;
    font-weight: ${theme.fontWeight.meduimL};
    background-color: ${theme.colors.primary};
    position: absolute;
    color: ${theme.colors.third};
    font-family: ${theme.fontFamily.roboto};
    top: 20px;
    right: 23px;
    &:hover {
      background-color: ${theme.colors.border};
    }
  `};
`;

export const UserWrapperImage = styled.div`
  width: 150px;
  height: 150px;
  position: absolute;
  top: -60px;
  left: 0px;
`;

export const FollowWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: center;
`;
export const FollowAmount = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.colors.third};
    font-family: ${theme.fontFamily.serif};
  `};
`;
export const FollowText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.option};
    font-size: 18px;
    font-style: normal;
    font-weight: ${theme.fontWeight.normal};
    line-height: normal;
    margin-top: 57px;
  `};
`;
export const UserProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const UserDescription = styled.h3`
  ${({ theme }) => css`
    margin: 0px;
    color: ${theme.colors.secondary};
    color: ${theme.colors.third};
    font-size: 18px;
    font-style: normal;
    font-weight: ${theme.fontWeight.normal};
    line-height: normal;
    margin-top: 17px;
  `};
`;
export const MarkText = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
  `};
`;
