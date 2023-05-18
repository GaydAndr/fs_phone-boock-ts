// import { AuthForm } from '../../components/AuthForm/AuthForm';
import { AuthForm } from './components/AuthForm';
import styles from './index.module.scss';

export const AuthPage: React.FC = () => {
  return (
    <section>
      <div className={`${styles.container} ${styles.addFlex}`}>
        <h2 className={styles.title}>Pro Test</h2>
      </div>
      <AuthForm />
    </section>
  );
};
