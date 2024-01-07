import { EDIT_INPUTS, ERRORS_MESSAGE } from '@constants/auth';
import { ErrorMessage, IconTwitter, InputWrapper, WrapperLoader } from '@components/ui';
import { SubmitHandler, useForm } from 'react-hook-form';
import twitter from '@assets/icons/twitter.svg';
import { useState } from 'react';
import { CONSTANTS } from '@constants/index';
import { useAppSelector, useAppDispatch } from '@hooks/redux';
import { SnackBar } from '@components/SnackBar';
import { InfinityLoader } from '@components/InfinityLoader';
import { updateUserProfile } from '@store/reducers/userSlice';
import { updateUserInfo, updateUserPassword } from '@db/user';
import { TEditInputs } from '@customTypes/user';

import {
  EditInput,
  Form,
  ProfileEditSection,
  EditBtn,
  Title,
  WrapperInputs,
  LabelInput,
  LabelWrapper,
  WrapperBtn,
} from './styled';

export interface IProfileEdit {
  handleClose: () => void;
}
export function ProfileEdit({ handleClose }: IProfileEdit) {
  const user = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TEditInputs>({
    mode: 'onChange',
    defaultValues: {
      name: user.displayName ?? '',
      phoneNumber: user.phoneNumber ?? '',
      link: user.link ?? '',
    },
  });

  const onSubmit: SubmitHandler<TEditInputs> = async (data) => {
    try {
      const { password, newPassword, name, phoneNumber, link } = data;

      if ((password !== '' && newPassword === '') || (password === '' && newPassword !== '')) {
        setError(new Error('Both fields with passwords should be filled'));

        return;
      }

      if (password && newPassword && password !== newPassword) {
        setLoading(true);
        await updateUserPassword(password, newPassword);
        setLoading(false);
      }

      if (user.displayName !== name || user.phoneNumber !== phoneNumber || user.link !== link) {
        setLoading(true);
        await updateUserInfo(name, phoneNumber, link);
        setLoading(false);
        dispatch(
          updateUserProfile({
            displayName: name,
            phoneNumber,
            link,
          }),
        );
      }

      handleClose();
    } catch (errorObj: unknown) {
      if (errorObj instanceof Error) {
        console.error(errorObj);
        setError(errorObj);
        setLoading(false);
      }
    }
  };

  return (
    <ProfileEditSection data-cy='edit-profile'>
      <IconTwitter alt='twitter' src={twitter} />
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
        <Title>{CONSTANTS.EDIT_TITLE}</Title>
        <WrapperInputs>
          {EDIT_INPUTS.map((input) => {
            const { name, type, pattern, errorMessage, lengthError, label, minLength } = input;

            return (
              <LabelWrapper key={name}>
                <LabelInput htmlFor={name}>{label}</LabelInput>
                <InputWrapper>
                  <EditInput
                    data-cy={`edit-${name}`}
                    id={name}
                    type={type}
                    $error={errors[name]}
                    {...register(name, {
                      required: !!(type === 'name' || type === 'phoneNumber'),
                      pattern: { value: pattern, message: errorMessage },
                      minLength: {
                        value: minLength,
                        message: lengthError ?? errorMessage,
                      },
                    })}
                  />
                  {errors[name] && <ErrorMessage>{errors[name]?.message}</ErrorMessage>}
                </InputWrapper>
              </LabelWrapper>
            );
          })}
        </WrapperInputs>
        <WrapperBtn>
          {loading && (
            <WrapperLoader>
              <InfinityLoader />
            </WrapperLoader>
          )}
          <EditBtn data-cy='edit-btn' type='submit' disabled={!isValid}>
            {CONSTANTS.EDIT_BTN}
          </EditBtn>
        </WrapperBtn>

        {error && <SnackBar error={error} message={ERRORS_MESSAGE[error.message] ?? error.message} />}
      </Form>
    </ProfileEditSection>
  );
}
