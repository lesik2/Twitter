import styled, { css } from 'styled-components';
import { Button, Input, AuthLink, IconTwitter } from '@components/ui';

export const SectionLogIn = styled.section`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: flex-start;
    justify-content: center;
    padding-top: 60px;
    ${theme.breakPoints.mobileL} {
      align-items: center;
      padding-top: 0px;
    }
  `}
`;
export const LogInWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    ${theme.breakPoints.tablet} {
      align-items: center;
    }
  `}
`;
export const Icon = styled(IconTwitter)`
  ${({ theme }) => css`
    width: 50px;
    height: 41px;
    ${theme.breakPoints.tablet} {
      width: 40px;
    }
  `}
`;
export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.third};
    font-size: 43px;
    font-style: normal;
    font-weight: ${theme.fontWeight.bold};
    line-height: normal;
    margin: 36px 0px 36px 0px;
    ${theme.breakPoints.tablet} {
      font-size: 35px;
    }
    ${theme.breakPoints.mobileL} {
      font-size: 30px;
    }
    ${theme.breakPoints.mobileS} {
      font-size: 27px;
    }
  `};
`;
export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 40px;
    position: relative;
    ${theme.breakPoints.tablet} {
      align-items: center;
    }
  `}
`;
export const LogInInput = styled(Input)`
  ${({ theme }) => css`
    width: 450px;
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
export const WrapperBtn = styled.div`
  position: relative;
  margin-top: 13px;
`;

export const LogInBtn = styled(Button)`
  ${({ theme }) => css`
    width: 450px;
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
export const SignUpLink = styled(AuthLink)`
  ${({ theme }) => css`
    align-self: flex-end;
    ${theme.breakPoints.tablet} {
      font-size: 15px;
    }
    ${theme.breakPoints.mobileS} {
      font-size: 14px;
    }
  `}
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
