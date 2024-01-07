import styled, { css } from 'styled-components';
import { Button, Input, AuthLink, IconTwitter } from '@components/ui';
import { device } from '@constants/theme';

export const SectionLogIn = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: flex-start;
  justify-content: center;
  padding-top: 60px;
  @media ${device.mobileL} {
    align-items: center;
    padding-top: 0px;
  }
`;
export const LogInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media ${device.tablet} {
    align-items: center;
  }
`;
export const Icon = styled(IconTwitter)`
  width: 50px;
  height: 41px;
  @media ${device.tablet} {
    width: 40px;
  }
`;
export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.third};
    font-size: 43px;
    font-style: normal;
    font-weight: ${theme.fontWeight.bold};
    line-height: normal;
    margin: 36px 0px 36px 0px;
    @media ${device.tablet} {
      font-size: 35px;
    }
    @media ${device.mobileL} {
      font-size: 30px;
    }
    @media ${device.mobileS} {
      font-size: 27px;
    }
  `};
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 40px;
  position: relative;
  @media ${device.tablet} {
    align-items: center;
  }
`;
export const LogInInput = styled(Input)`
  width: 450px;
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
export const WrapperBtn = styled.div`
  position: relative;
  margin-top: 13px;
`;

export const LogInBtn = styled(Button)`
  width: 450px;
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
export const SignUpLink = styled(AuthLink)`
  align-self: flex-end;
  @media ${device.tablet} {
    font-size: 15px;
  }
  @media ${device.mobileS} {
    font-size: 14px;
  }
`;
