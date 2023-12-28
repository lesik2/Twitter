import styled, { css } from 'styled-components';

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  justify-content: center;
`;
export const UserTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.third};
    font-size: 20px;
    font-style: normal;
    font-weight: ${theme.fontWeight.bold};
    line-height: normal;
    margin: 0px;
  `};
`;

export const UserSubtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.option};
    font-size: 16px;
    font-style: normal;
    font-weight: ${theme.fontWeight.normal};
    line-height: normal;
    margin: 0px;
  `};
`;
