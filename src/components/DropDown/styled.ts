import { TDate } from '@customTypes/index';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ $type: TDate }>`
  ${({ theme, $type }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${() => {
      if ($type === 'day' || $type === 'year') {
        return '159px';
      }

      return '312px';
    }};
    position: relative;
    ${theme.breakPoints.tablet} {
      width: 120px;
    }
    ${theme.breakPoints.mobileL} {
      width: 100px;
    }
    ${theme.breakPoints.mobileM} {
      width: 90px;
    }
  `};
`;
export const SelectedValue = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.option};
    font-size: 18px;
    font-style: normal;
    font-weight: ${theme.fontWeight.normal};
    line-height: normal;
    border-radius: 6px;
    border: 1px solid ${theme.colors.border};
    background-color: ${theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 21px;
    height: 70px;
    width: 100%;
    cursor: pointer;
    &:focus {
      border: 2px solid ${theme.colors.third};
    }
    ${theme.breakPoints.tablet} {
      height: 48px;
      padding: 15px 5px 15px 5px;
      font-size: 15px;
    }
    ${theme.breakPoints.mobileL} {
      height: 40px;
      font-size: 13px;
    }
  `};
`;

export const List = styled.ul<{ $active?: boolean }>`
  ${({ theme, $active }) => css`
    width: 100%;
    position: absolute;
    background-color: ${theme.colors.primary};
    max-height: ${$active ? '180px' : '0px'};
    transition: height 0.1s;
    overflow-y: scroll;
    scrollbar-width: none;
    left: 0;
    padding: 0;
    margin: 0;
    bottom: 70px;
    border: ${$active ? '1px' : '0px'} solid ${theme.colors.border};
    border-radius: 6px;
    &::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }
    ${theme.breakPoints.tablet} {
      bottom: 48px;
    }
    ${theme.breakPoints.mobileL} {
      bottom: 40px;
    }
  `};
`;
export const ItemList = styled.li`
  ${({ theme }) => css`
    font-size: 18px;
    color: ${theme.colors.option};
    font-weight: ${theme.fontWeight.normal};
    padding-left: 21px;
    cursor: pointer;
    transition: background-color 0.1s;
    &:hover {
      background-color: ${(props) => props.theme.colors.border};
    }
    ${theme.breakPoints.tablet} {
      font-size: 15px;
    }
    ${theme.breakPoints.mobileL} {
      font-size: 13px;
    }
  `};
`;
export const Icon = styled.img`
  ${({ theme }) => css`
    ${theme.breakPoints.mobileL} {
      width: 12px;
      height: 6px;
    }
  `}
`;
