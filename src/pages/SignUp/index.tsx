/* eslint-disable max-len */
import twitter from '@assets/icons/twitter.svg';
import DateChoose from "@components/DateChoose";
import { CONSTANTS } from '@constants/auth';
import { ROUTES } from '@constants/index';
import { FormEvent, useState } from 'react';
import { IDate } from '@customTypes/index';

import { AuthLink, Form, Icon, SignUpInput,InputWrapper, RegisterBtn, RegisterWrapper, SectionSignUp, SubTitle, TextDate, Title } from "./styled";



export function SignUp() {
  const [date, setDate] = useState<IDate>({})
  const handleSubmit = (e: FormEvent<HTMLFormElement>  ) => {
    e.preventDefault();
  }
  
  return (
    <SectionSignUp>
      <RegisterWrapper>
        <Icon alt='twitter' src={twitter}/>
        <Form onSubmit={(e)=>handleSubmit(e)}>
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
          <DateChoose date={date} setDate={setDate}/>
          <RegisterBtn type='submit'>
            {CONSTANTS.SIGN_UP_BTN}
          </RegisterBtn>
        </Form>
      </RegisterWrapper>
    </SectionSignUp>
  )
}
