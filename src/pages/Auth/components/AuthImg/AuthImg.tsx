// import { AuthForm } from '../../components/AuthForm/AuthForm';
import styles from './index.module.scss';

interface Props {
  authPage: string;
}

export const AuthImg: React.FC<Props> = ({ authPage }) => {
  console.log(authPage);
  return (
    <div
      className={`${styles.wrapper} ${
        authPage !== 'loginForm' ? styles.signUp : styles.login
      }`}
    ></div>
  );
};
