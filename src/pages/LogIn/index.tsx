import twitter from '@assets/icons/twitter.svg';
import { ROUTES } from '@constants/index';
import { CONSTANTS, LOG_IN_INPUTS } from '@constants/auth';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm, SubmitHandler } from "react-hook-form"
import { TSignUpInputs } from '@customTypes/auth';
import { InputWrapper } from '@components/ui/auth';

import { Form, Icon, LogInInput, LogInWrapper, LogInBtn, SectionLogIn, SignUpLink, Title } from "./styled";

export function LogIn() {

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
    alert(JSON.stringify(data));
  }

  return (
    <SectionLogIn>
      <LogInWrapper>
        <Icon alt='twitter' src={twitter}/>
        <Title>
          {CONSTANTS.LOG_IN_TITLE}
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          {LOG_IN_INPUTS.map((input)=>(
              <InputWrapper key={input.name}>
                <LogInInput type={input.type}  $error={errors[input.name]} placeholder={input.placeholder} 
                {...register(input.name,
                  { required: true, }
                )}/>
            </InputWrapper>
            ))}
          <LogInBtn type='submit' disabled={!isValid}>
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
