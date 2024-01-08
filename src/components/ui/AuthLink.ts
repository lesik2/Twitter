import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const AuthLink = styled(NavLink)`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: 18px;
    font-style: normal;
    font-weight: ${theme.fontWeight.normal};
    line-height: normal;
    transition: color 0.1s;
    &:hover {
      color: ${theme.colors.hover};
    }
  `};
`;
