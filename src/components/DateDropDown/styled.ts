import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 21px;
    margin-bottom: 20px;
    ${theme.breakPoints.tablet} {
      gap: 10px;
      align-self: flex-start;
    }
  `}
`;
