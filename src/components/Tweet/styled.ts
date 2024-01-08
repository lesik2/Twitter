import styled, { css } from 'styled-components';
import { device } from '@constants/theme';

import { ImageApp, ImageUserWrapper, UserSubtitle } from '../ui';

export const TweetArticle = styled.article`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    padding: 10px 35px 21px 35px;
    border-bottom: 1px solid ${theme.colors.border};
    width: 100%;
    position: relative;
    cursor: pointer;
    &:hover {
      background-color: ${theme.colors.lightBorder};
    }
  `};
  @media ${device.tablet} {
    padding: 10px 5px 10px 5px;
  }
`;
export const UserWrapperImage = styled(ImageUserWrapper)`
  width: 55px;
  margin-right: 7px;
  @media ${device.tablet} {
    width: 45px;
  }
`;
export const Wrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 12px;
  @media ${device.tablet} {
    bottom: 5px;
    top: auto;
  }
`;
export const OptionWrapper = styled.div`
  position: relative;
`;
export const OptionWrapperBtn = styled.button`
  ${({ theme }) => css`
    height: 33px;
    width: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background-color: inherit;
    border: none;
    outline: none;
    margin: 0px 0px 0px 15px;
    padding: 0px;
    transition: background-color 0.2s;
    &:hover {
      background-color: ${theme.colors.border};
    }
  `};
  @media ${device.tablet} {
    height: 28px;
    width: 28px;
    margin: 0px 0px 0px 10px;
  }
`;
export const OptionList = styled.ul`
  ${({ theme }) => css`
    width: 200px;
    position: absolute;
    top: 30px;
    right: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: ${theme.colors.primary};
    border-radius: 10px;
    border: 1px solid ${theme.colors.border};
    box-shadow: 0 0 10px ${theme.colors.border};
    margin: 0;
    padding: 0;
    z-index: ${theme.zIndex.burgerMenuBack};
  `};
  @media ${device.tablet} {
    width: 150px;
    top: -25px;
    right: 25px;
  }
`;
export const OptionItem = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.third};
    padding: 10px 20px 10px 20px;
    font-size: 16px;
    font-style: normal;
    font-weight: ${theme.fontWeight.normal};
    line-height: normal;
    border-radius: 9px;
    width: 100%;
    margin: 0px;
    word-break: break-word;
    cursor: pointer;
    &:hover {
      background-color: ${theme.colors.border};
    }
  `};
  @media ${device.tablet} {
    font-size: 14px;
    padding: 7px 15px 7px 15px;
  }
  @media ${device.mobileL} {
    font-size: 13px;
  }
`;
export const OptionImage = styled.img`
  height: 100%;
  width: 20px;
`;
export const TweetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 85%;
  @media ${device.tablet} {
    width: 90%;
  }
`;
export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  margin-bottom: 5px;
  @media ${device.mobileL} {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const TweetSubTitle = styled(UserSubtitle)`
  font-size: 20px;
  @media ${device.tablet} {
    font-size: 14px;
  }
  @media ${device.mobileL} {
    font-size: 13px;
  }
`;
export const TweetText = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.third};
    font-size: 18px;
    font-style: normal;
    font-weight: ${theme.fontWeight.normal};
    line-height: normal;
    word-break: break-word;
  `};
  @media ${device.tablet} {
    font-size: 16px;
  }
`;
export const LikesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 22px;
`;
export const LikeImageBtn = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  outline: none;
  background-color: inherit;
  &:hover {
    cursor: pointer;
  }
  @media ${device.tablet} {
    width: 20px;
    height: 20px;
  }
`;
export const LikeText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.option};
    font-size: 16px;
    font-style: normal;
    font-weight: ${theme.fontWeight.normal};
    line-height: normal;
  `};
  @media ${device.tablet} {
    font-size: 14px;
  }
`;
export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 15px;
`;
export const ImageTwitter = styled(ImageApp)`
  border-radius: 20px;
`;
