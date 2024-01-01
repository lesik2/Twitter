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
`;
export const EditInput = styled(Input)`
  width: 260px;
`;
export const EditBtn = styled(Button)`
  width: 450px;
  align-self: center;
  margin-top: 15px;
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
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;
