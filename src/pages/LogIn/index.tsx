import twitter from '@assets/icons/twitter.svg';
import { ROUTES } from '@constants/index';
import { CONSTANTS, ERRORS_MESSAGE, LOG_IN_INPUTS } from '@constants/auth';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TSignUpInputs } from '@customTypes/user';
import { InputWrapper } from '@components/ui';
import { useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { InfinityLoader } from '@components/InfinityLoader';
import { SnackBar } from '@components/SnackBar';
import { auth } from '@db/index';

import { Form, Icon, LogInInput, LogInWrapper, LogInBtn, SectionLogIn, SignUpLink, Title } from './styled';

export function LogIn() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<TSignUpInputs>({
    mode: 'onChange',
  });

  const [signInWithEmailAndPassword, , loading, error] = useSignInWithEmailAndPassword(auth);

  const onSubmit: SubmitHandler<TSignUpInputs> = async (data) => {
    const { email, password } = data;
    reset();

    try {
      const userCredential = await signInWithEmailAndPassword(email, password);
      if (userCredential) {
        navigate(ROUTES.HOME);
      }
    } catch (errorObj: unknown) {
      if (errorObj instanceof Error) {
        console.error(errorObj);
      }
    }
  };

  return (
    <SectionLogIn>
      <LogInWrapper>
        <Icon alt='twitter' src={twitter} />
        <Title>{CONSTANTS.LOG_IN_TITLE}</Title>
        <Form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
          {LOG_IN_INPUTS.map((input) => {
            const { name, type, placeholder } = input;

            return (
              <InputWrapper key={name}>
                <LogInInput
                  type={type}
                  $error={errors[name]}
                  placeholder={placeholder}
                  {...register(name, { required: true })}
                />
              </InputWrapper>
            );
          })}
          {loading && <InfinityLoader />}
          <LogInBtn type='submit' disabled={!isValid}>
            {CONSTANTS.LOG_IN_BTN}
          </LogInBtn>
          {error && <SnackBar message={ERRORS_MESSAGE[error.message] ?? error.message} />}
        </Form>
        <SignUpLink to={ROUTES.SIGN_UP}>{CONSTANTS.LOGIN_IN_SIGN_UP_LINK}</SignUpLink>
      </LogInWrapper>
    </SectionLogIn>
  );
}
