import twitter from '@assets/icons/twitter.svg';
import { ROUTES } from '@constants/index';

import { Form, Icon, Input, LogInWrapper, RegisterBtn, SectionLogIn, SignUpLinkText, Title } from "./styled";

export function LogIn() {
  return (
    <SectionLogIn>
      <LogInWrapper>
        <Icon alt='twitter' src={twitter}/>
        <Title>
          Log in to Twitter
        </Title>
        <Form>
          <Input placeholder='Phone number, email address'/>
          <Input placeholder='Password'/>
          <RegisterBtn>
            Log in
          </RegisterBtn>
        </Form>
          <SignUpLinkText to={ROUTES.SIGN_UP}>
            Sign up to Twitter
          </SignUpLinkText>
      </LogInWrapper>
    </SectionLogIn>
  )
}
