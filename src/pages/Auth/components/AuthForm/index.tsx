import styles from './AuthForm.module.css';
import { useState } from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { FormField } from './FormField/FormField';

interface MyFormValues {
  email: string;
  password: string;
}

export const AuthForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const initialValues: MyFormValues = { email, password };

  const onChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    switch (event.target.name) {
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      default:
        return;
    }
  };

  const handleLogin = () => {
    const credentials = { email, password };
    console.log(credentials);
  };

  const handleRegister = () => {
    const credentials = { email, password };
    console.log(credentials);
    // dispatch(signIn(credentials))
    //   .unwrap()
    //   .then(() => dispatch(logIn(credentials)))
    //   .catch((rejectedValueOrSerializedError) =>
    //     console.log(rejectedValueOrSerializedError)
    //   );
  };

  const schema = Yup.object({
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
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={() => console.log(1)}
      >
        <div className={styles.formWrapper}>
          <Form className={styles.signUpForm} onChange={onChange}>
            <p className={styles.formText}>
              You can use your Google Account to authorize:
            </p>
            <button
              // onClick={onHandleSigIn}
              className={styles.googleButton}
            >
              Google
            </button>
            <p className={styles.formText}>
              Or login to our app using e-mail and password:
            </p>
            <FormField
              className={styles.input}
              name="email"
              type="email"
              value={email}
              placeholder="E-mail"
              autoComplete="on"
              label="Email"
            />
            <FormField
              className={styles.input}
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              autoComplete="on"
              label="Password"
            />
            <div className={styles.formButtonWrapper}>
              <button
                type="button"
                // to="/home"
                className={styles.formButton}
                onClick={handleLogin}
              >
                Sign in
              </button>
              <button
                type="button"
                // to="/home"
                className={styles.formButton}
                onClick={handleRegister}
              >
                Sign up
              </button>
            </div>
          </Form>
        </div>
      </Formik>
    </>
  );
};
