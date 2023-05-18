import styles from './MainContainer.module.scss';

interface Props {
  children: React.ReactElement;
}

const MainContainer: React.FC<Props> = ({ children }) => {
  return <div className={styles.mainContainer}>{children}</div>;
};
export default MainContainer;
