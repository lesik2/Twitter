import twitter from '@assets/icons/twitter.svg';
import DateChoose from "@components/DateChoose";
import { CONSTANTS, SIGN_UP_INPUTS } from '@constants/auth';
import { ROUTES } from '@constants/index';
import { useState } from 'react';
import { IDate } from '@customTypes/index';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm, SubmitHandler } from "react-hook-form"
import { ErrorMessage, InputWrapper } from '@components/ui/auth';
import { TSignUpInputs } from '@customTypes/auth';

import { AuthLink, Form, Icon, SignUpInput, RegisterBtn, RegisterWrapper, SectionSignUp, SubTitle, TextDate, Title, WrapperInputs} from "./styled";
import { isValidDate } from './helpers';



export function SignUp() {
  const [date, setDate] = useState<IDate>({})


  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<TSignUpInputs>({
      mode: 'onChange'
  })

  const onSubmit: SubmitHandler<TSignUpInputs> = (data) => {
    reset();
    alert(data);
  }

  return (
    <SectionSignUp>
      <RegisterWrapper>
        <Icon alt='twitter' src={twitter}/>
        <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Title>
            {CONSTANTS.SIGN_UP_TITLE}
          </Title>
          <WrapperInputs>
            {SIGN_UP_INPUTS.map((input)=>(
              <InputWrapper key={input.name}>
                <SignUpInput type={input.type}  $error={errors[input.name]} placeholder={input.placeholder} 
                {...register(input.name,
                  { required: true, 
                    pattern: {value: input.pattern, message: input.errorMessage},
                    minLength: {
                      value: input.name === 'password'?8:1,
                      message: input.lengthError??'',
                    }
                  }
                )}/>
                {errors[input.name] && <ErrorMessage>{errors[input.name]?.message}</ErrorMessage>}
            </InputWrapper>
            ))}
          </WrapperInputs>
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
          <RegisterBtn type='submit' disabled={!(isValid && isValidDate(date))}>
            {CONSTANTS.SIGN_UP_BTN}
          </RegisterBtn>
        </Form>
      </RegisterWrapper>
    </SectionSignUp>
  )
}
