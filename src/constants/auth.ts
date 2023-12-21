import { IInput } from "@customTypes/auth";

export const FOOTER_AUTH = [
  'About',
  'Help Center',
  'Terms of Service',
  'Privacy Policy',
  'Cookie Policy',
  'Ads info',
  'Blog',
  'Status',
  'Carrres',
  'Brand Resources',
  'Advertsing',
  'Marketing',
  'Twitter for Business',
  'Developers',
  'Directory',
  'Settings',
  '© 2021 Twitter, Inc.',
] as const;

export const CONSTANTS = {
  AUTH_TITLE: 'Happening now',
  AUTH_SUBTITLE: 'Join Twitter today',
  AUTH_LOGIN_TEXT:'Already have an account? ',
  AUTH_GOOGLE: 'Sign up with Google',
  AUTH_EMAIL:'Sign up with email',
  AUTH_LOG_IN: 'Log in',
  SIGN_UP_TITLE: 'Create an account',
  SIGN_UP_SUBTITLE: 'Date of birth',
  SIGN_UP_TEXT_DATE: 'Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.',
  SIGN_UP_EMAIL_LINK: 'User email',
  SIGN_UP_BTN: 'Next',
  LOG_IN_TITLE: 'Log in to Twitter',
  LOG_IN_BTN: ' Log in',
  LOGIN_IN_SIGN_UP_LINK:'Sign up to Twitter',
}

export const SIGN_UP_INPUTS: IInput[] = [
  {
    name: 'name',
    placeholder: 'Name',
    pattern: /^[A-Za-z]+$/i,
    errorMessage: 'Invalid input. Please enter letters only.'
  },
  {
    name: 'phoneNumber',
    placeholder: 'Phone number',
    pattern: /^\+?\d+$/,
    errorMessage: 'Invalid phone number.'
  },
  {
    name: 'email',
    placeholder: 'Email',
    pattern: /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/,
    errorMessage: 'Invalid email address.'
  },
  {
    name: 'password',
    placeholder: 'Password',
    pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
    errorMessage: 'Password should contains at least one uppercase letter and one special symbol. ',
    lengthError: 'Password should contains at least 8 symbols',
    type: 'password',
  }
]
export const LOG_IN_INPUTS: IInput[] = [
  {
    name: 'email',
    placeholder: 'Phone number, email address',
    pattern: /.*/,
    errorMessage: ''
  },
  {
    name: 'password',
    placeholder: 'Password',
    pattern: /.*/,
    errorMessage: '',
    type: 'password',
  }
]