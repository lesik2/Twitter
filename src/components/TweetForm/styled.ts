import styled, { css, keyframes } from 'styled-components';

import { Button } from '../ui';

export const TweetFormSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    align-items: flex-start;
    padding: 19px 17px 13px 27px;
    border-bottom: 1px solid ${theme.colors.border};
    gap: 27px;
    position: relative;
    ${theme.breakPoints.tablet} {
      padding: 12px 10px 10px 16px;
    }
  `};
`;
export const UserWrapperImage = styled.div`
  ${({ theme }) => css`
    width: 55px;
    ${theme.breakPoints.tablet} {
      width: 48px;
    }
  `}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 90%;
`;
export const TwittText = styled.textarea`
  ${({ theme }) => css`
    font-size: 22px;
    font-style: normal;
    width: 100%;
    resize: none;
    font-weight: ${theme.fontWeight.meduimL};
    line-height: normal;
    color: ${theme.colors.third};
    border: none;
    outline: none;
    min-height: 50px;
    max-height: 250px;
    overflow-y: auto;
    background-color: ${theme.colors.primary};
    &::placeholder {
      color: ${theme.colors.disabled};
    }
    &:focus {
      border: none;
      outline: none;
    }
    ${theme.breakPoints.tablet} {
      font-size: 18px;
    }
    ${theme.breakPoints.mobileL} {
      font-size: 15px;
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
  ${({ theme }) => css`
    width: 116px;
    height: 50px;
    ${theme.breakPoints.tablet} {
      height: 38px;
      width: 95px;
      font-size: 16px;
    }
    ${theme.breakPoints.mobileL} {
      height: 33px;
      width: 85px;
      font-size: 15px;
    }
  `}
`;
export const ImageWrapper = styled.div`
  width: 90%;
  height: 100%;
  margin-top: 15px;
  position: relative;
`;

export const ImageTwitter = styled.img`
  border-radius: 20px;
  width: 100%;
  height: 100%;
`;
export const TwittInput = styled.input`
  display: none;
`;
export const LabelTweet = styled.label`
  ${({ theme }) => css`
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
    ${theme.breakPoints.tablet} {
      width: 18px;
      height: 18px;
    }
  `}
`;
export const Close = styled.div`
  ${({ theme }) => css`
    position: absolute;
    right: 10px;
    top: 10px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    transition: background-color 0.2s;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.border};
    &:hover {
      background-color: ${theme.colors.option};
    }
    ${theme.breakPoints.tablet} {
      width: 29px;
      height: 29px;
    }
  `};
`;
export const ImageClose = styled.img`
  ${({ theme }) => css`
    transition: filter 0.2s;
    width: 28px;
    height: 28px;
    ${theme.breakPoints.tablet} {
      width: 22px;
      height: 22px;
    }
  `}
`;

const loader = keyframes`
  from {
    width: 100%;
  }

  to {
    width: 0%;
  }
`;

export const LoaderStatus = styled.div`
  ${({ theme }) => css`
    animation: ${loader} 4s linear infinite;
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 3px;
    background-color: ${theme.colors.secondary};
  `};
`;
