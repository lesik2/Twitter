import styled, { css } from 'styled-components';

import { ImageApp } from '../ui';
import { UserSubtitle } from '../ui/profile';

export const TweetArticle = styled.article`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    padding: 10px 35px 21px 35px;
    border-bottom: 1px solid ${theme.colors.border};
    width: 100%;
    cursor: pointer;
    &:hover {
      background-color: ${theme.colors.lightBorder};
    }
  `};
`;
export const UserWrapperImage = styled.div`
  width: 55px;
  margin-right: 7px;
`;
export const ImageUser = styled(ImageApp)`
  border-radius: 100%;
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
  `};
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
`;
export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  margin-bottom: 5px;
`;
export const TweetSubTitle = styled(UserSubtitle)`
  font-size: 20px;
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
`;
export const LikeText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.option};
    font-size: 16px;
    font-style: normal;
    font-weight: ${theme.fontWeight.normal};
    line-height: normal;
  `};
`;
export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 15px;
`;
export const ImageTwitter = styled(ImageApp)`
  border-radius: 20px;
`;
