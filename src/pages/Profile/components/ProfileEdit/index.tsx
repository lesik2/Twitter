import { ERRORS_MESSAGE, PASSWORD_INPUT, SIGN_UP_INPUTS } from "@constants/auth";
import { ErrorMessage, IconTwitter, InputWrapper } from "@components/ui";
import { SubmitHandler, useForm } from "react-hook-form";
import { TEditInputs } from "@customTypes/auth";
import twitter from '@assets/icons/twitter.svg';
import DateChoose from "@components/DateChoose";
import { isValidDate } from "@pages/SignUp/helpers";
import { useState } from "react";
import { IDate } from "@customTypes/index";
import { CONSTANTS } from "@constants/index";
import {useAppSelector} from '@hooks/redux';
import { SnackBar } from "@components/SnackBar";
import { InfinityLoader } from "@components/InfinityLoader";

import { EditInput, Form, ProfileEditSection, EditBtn, Title, WrapperInputs } from "./styled";
import { updateUserPassword } from "./helpers/updateUserPassword";


export function ProfileEdit() {
  const user = useAppSelector((state)=>state.userReducer);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error|null>(null);
  let dateOfBirth: Date = new Date();
  const milliseconds = user.dateOfBirth; 
  if (milliseconds!== null) {
    dateOfBirth = new Date(milliseconds);

  }

  const [date, setDate] = useState<IDate>({
    year: dateOfBirth.getFullYear(),
    day: dateOfBirth.getDate(),
    month: dateOfBirth.getMonth(), 
  });
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TEditInputs>({
    mode: 'onChange',
    defaultValues: {
      name: user.displayName??'',
      email: user.email??'',
      phoneNumber: user.phoneNumber??'',
      
    }
  });

  const onSubmit: SubmitHandler<TEditInputs> = async (data) => {
    try {
      const {email, password} = data;
      // const {year,day, month} = date;
      if(email !== user.email && password === ''){
        setError(new Error('Input password for changing email'));
      }else{
         await updateUserPassword(setLoading, setError,email,password);
      }
 
    } catch (errorObj: unknown) {
      if (errorObj instanceof Error) {
        console.error(errorObj);
      }
    }
  };

  
  return (
    <ProfileEditSection>
      <IconTwitter alt='twitter' src={twitter} />
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
        <Title>
          {CONSTANTS.EDIT_TITLE}
        </Title>
        <WrapperInputs>
        {SIGN_UP_INPUTS.map((input) => {
            
              const { name,
                    type,
                    pattern,
                    errorMessage,
                    lengthError,
                    placeholder,
                    minLength,
                    editPlaceholder
                  } = input;

              if(type==='email') return null;

              return (
                <InputWrapper key={name}>
                  <EditInput
                    type={type}
                    $error={errors[name]}
                    placeholder={type === 'password'?editPlaceholder:placeholder}
                    {...register(name, {
                      required: type!=='password',
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
            <InputWrapper>
                  <EditInput
                    type='password'
                    $error={errors.newPassword}
                    placeholder='New password'
                    {...register('newPassword', {
                      required: false,
                      pattern: { value: PASSWORD_INPUT.pattern, message: PASSWORD_INPUT.errorMessage },
                      minLength: {
                        value: PASSWORD_INPUT.minLength,
                        message: PASSWORD_INPUT.lengthError ?? PASSWORD_INPUT.errorMessage,
                      },
                    })}
                  />
                  {errors.newPassword && <ErrorMessage>{errors.newPassword.message}</ErrorMessage>}
                </InputWrapper>
        </WrapperInputs>
        <DateChoose date={date} setDate={setDate}/>
        {loading && <InfinityLoader />}
        <EditBtn type='submit' disabled={!(isValid && isValidDate(date))}>
          {CONSTANTS.EDIT_BTN}
        </EditBtn>
        {error && <SnackBar error={error} message={ERRORS_MESSAGE[error.message] ?? error.message} />}
      </Form>
    </ProfileEditSection>
  )
}
