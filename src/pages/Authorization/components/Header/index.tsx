import twitter from '@assets/icons/twitter.svg';
import { CONSTANTS } from "@constants/auth"

import {Header, IconTwitter, AuthTitle, AuthSubTitle,  } from "./styled"

export function HeaderComponent() {
  return (
    <Header>
      <IconTwitter alt="Twitter" src={twitter}/>
          <AuthTitle>
            {CONSTANTS.AUTH_TITLE}
          </AuthTitle>
          <AuthSubTitle>
            {CONSTANTS.AUTH_SUBTITLE}
          </AuthSubTitle>
    </Header>
  )
}
