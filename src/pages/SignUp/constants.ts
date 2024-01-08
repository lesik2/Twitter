import { IInput } from '@customTypes/user';

export const SIGN_UP_INPUTS: IInput[] = [
  {
    name: 'name',
    placeholder: 'Name',
    pattern: /^[A-Za-zА-Яа-я\s]+$/i,
    errorMessage: 'Invalid input. Please enter letters only.',
    minLength: 1,
  },
  {
    name: 'phoneNumber',
    placeholder: 'Phone number',
    pattern: /^\+?\d+$/,
    errorMessage: 'Invalid phone number. Format: +375XXXXXXXXX',
    minLength: 13,
  },
  {
    name: 'email',
    placeholder: 'Email',
    pattern: /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/,
    errorMessage: 'Invalid email address.',
    minLength: 1,
    type: 'email',
  },
  {
    name: 'password',
    placeholder: 'Password',
    editPlaceholder: 'Current password',
    pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
    errorMessage: 'Password should contains at least one uppercase letter and one special symbol. ',
    lengthError: 'Password should contains at least 8 symbols',
    type: 'password',
    minLength: 8,
  },
] as const;

export const CONSTANTS = {
  TITLE: 'Create an account',
  SUBTITLE: 'Date of birth',
  TEXT_DATE:
    'Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.',
  EMAIL_LINK: 'User email',
  BTN: 'Next',
};
