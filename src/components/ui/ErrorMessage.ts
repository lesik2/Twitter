import styled, { css } from 'styled-components';

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font-size: 11px;
    font-style: normal;
    font-weight: ${theme.fontWeight.medium};
    line-height: normal;
    position: absolute;
    bottom: -15px;
    left: 5px;
  `};
`;
