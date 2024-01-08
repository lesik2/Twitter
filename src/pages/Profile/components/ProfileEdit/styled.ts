import { Button, Input } from '@components/ui';
import styled, { css } from 'styled-components';

export const ProfileEditSection = styled.section`
  ${({ theme }) => css`
    padding: 20px 20px 25px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primary};
    border-radius: 20px;
    ${theme.breakPoints.laptop} {
      padding: 15px;
    }
    ${theme.breakPoints.mobileL} {
      padding: 10px 7px 10px 7px;
    }
  `};
`;
export const LabelInput = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.third};
    font-family: ${theme.fontFamily.serif};
    font-size: 18px;
    font-style: normal;
    font-weight: ${theme.fontWeight.bold};
    line-height: normal;
    ${theme.breakPoints.laptopL} {
      font-size: 16px;
    }
    ${theme.breakPoints.laptop} {
      font-size: 15px;
    }
    ${theme.breakPoints.tablet} {
      font-size: 14px;
    }
    ${theme.breakPoints.mobileL} {
      font-size: 13px;
    }
  `};
`;
export const EditInput = styled(Input)`
  ${({ theme }) => css`
    width: 260px;
    ${theme.breakPoints.laptopL} {
      width: 240px;
      height: 55px;
      font-size: 16px;
    }
    ${theme.breakPoints.laptop} {
      height: 50px;
      font-size: 15px;
    }
    ${theme.breakPoints.tablet} {
      width: 220px;
      height: 45px;
    }
    ${theme.breakPoints.mobileL} {
      width: 160px;
      height: 30px;
      font-size: 14px;
      padding: 18px 12px 20px 12px;
    }
    ${theme.breakPoints.mobileS} {
      width: 150px;
      height: 27px;
    }
  `}
`;
export const WrapperBtn = styled.div`
  position: relative;
  margin-top: 15px;
`;
export const EditBtn = styled(Button)`
  ${({ theme }) => css`
    width: 450px;
    align-self: center;
    ${theme.breakPoints.laptopL} {
      width: 350px;
      height: 50px;
      font-size: 17px;
      margin-top: 10px;
    }
    ${theme.breakPoints.laptop} {
      width: 320px;
      height: 45px;
    }
    ${theme.breakPoints.tablet} {
      width: 290px;
      height: 40px;
    }
    ${theme.breakPoints.tablet} {
      width: 220px;
      height: 35px;
    }
    ${theme.breakPoints.mobileS} {
      width: 200px;
      height: 30px;
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.third};
    font-family: ${theme.fontFamily.serif};
    font-size: 25px;
    font-style: normal;
    font-weight: ${theme.fontWeight.bold};
    line-height: normal;
    margin: 20px 0px 25px 0px;
    ${theme.breakPoints.laptop} {
      font-size: 20px;
      margin: 15px 0px 20px 0px;
    }
    ${theme.breakPoints.mobileL} {
      font-size: 18px;
      margin: 10px 0px 15px 0px;
    }
    ${theme.breakPoints.mobileS} {
      font-size: 16px;
    }
  `};
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;
export const WrapperInputs = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 25px;
    ${theme.breakPoints.laptopL} {
      gap: 20px;
      margin-bottom: 20px;
    }
  `}
`;

export const LabelWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 25px;
    ${theme.breakPoints.mobileL} {
      gap: 15px;
    }
    ${theme.breakPoints.mobileS} {
      gap: 10px;
    }
  `}
`;
