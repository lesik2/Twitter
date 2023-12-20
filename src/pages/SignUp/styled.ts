import styled, { css } from 'styled-components';

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
export const RegisterBtn = styled.button`
  ${({ theme }) => css`
    width: 670px;
    height: 60px;
    border-radius: 76px;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.primary};
    font-family: ${theme.fontFamily.font};
    font-size: 18px;
    font-style: normal;
    font-weight: ${theme.fontWeight.bold};
    line-height: normal;
    margin-top: 38px;
    outline: none;
    border: none;
  `};
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
`
export const Input = styled.input`
  ${({ theme }) => css`
    width: 670px;
    height: 70px;
    border-radius: 6px;
    border: 1px solid ${theme.colors.border};
    background-color: ${theme.colors.primary};
    color: ${theme.colors.option};
    font-size: 18px;
    font-style: normal;
    font-weight: ${theme.fontWeight.normal};
    line-height: normal;
    padding: 23px 20px 26px 20px;
  `};

`
export const AuthLinkText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: 18px;
    font-style: normal;
    font-weight: ${theme.fontWeight.normal};
    line-height: normal;
    margin: 26px 0px 16px 0px;
  `};
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
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: ${theme.fontWeight.normal};
    line-height: 24px;
    margin-bottom: 32px;
  `};
`