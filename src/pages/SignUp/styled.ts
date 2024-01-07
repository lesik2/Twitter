import styled, { css } from 'styled-components';
import { Button, Input, AuthLink } from '@components/ui';
import { device } from '@constants/theme';

export const SectionSignUp = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const RegisterWrapper = styled.div`
  width: 750px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 30px 40px 55px 40px;
  @media ${device.tablet} {
    padding: 25px 10px 40px 20px;
  }
  @media ${device.mobileL} {
    padding: 25px 5px 40px 10px;
  }
`;
export const WrapperBtn = styled.div`
  position: relative;
  margin-top: 18px;
`;
export const RegisterBtn = styled(Button)`
  width: 670px;
  @media ${device.tablet} {
    width: 380px;
    height: 50px;
    font-size: 15px;
  }
  @media ${device.mobileL} {
    width: 300px;
    height: 40px;
  }
  @media ${device.mobileS} {
    width: 280px;
    height: 35px;
    font-size: 14px;
  }
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
  `};
  @media ${device.tablet} {
    font-size: 25px;
  }
  @media ${device.mobileM} {
    font-size: 22px;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const WrapperInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 26px;
  @media ${device.mobileL} {
    gap: 15px;
    margin-bottom: 10px;
  }
`;
export const SignUpInput = styled(Input)`
  width: 670px;
  @media ${device.tablet} {
    width: 380px;
    height: 60px;
    font-size: 15px;
  }
  @media ${device.mobileL} {
    width: 300px;
    height: 45px;
  }
  @media ${device.mobileS} {
    width: 280px;
    height: 40px;
    font-size: 14px;
  }
`;

export const Link = styled(AuthLink)`
  margin: 26px 0px 17px 0px;
  @media ${device.mobileL} {
    font-size: 15px;
  }
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
  `};
  @media ${device.mobileL} {
    font-size: 16px;
    margin-bottom: 20px;
  }
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
  `};
  @media ${device.tablet} {
    font-size: 13px;
    width: 85%;
  }
  @media ${device.mobileL} {
    font-size: 12px;
    width: 100%;
  }
  @media ${device.mobileM} {
    font-size: 11px;
  }
`;
