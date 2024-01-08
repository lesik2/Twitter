import styled, { css } from 'styled-components';
import { Button, Input, AuthLink } from '@components/ui';

export const SectionSignUp = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const RegisterWrapper = styled.div`
  ${({ theme }) => css`
    width: 750px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 30px 40px 55px 40px;
    ${theme.breakPoints.tablet} {
      padding: 25px 10px 40px 20px;
    }
    ${theme.breakPoints.mobileL} {
      padding: 25px 5px 40px 10px;
    }
  `}
`;
export const WrapperBtn = styled.div`
  position: relative;
  margin-top: 18px;
`;
export const RegisterBtn = styled(Button)`
  ${({ theme }) => css`
    width: 670px;
    ${theme.breakPoints.tablet} {
      width: 380px;
      height: 50px;
      font-size: 15px;
    }
    ${theme.breakPoints.mobileL} {
      width: 300px;
      height: 40px;
    }
    ${theme.breakPoints.mobileS} {
      width: 280px;
      height: 35px;
      font-size: 14px;
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.third};
    font-family: ${theme.fontFamily.serif};
    font-size: 30px;
    font-style: normal;
    font-weight: ${theme.fontWeight.bold};
    line-height: normal;
    margin: 43px 0px 40px 0px;
    ${theme.breakPoints.tablet} {
      font-size: 25px;
    }
    ${theme.breakPoints.mobileM} {
      font-size: 22px;
    }
  `};
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const WrapperInputs = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 26px;
    ${theme.breakPoints.mobileL} {
      gap: 15px;
      margin-bottom: 10px;
    }
  `}
`;
export const SignUpInput = styled(Input)`
  ${({ theme }) => css`
    width: 670px;
    ${theme.breakPoints.tablet} {
      width: 380px;
      height: 60px;
      font-size: 15px;
    }
    ${theme.breakPoints.mobileL} {
      width: 300px;
      height: 45px;
    }
    ${theme.breakPoints.mobileS} {
      width: 280px;
      height: 40px;
      font-size: 14px;
    }
  `}
`;

export const Link = styled(AuthLink)`
  ${({ theme }) => css`
    margin: 26px 0px 17px 0px;
    ${theme.breakPoints.mobileL} {
      font-size: 15px;
    }
  `}
`;
export const SubTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.third};
    font-size: 18px;
    font-family: ${theme.fontFamily.serif};
    font-style: normal;
    font-weight: ${theme.fontWeight.bold};
    line-height: normal;
    margin-bottom: 32px;
    ${theme.breakPoints.mobileL} {
      font-size: 16px;
      margin-bottom: 20px;
    }
  `};
`;
export const TextDate = styled.p`
  ${({ theme }) => css`
    width: 670px;
    color: ${theme.colors.third};
    font-size: 16px;
    font-style: normal;
    font-weight: ${theme.fontWeight.normal};
    line-height: 24px;
    margin-bottom: 32px;
    ${theme.breakPoints.tablet} {
      font-size: 13px;
      width: 85%;
    }
    ${theme.breakPoints.mobileL} {
      font-size: 12px;
      width: 100%;
    }
    ${theme.breakPoints.mobileM} {
      font-size: 11px;
    }
  `};
`;
export const InputWrapper = styled.div`
  position: relative;
`;
export const WrapperLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
