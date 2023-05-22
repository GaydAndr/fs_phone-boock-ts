import * as Yup from 'yup';



export const AuthSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Name must be more than 3 symbols')
    .max(50, 'Name must be less than 50 symbols'),
  email: Yup.string()
    .email('Invalid e-mail')
    .max(50, 'E-mail must be less than 50 symbols')
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      'Invalid e-mail'
    )
    .required('Email is required'),
  password: Yup.string()
    .max(20, 'Password must be less than 20 symbols')
    .min(8, 'Password must be more than 8 symbols')
    .required('Password is required'),
  // .matches(
  //   /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
  //   'Password must contain at least 8 characters, one uppercase, one number and one special case character'
  // ),
});


export interface FormFieldProps {
  name: string;
  id: string;
  placeholder: string;
  type: string;
  label: string;
  value: string;
}

export type TypeForm = 'loginForm' | 'singForm';

export interface AuthText  {
  title: string;
  button: string;
};