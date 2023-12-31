import { CONSTANTS, ROUTES } from '@constants/index';
import { ToggleTheme } from '@components/ToggleTheme';
import back from '@assets/icons/back.svg';
import {  useLocation } from 'react-router-dom';

import { BackLink, HeaderSection, Title, Wrapper } from './styled';

import { ImageApp } from '../ui';

import { useAppSelector } from '@//hooks/redux';

export function Header() {
  const location = useLocation();
  const theme = useAppSelector((state)=>state.themeReducer);

  return (
    <HeaderSection>
      <Wrapper>
        {location.pathname !==ROUTES.HOME && 
        <BackLink $isDark={theme.currentTheme === 'dark'} to={ROUTES.HOME}>
          <ImageApp alt='back arrow' src={back} />
        </BackLink>
        }
        <Title>{CONSTANTS.HOME_TITLE}</Title>
      </Wrapper>
      
      <ToggleTheme />
    </HeaderSection>
  );
}
