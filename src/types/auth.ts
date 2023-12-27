export type TSignUpInputs = {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
};
export type TEditInputs = {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
  newPassword: string;
};
export interface IInput {
  name: keyof TSignUpInputs;
  placeholder: string;
  editPlaceholder?: string;
  pattern: RegExp;
  errorMessage: string;
  lengthError?: string;
  type?: string;
  minLength: number;
}
