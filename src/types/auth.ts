export type TSignUpInputs = {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
};
export interface IInput {
  name: keyof TSignUpInputs;
  placeholder: string;
  pattern: RegExp;
  errorMessage: string;
  lengthError?: string;
  type?: string;
}
