import styled, { css } from 'styled-components';
import { AuthLink } from '@components/ui';

export const SectionAuth = styled.section`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primary};
    ${theme.breakPoints.tablet} {
      padding: 25px 10px 10px 10px;
    }
  `};
`;
export const Main = styled.main`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 41px;
    width: 100%;
    ${theme.breakPoints.laptopL} {
      gap: 15px;
    }
    ${theme.breakPoints.tablet} {
      gap: 0px;
    }
  `}
`;
export const AuthWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 50%;
    ${theme.breakPoints.laptopL} {
      width: 43%;
    }
    ${theme.breakPoints.tablet} {
      width: 100%;
      align-items: center;
    }
  `}
`;

export const IconGoogle = styled.img`
  ${({ theme }) => css`
    width: 31px;
    height: 32px;
    ${theme.breakPoints.mobileL} {
      width: 25px;
      height: 25px;
    }
  `}
`;

export const RegisterWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 21px;
    margin-bottom: 31px;
    position: relative;
    ${theme.breakPoints.laptop} {
      gap: 15px;
      margin-bottom: 20px;
    }
  `}
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
      cursor: pointer;
    }
    ${theme.breakPoints.laptop} {
      width: 300px;
      height: 50px;
    }
    ${theme.breakPoints.mobileL} {
      width: 270px;
      height: 40px;
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
    ${theme.breakPoints.laptop} {
      font-size: 17px;
    }
    ${theme.breakPoints.mobileL} {
      font-size: 16px;
    }
  `};
`;
export const WrapperImage = styled.div`
  ${({ theme }) => css`
    width: 50%;
    ${theme.breakPoints.laptopL} {
      width: 57%;
    }

    ${theme.breakPoints.tablet} {
      width: 0%;
    }
  `}
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
    ${theme.breakPoints.laptop} {
      margin-bottom: 15px;
      width: 300px;
    }
    ${theme.breakPoints.tablet} {
      text-align: center;
      width: 280px;
    }
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
    ${theme.breakPoints.laptop} {
    font-size: 14px;
  }
  `};
`;
export const LinkToLogin = styled(AuthLink)`
  ${({ theme }) => css`
    font-size: 16px;
    ${theme.breakPoints.laptop} {
      font-size: 14px;
    }
  `}
`;
