import { TDate } from '@customTypes/index';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{$type: TDate}>`
  ${({  $type }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${() => {
      
      if($type === 'day'||$type==='year'){
        return '159px';
      }
      
      return '312px';
      
    }};
    position: relative;
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
    &:focus{
      border-width: 2px;
    }
  `};
  

`;

export const List = styled.div<{ $active?: boolean }>`
  ${({ theme, $active }) => css`
    width: 100%;
    position: absolute;
    background-color: ${theme.colors.primary};
    max-height: ${$active ? '180px' : '0px'};
    transition: height 0.1s;
    overflow-y: scroll;
    scrollbar-width: none;
    left: 0;
    bottom: 70px;
    border: ${$active ? '1px' : '0px'} solid ${theme.colors.border};
    border-radius: 6px;
    &::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }
  `};
 
`;
export const ItemList = styled.p`
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
  `};

`;
export const Icon = styled.img`
  
`;
