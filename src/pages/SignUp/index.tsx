import twitter from '@assets/icons/twitter.svg';
import DateChoose from '@components/DateChoose';
import { CONSTANTS, SIGN_UP_INPUTS, ERRORS_MESSAGE } from '@constants/auth';
import { ROUTES } from '@constants/index';
import { useState } from 'react';
import { IDate } from '@customTypes/index';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TSignUpInputs } from '@customTypes/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { InfinityLoader } from '@components/InfinityLoader';
import { SnackBar } from '@components/SnackBar';
import { Timestamp, doc, setDoc } from 'firebase/firestore';
import { COLLECTIONS } from '@constants/firebase';
import { ErrorMessage, IconTwitter, InputWrapper } from '@components/ui';

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
} from './styled';
import { isValidDate } from './helpers';

import { auth, db } from '@//firebase';

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

    try {
      const userCredential = await createUserWithEmailAndPassword(email, password);
      if (userCredential && year && month && day) {
        const { uid } = userCredential.user;
        const userDoc = {
          displayName: name,
          phoneNumber,
          uid,
          email,
          dateOfBirth: Timestamp.fromDate(new Date(year, month, day)).toMillis(),
        };

        await setDoc(doc(db, COLLECTIONS.USERS, uid), userDoc);
        navigate(ROUTES.PROFILE);
      }
    } catch (errorObj: unknown) {
      if (errorObj instanceof Error) {
        console.error(errorObj);
      }
    }
  };

  return (
    <SectionSignUp>
      <RegisterWrapper>
        <IconTwitter alt='twitter' src={twitter} />
        <Form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
          <Title>{CONSTANTS.SIGN_UP_TITLE}</Title>
          <WrapperInputs>
            {SIGN_UP_INPUTS.map((input) => {
              const { name, type, pattern, errorMessage, lengthError, placeholder, minLength } = input;

              return (
                <InputWrapper key={name}>
                  <SignUpInput
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
          <Link to={ROUTES.AUTHORIZATION}>{CONSTANTS.SIGN_UP_EMAIL_LINK}</Link>
          <SubTitle>{CONSTANTS.SIGN_UP_SUBTITLE}</SubTitle>
          <TextDate>{CONSTANTS.SIGN_UP_TEXT_DATE}</TextDate>
          <DateChoose date={date} setDate={setDate} />
          {loading && <InfinityLoader />}
          <RegisterBtn type='submit' disabled={!(isValid && isValidDate(date))}>
            {CONSTANTS.SIGN_UP_BTN}
          </RegisterBtn>
          {error && <SnackBar message={ERRORS_MESSAGE[error.message] ?? error.message} />}
        </Form>
      </RegisterWrapper>
    </SectionSignUp>
  );
}
