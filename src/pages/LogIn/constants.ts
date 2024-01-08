import { IInput } from '@customTypes/user';

export const LOG_IN_INPUTS: IInput[] = [
  {
    name: 'email',
    placeholder: 'Phone number, email address',
    pattern: /.*/,
    errorMessage: '',
    minLength: 1,
  },
  {
    name: 'password',
    placeholder: 'Password',
    pattern: /.*/,
    errorMessage: '',
    type: 'password',
    minLength: 1,
  },
] as const;
