import { CONSTANTS } from '@constants/index';

import { HeaderSection, Title } from './styled';

import { ToggleTheme } from '@//components/ToggleTheme';

export function Header() {
  return (
    <HeaderSection>
      <Title>{CONSTANTS.HOME_TITLE}</Title>
      <ToggleTheme />
    </HeaderSection>
  );
}
