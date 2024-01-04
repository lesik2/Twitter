import { device } from '@constants/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 21px;
  margin-bottom: 20px;
  @media ${device.tablet} {
    gap: 10px;
    align-self: flex-start;
  }
`;
