import twitter from '@assets/icons/twitter.svg';
import { ROUTES } from '@constants/index';
import { CONSTANTS } from '@constants/auth';

import { Form, Icon, LogInInput, LogInWrapper, LogInBtn, SectionLogIn, SignUpLink, Title } from "./styled";

export function LogIn() {
  return (
    <SectionLogIn>
      <LogInWrapper>
        <Icon alt='twitter' src={twitter}/>
        <Title>
          {CONSTANTS.LOG_IN_TITLE}
        </Title>
        <Form>
          <LogInInput placeholder='Phone number, email address'/>
          <LogInInput placeholder='Password'/>
          <LogInBtn>
            {CONSTANTS.LOG_IN_BTN}
          </LogInBtn>
        </Form>
          <SignUpLink to={ROUTES.SIGN_UP}>
            {CONSTANTS.LOGIN_IN_SIGN_UP_LINK}
          </SignUpLink>
      </LogInWrapper>
    </SectionLogIn>
  )
}
