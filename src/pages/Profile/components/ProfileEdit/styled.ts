import { device } from '@constants/theme';
import { Button, Input } from '@components/ui';
import styled, { css } from 'styled-components';

export const ProfileEditSection = styled.section`
  ${({ theme }) => css`
    padding: 20px 20px 25px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primary};
    border-radius: 20px;
  `};
  @media ${device.laptop} {
    padding: 15px;
  }
  @media ${device.mobileL} {
    padding: 10px 7px 10px 7px;
  }
`;
export const LabelInput = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.third};
    font-family: ${theme.fontFamily.serif};
    font-size: 18px;
    font-style: normal;
    font-weight: ${theme.fontWeight.bold};
    line-height: normal;
  `};
  @media ${device.laptopL} {
    font-size: 16px;
  }
  @media ${device.laptop} {
    font-size: 15px;
  }
  @media ${device.tablet} {
    font-size: 14px;
  }
  @media ${device.mobileL} {
    font-size: 13px;
  }
`;
export const EditInput = styled(Input)`
  width: 260px;
  @media ${device.laptopL} {
    width: 240px;
    height: 55px;
    font-size: 16px;
  }
  @media ${device.laptop} {
    height: 50px;
    font-size: 15px;
  }
  @media ${device.tablet} {
    width: 220px;
    height: 45px;
  }
  @media ${device.mobileL} {
    width: 160px;
    height: 30px;
    font-size: 14px;
    padding: 18px 12px 20px 12px;
  }
  @media ${device.mobileS} {
    width: 150px;
    height: 27px;
  }
`;
export const EditBtn = styled(Button)`
  width: 450px;
  align-self: center;
  margin-top: 15px;
  @media ${device.laptopL} {
    width: 350px;
    height: 50px;
    font-size: 17px;
    margin-top: 10px;
  }
  @media ${device.laptop} {
    width: 320px;
    height: 45px;
  }
  @media ${device.tablet} {
    width: 290px;
    height: 40px;
  }
  @media ${device.tablet} {
    width: 220px;
    height: 35px;
  }
  @media ${device.mobileS} {
    width: 200px;
    height: 30px;
  }
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.third};
    font-family: ${theme.fontFamily.serif};
    font-size: 25px;
    font-style: normal;
    font-weight: ${theme.fontWeight.bold};
    line-height: normal;
    margin: 20px 0px 25px 0px;
  `};
  @media ${device.laptop} {
    font-size: 20px;
    margin: 15px 0px 20px 0px;
  }
  @media ${device.mobileL} {
    font-size: 18px;
    margin: 10px 0px 15px 0px;
  }
  @media ${device.mobileS} {
    font-size: 16px;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;
export const WrapperInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 25px;
  @media ${device.laptopL} {
    gap: 20px;
    margin-bottom: 20px;
  }
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  @media ${device.mobileL} {
    gap: 15px;
  }
  @media ${device.mobileS} {
    gap: 10px;
  }
`;
