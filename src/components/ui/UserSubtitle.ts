import styled, { css } from 'styled-components';

export const UserSubtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.option};
    font-size: 16px;
    font-style: normal;
    font-weight: ${theme.fontWeight.normal};
    line-height: normal;
    margin: 0px;
    ${theme.breakPoints.tablet} {
      font-size: 15px;
    }
    ${theme.breakPoints.mobileL} {
      font-size: 14px;
    }
  `};
`;
