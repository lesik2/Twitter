import styled, { css } from 'styled-components';
import { Button, Input, AuthLink, IconTwitter } from '@components/ui';

export const SectionLogIn = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
`;
export const LogInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Icon = styled(IconTwitter)`
  width: 50px;
  height: 41px;
`;
export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.third};
    font-size: 43px;
    font-style: normal;
    font-weight: ${theme.fontWeight.bold};
    line-height: normal;
    margin: 36px 0px 36px 0px;
  `};
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 40px;
  position: relative;
`;
export const LogInInput = styled(Input)`
  width: 450px;
`;

export const LogInBtn = styled(Button)`
  width: 450px;
  margin-top: 13px;
`;
export const SignUpLink = styled(AuthLink)`
  align-self: flex-end;
`;
