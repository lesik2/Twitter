import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${theme.colors.modalWrapper};
    z-index: ${theme.zIndex.modal};
    display: flex;
    align-items: center;
    justify-content: center;
  `};
`;
export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Close = styled.div`
  ${({ theme }) => css`
    position: absolute;
    right: 10px;
    top: 10px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    transition: background-color 0.2s;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: ${theme.colors.border};
    }
  `};
`;
export const Image = styled.img`
  transition: filter 0.2s;
  width: 28px;
  height: 28px;
`;
