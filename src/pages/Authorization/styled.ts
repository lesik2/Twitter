import styled, { css } from 'styled-components';
import { AuthLink } from '@components/ui';

export const SectionAuth = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primary};
  `};
`;
export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 41px;
  width: 100%;
`;
export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 42%;
`;

export const IconGoogle = styled.img`
  width: 31px;
  height: 32px;
`;

export const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  margin-bottom: 31px;
  position: relative;
`;
export const RegisterBtn = styled.button`
  ${({ theme }) => css`
    display: flex;
    width: 403px;
    gap: 3px;
    height: 62px;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.border};
    border-radius: 42px;
    background-color: ${theme.colors.primary};
    transition: background-color 0.3s;
    &:hover {
      background-color: ${theme.colors.border};
    }
  `};
`;
export const RegisterText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.third};
    font-size: 20px;
    font-style: normal;
    font-weight: ${theme.fontWeight.medium};
    line-height: normal;
  `};
`;
export const WrapperImage = styled.div`
  width: 58%;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
export const AuthText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.third};
    font-size: 14px;
    font-style: normal;
    font-weight: ${theme.fontWeight.normal};
    line-height: 20px;
    margin-bottom: 21px;
    width: 373px;
  `};
`;
export const AuthMarkText = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
  `};
`;
export const LoginText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.third};
    font-size: 16px;
    font-style: normal;
    font-weight: ${theme.fontWeight.normal}
    line-height: normal;
  `};
`;
export const LinkToLogin = styled(AuthLink)`
  font-size: 16px;
`;
