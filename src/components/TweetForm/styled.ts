import styled, { css } from 'styled-components';

import { Button, ImageApp } from '../ui';

export const TweetFormSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    align-items: flex-start;
    padding: 19px 17px 13px 27px;
    border-bottom: 1px solid ${theme.colors.border};
    gap: 27px;
  `};
`;
export const UserWrapperImage = styled.div`
  width: 55px;
`;
export const ImageUser = styled(ImageApp)`
  border-radius: 100%;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 100%;
`;
export const TwittText = styled.textarea`
  ${({ theme }) => css`
    font-size: 22px;
    font-style: normal;
    width: 100%;
    resize: none;
    font-weight: ${theme.fontWeight.meduimL};
    line-height: normal;
    border: none;
    outline: none;
    min-height: 50px;
    max-height: 250px;
    overflow-y: auto;
    &::placeholder {
      color: ${theme.colors.disabled};
    }
    &:focus {
      border: none;
      outline: none;
    }
  `};
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  margin-top: 15px;
  width: 100%;
`;
export const BtnTweet = styled(Button)`
  width: 116px;
  height: 50px;
`;
export const ImageWrapper = styled.div`
  width: 679px;
  height: 453px;
  margin-top: 15px;
`;
export const ImageTwitter = styled(ImageApp)`
  border-radius: 20px;
`;
export const TwittInput = styled.input`
  display: none;
`;
export const LabelTwitt = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: transform 0.2s;
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
