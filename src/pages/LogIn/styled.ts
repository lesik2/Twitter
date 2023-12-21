import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SectionLogIn = styled.section`
  display: flex;
  width: 100%;
  align-items:center;
  justify-content: center;
  padding-top: 60px;
`
export const LogInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

`
export const Icon = styled.img`
  width: 50px;
  height: 41px;
`
export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.third};
    font-family: ${theme.fontFamily.font};
    font-size: 43px;
    font-style: normal;
    font-weight: ${theme.fontWeight.bold};
    line-height: normal;
    margin: 36px 0px 36px 0px;
  `};
`
export const Form  = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 40px;
`
export const Input = styled.input`
  ${({ theme }) => css`
    width: 450px;
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
export const RegisterBtn = styled.button`
  ${({ theme }) => css`
    width: 450px;
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
    transition: background-color 0.3s;
    &:hover{
      background-color:${theme.colors.hover};
    }
  `};
`
export const SignUpLinkText = styled(NavLink)`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: 18px;
    align-self: flex-end;l
    font-style: normal;
    font-weight: ${theme.fontWeight.normal};
    line-height: normal;
    transition: color 0.1s;
    &:hover{
      color:${theme.colors.hover};
    }
  `};
`