import { IEditInput } from '@customTypes/user';

export const EDIT_INPUTS: IEditInput[] = [
  {
    name: 'name',
    label: 'Name',
    pattern: /^[A-Za-zА-Яа-я\s]+$/i,
    errorMessage: 'Invalid input. Please enter letters only.',
    minLength: 1,
  },
  {
    name: 'phoneNumber',
    label: 'Phone number',
    pattern: /^\+?\d+$/,
    errorMessage: 'Invalid phone number. Format: +375XXXXXXXXX',
    minLength: 13,
  },
  {
    name: 'link',
    label: 'Link',
    pattern: /^@[A-Za-z0-9]+$/,
    errorMessage: 'Invalid link address.',
    minLength: 1,
  },
  {
    name: 'password',
    label: 'Current password',
    pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
    errorMessage: 'Password should contains at least one uppercase letter and one special symbol. ',
    lengthError: 'Password should contains at least 8 symbols',
    type: 'password',
    minLength: 8,
  },
  {
    name: 'newPassword',
    label: 'New password',
    pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
    errorMessage: 'Password should contains at least one uppercase letter and one special symbol. ',
    lengthError: 'Password should contains at least 8 symbols',
    type: 'password',
    minLength: 8,
  },
] as const;
