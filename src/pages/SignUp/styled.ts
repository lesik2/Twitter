import styled, { css } from 'styled-components';
import {Button,Input, Link} from '@components/ui/auth';

export const SectionSignUp = styled.section`
    display: flex;
    width: 100%;
    align-items:center;
    justify-content: center;
`
export const RegisterWrapper = styled.div`
    width: 750px;
    height: 870px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 30px 40px 40px 40px;

`
export const RegisterBtn = styled(Button)`
    width: 670px;
    margin-top: 38px;
`
export const Icon = styled.img`
  width: 40px;
  height: 33px;
  align-self: center;
`
export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.third};
    font-family: ${theme.fontFamily.font};
    font-size: 30px;
    font-style: normal;
    font-weight: ${theme.fontWeight.bold};
    line-height: normal;
    margin: 43px 0px 40px 0px;
  `};
`
export const Form  = styled.form`
`
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 26px;
`
export const SignUpInput = styled(Input)`
    width: 670px;
`
export const AuthLink = styled(Link)`
  margin: 26px 0px 16px 0px;
`
export const SubTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.third};
    font-size: 18px;
    font-family: ${theme.fontFamily.font};
    font-style: normal;
    font-weight: ${theme.fontWeight.bold};
    line-height: normal;
    margin: 26px 0px 16px 0px;
    margin-bottom: 32px;
  `};
`
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
`