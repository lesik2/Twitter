import styled, { css } from 'styled-components';

export const IconTwitter = styled.img`
  ${({ theme }) => css`
    width: 40px;
    height: 33px;
    filter: invert(48%) sepia(89%) saturate(1415%) hue-rotate(179deg) brightness(94%) contrast(101%);
    ${theme.breakPoints.tablet} {
      width: 33px;
      height: 30px;
    }
  `};
`;
