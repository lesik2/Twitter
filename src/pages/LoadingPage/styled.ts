import styled, { css } from 'styled-components';

export const SectionLoadingPage = styled.section`
  ${({ theme }) => css`
    display: flex;
    height: 100vh;
    width: 100%;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: ${theme.colors.secondary};
  `};
`;
export const Icon = styled.img`
  width: 120px;
  height: 120px;
  filter: invert(99%) sepia(0%) saturate(2%) hue-rotate(153deg) brightness(113%) contrast(101%);
`;
export const LoaderWrapper = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
`;
