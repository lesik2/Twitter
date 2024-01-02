import styled, { css } from 'styled-components';
import { AuthLink } from '@components/ui';
import { device } from '@constants/theme';

export const SectionAuth = styled.section`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primary};
    @media ${device.tablet} {
      padding: 25px 10px 10px 10px;
    }
  `};
`;
export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 41px;
  width: 100%;
  @media ${device.laptopL} {
    gap: 15px;
  }
  @media ${device.tablet} {
    gap: 0px;
  }
`;
export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  @media ${device.laptopL} {
    width: 43%;
  }
  @media ${device.tablet} {
    width: 100%;
    align-items: center;
  }
`;

export const IconGoogle = styled.img`
  width: 31px;
  height: 32px;
  @media ${device.mobileL} {
    width: 25px;
    height: 25px;
  }
`;

export const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  margin-bottom: 31px;
  position: relative;
  @media ${device.laptop} {
    gap: 15px;
    margin-bottom: 20px;
  }
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
  @media ${device.laptop} {
    width: 300px;
    height: 50px;
  }
  @media ${device.mobileL} {
    width: 270px;
    height: 40px;
  }
`;
export const RegisterText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.third};
    font-size: 20px;
    font-style: normal;
    font-weight: ${theme.fontWeight.medium};
    line-height: normal;
  `};
  @media ${device.laptop} {
    font-size: 17px;
  }
  @media ${device.mobileL} {
    font-size: 16px;
  }
`;
export const WrapperImage = styled.div`
  width: 50%;
  @media ${device.laptopL} {
    width: 57%;
  }

  @media ${device.tablet} {
    width: 0%;
  }
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
  @media ${device.laptop} {
    margin-bottom: 15px;
    width: 300px;
  }
  @media ${device.tablet} {
    text-align: center;
    width: 280px;
  }
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
  @media ${device.laptop} {
    font-size: 14px;
  }
`;
export const LinkToLogin = styled(AuthLink)`
  font-size: 16px;
  @media ${device.laptop} {
    font-size: 14px;
  }
`;
