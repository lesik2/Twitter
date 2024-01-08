import twitter from '@assets/icons/twitter.svg';

import { CONSTANTS } from './constants';
import { Header, IconTwitter, AuthTitle, AuthSubTitle } from './styled';

export function HeaderComponent() {
  return (
    <Header>
      <IconTwitter alt='Twitter' src={twitter} />
      <AuthTitle>{CONSTANTS.TITLE}</AuthTitle>
      <AuthSubTitle>{CONSTANTS.SUBTITLE}</AuthSubTitle>
    </Header>
  );
}
