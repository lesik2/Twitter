/* eslint-disable max-len */
import twitter from '@assets/icons/twitter.svg';
import DateChoose from "@components/DateChoose";
import { CONSTANTS } from '@constants/auth';
import { ROUTES } from '@constants/index';

import { AuthLink, Form, Icon, SignUpInput,InputWrapper, RegisterBtn, RegisterWrapper, SectionSignUp, SubTitle, TextDate, Title } from "./styled";



export function SignUp() {

  return (
    <SectionSignUp>
      <RegisterWrapper>
        <Icon alt='twitter' src={twitter}/>
        <Form>
          <Title>
            {CONSTANTS.SIGN_UP_TITLE}
          </Title>
          <InputWrapper>
            <SignUpInput placeholder="Name"/>
            <SignUpInput placeholder="Phone number"/>
            <SignUpInput placeholder="Email"/>
          </InputWrapper>
            <AuthLink to={ROUTES.AUTHORIZATION}>
              {CONSTANTS.SIGN_UP_EMAIL_LINK}
            </AuthLink>
          <SubTitle>
            {CONSTANTS.SIGN_UP_SUBTITLE}
          </SubTitle>
            <TextDate>
              {CONSTANTS.SIGN_UP_TEXT_DATE}
            </TextDate>
          <DateChoose />
          <RegisterBtn>
            {CONSTANTS.SIGN_UP_BTN}
          </RegisterBtn>
        </Form>
      </RegisterWrapper>
    </SectionSignUp>
  )
}
