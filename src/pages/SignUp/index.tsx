/* eslint-disable max-len */
import twitter from '@assets/icons/twitter.svg';
import DateChoose from "@components/DateChoose";
import { CONSTANTS } from '@constants/auth';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '@constants/index';

import { AuthLinkText, Form, Icon, Input, InputWrapper, RegisterBtn, RegisterWrapper, SectionSignUp, SubTitle, TextDate, Title } from "./styled";



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
            <Input placeholder="Name"/>
            <Input placeholder="Phone number"/>
            <Input placeholder="Email"/>
          </InputWrapper>
          <NavLink to={ROUTES.AUTHORIZATION}>
            <AuthLinkText>
              {CONSTANTS.SIGN_UP_EMAIL_LINK}
            </AuthLinkText>
          </NavLink>
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
