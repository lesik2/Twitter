/* eslint-disable max-len */
import twitter from '@assets/icons/twitter.svg';

import { AuthLinkText, Form, Icon, Input, InputWrapper, RegisterBtn, RegisterWrapper, SectionSignUp, SubTitle, TextDate, Title } from "./styled";

import DateChoose from "@//components/DateChoose";


export function SignUp() {
  return (
    <SectionSignUp>
      <RegisterWrapper>
        <Icon alt='twitter' src={twitter}/>
        <Form>
          <Title>
          Create an account
          </Title>
          <InputWrapper>
            <Input placeholder="Name"/>
            <Input placeholder="Phone number"/>
            <Input placeholder="Email"/>
          </InputWrapper>
          <AuthLinkText>
            User email
          </AuthLinkText>
          <SubTitle>
            Date of birth
          </SubTitle>
          <TextDate>
            Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.
          </TextDate>
          <DateChoose />
          <RegisterBtn>
            Next
          </RegisterBtn>
        </Form>
      </RegisterWrapper>
    </SectionSignUp>
  )
}
