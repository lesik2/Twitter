import twitter from '@assets/icons/twitter.svg';
import { ROUTES } from '@constants/index';
import { CONSTANTS, ERRORS_MESSAGE, LOG_IN_INPUTS } from '@constants/auth';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TSignUpInputs } from '@customTypes/user';
import { InputWrapper, WrapperLoader } from '@components/ui';
import { useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { InfinityLoader } from '@components/InfinityLoader';
import { SnackBar } from '@components/SnackBar';
import { auth } from '@db/index';

import {
  Form,
  Icon,
  LogInInput,
  LogInWrapper,
  LogInBtn,
  SectionLogIn,
  SignUpLink,
  Title,
  WrapperBtn,
} from './styled';

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
    } catch (errorObj) {
      console.error(errorObj);
    }
  };

  return (
    <SectionLogIn data-testid='login-page'>
      <LogInWrapper>
        <Icon alt='twitter' src={twitter} />
        <Title>{CONSTANTS.LOG_IN_TITLE}</Title>
        <Form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
          {LOG_IN_INPUTS.map((input) => {
            const { name, type, placeholder } = input;

            return (
              <InputWrapper key={name}>
                <LogInInput
                  data-cy={name}
                  data-testid={name}
                  type={type}
                  $error={errors[name]}
                  placeholder={placeholder}
                  {...register(name, { required: true })}
                />
              </InputWrapper>
            );
          })}
          <WrapperBtn>
            {loading && (
              <WrapperLoader>
                <InfinityLoader />
              </WrapperLoader>
            )}
            <LogInBtn data-cy='submit-login' type='submit' disabled={!isValid}>
              {CONSTANTS.LOG_IN_BTN}
            </LogInBtn>
          </WrapperBtn>
          {error && <SnackBar message={ERRORS_MESSAGE[error.message] ?? error.message} />}
        </Form>
        <SignUpLink to={ROUTES.SIGN_UP}>{CONSTANTS.LOGIN_IN_SIGN_UP_LINK}</SignUpLink>
      </LogInWrapper>
    </SectionLogIn>
  );
}
