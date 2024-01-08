import twitter from '@assets/icons/twitter.svg';
import { DateDropDown } from '@components/DateDropDown';
import { ERRORS_MESSAGE } from '@constants/auth';
import { ROUTES } from '@constants/index';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TSignUpInputs } from '@customTypes/user';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { InfinityLoader } from '@components/InfinityLoader';
import { SnackBar } from '@components/SnackBar';
import { ErrorMessage, IconTwitter } from '@components/ui';
import { IDate, UserState } from '@customTypes/models';
import { auth } from '@db/index';

import {
  Link,
  Form,
  SignUpInput,
  RegisterBtn,
  RegisterWrapper,
  SectionSignUp,
  SubTitle,
  TextDate,
  Title,
  WrapperInputs,
  WrapperBtn,
  InputWrapper,
  WrapperLoader,
} from './styled';
import { isValidDate } from './helpers';
import { CONSTANTS, SIGN_UP_INPUTS } from './constants';

import { setUser } from '@//firebase/user';

export function SignUp() {
  const [date, setDate] = useState<IDate>({});
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, , loading, error] = useCreateUserWithEmailAndPassword(auth);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<TSignUpInputs>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<TSignUpInputs> = async (data) => {
    const { email, password, name, phoneNumber } = data;
    const { year, month, day } = date;
    reset();
    setDate({});

    const userCredential = await createUserWithEmailAndPassword(email, password);
    if (userCredential && year && month && day) {
      const { uid } = userCredential.user;
      const userDoc: UserState = {
        displayName: name,
        phoneNumber,
        uid,
        email,
        dateOfBirth: new Date(year, month, day).getTime(),
      };

      await setUser(userDoc);
      navigate(ROUTES.HOME);
    }
  };

  return (
    <SectionSignUp data-testid='sign-up'>
      <RegisterWrapper>
        <IconTwitter alt='twitter' src={twitter} />
        <Form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
          <Title>{CONSTANTS.TITLE}</Title>
          <WrapperInputs>
            {SIGN_UP_INPUTS.map((input) => {
              const { name, type, pattern, errorMessage, lengthError, placeholder, minLength } = input;

              return (
                <InputWrapper key={name}>
                  <SignUpInput
                    data-cy={`signup-${name}`}
                    type={type}
                    $error={errors[name]}
                    placeholder={placeholder}
                    {...register(name, {
                      required: true,
                      pattern: { value: pattern, message: errorMessage },
                      minLength: {
                        value: minLength,
                        message: lengthError ?? errorMessage,
                      },
                    })}
                  />
                  {errors[name] && <ErrorMessage>{errors[name]?.message}</ErrorMessage>}
                </InputWrapper>
              );
            })}
          </WrapperInputs>
          <Link to={ROUTES.AUTHORIZATION}>{CONSTANTS.EMAIL_LINK}</Link>
          <SubTitle>{CONSTANTS.SUBTITLE}</SubTitle>
          <TextDate>{CONSTANTS.TEXT_DATE}</TextDate>
          <DateDropDown date={date} setDate={setDate} />
          {error && <SnackBar message={ERRORS_MESSAGE[error.message] ?? error.message} />}
          <WrapperBtn>
            {loading && (
              <WrapperLoader>
                <InfinityLoader />
              </WrapperLoader>
            )}
            <RegisterBtn type='submit' disabled={!(isValid && isValidDate(date))}>
              {CONSTANTS.BTN}
            </RegisterBtn>
          </WrapperBtn>
        </Form>
      </RegisterWrapper>
    </SectionSignUp>
  );
}
