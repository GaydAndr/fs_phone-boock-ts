import styles from './AuthForm.module.scss';
import { useState } from 'react';
import { Formik, Form } from 'formik';
import { FormField } from '../FormField/FormField';
import { AuthSchema, AuthText } from '@pages/Auth/Utilse';

interface Props {
  changeForm: () => void;
  authPage: string;
}

const singInText: AuthText = {
  title: 'SingIn',
  button: 'SingIn',
};
const loginText: AuthText = {
  title: 'Login',
  button: 'Login',
};

export const AuthForm: React.FC<Props> = ({ authPage, changeForm }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
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
    const loginCredentials = { email, password };
    const SingInCredentials = { name, email, password };

    switch (authPage) {
      case 'loginForm':
        console.log(loginCredentials);

        break;
      case 'singForm':
        console.log(SingInCredentials);

        // dispatch(signIn(credentials))
        //   .unwrap()
        //   .then(() => dispatch(logIn(credentials)))
        //   .catch((rejectedValueOrSerializedError) =>
        //     console.log(rejectedValueOrSerializedError)
        //   );
        break;

      default:
        return;
    }
    //     // dispatch(signIn(credentials))
    //     //   .unwrap()
    //     //   .then(() => dispatch(logIn(credentials)))
    //     //   .catch((rejectedValueOrSerializedError) =>
    //     //     console.log(rejectedValueOrSerializedError)
    //     //   );
  };

  return (
    <>
      <div className={styles.formWrapper}>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          validationSchema={AuthSchema}
          onSubmit={(values) => {
            handleLogin();
          }}
        >
          <Form className={styles.signUpForm} onChange={onChange}>
            <div>
              <h2 className={styles.title}>
                {authPage === 'loginForm' ? loginText.title : singInText.title}
              </h2>

              {authPage === 'singForm' && (
                <FormField
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="name"
                  label=""
                  value={name}
                />
              )}
              <FormField
                id="email"
                name="email"
                placeholder="john@acme.com"
                type="email"
                label=""
                value={email}
              />

              <FormField
                className={styles.input}
                id="password"
                name="password"
                placeholder="password"
                type="password"
                label=""
                value={password}
              />

              <button type="submit" className={styles.formButton}>
                {authPage === 'loginForm'
                  ? loginText.button
                  : singInText.button}
              </button>
            </div>
          </Form>
        </Formik>
        <button type="button" className={styles.invalid} onClick={changeForm}>
          SingIn
        </button>
      </div>
    </>
  );
};
