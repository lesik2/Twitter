import styled, { css } from 'styled-components';

export const UserTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.third};
    font-size: 20px;
    font-style: normal;
    font-weight: ${theme.fontWeight.bold};
    line-height: normal;
    margin: 0px;
    ${theme.breakPoints.tablet} {
      font-size: 17px;
    }
    ${theme.breakPoints.mobileL} {
      font-size: 15px;
    }
  `};
`;
