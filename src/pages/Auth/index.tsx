// import { AuthForm } from '../../components/AuthForm/AuthForm';
import { useState } from 'react';
import { TypeForm } from './Utilse';
import { AuthForm } from './components/AuthForm';
import styles from './index.module.scss';

export const AuthPage: React.FC = () => {
  const [authPage, setAuthPage] = useState<TypeForm>('loginForm');

  const changeForm = () => {
    authPage === 'loginForm'
      ? setAuthPage('singForm')
      : setAuthPage('loginForm');
  };

  return (
    <section>
      <div className={`${styles.container} ${styles.addFlex}`}></div>
      <AuthForm changeForm={changeForm} authPage={authPage} />
    </section>
  );
};
