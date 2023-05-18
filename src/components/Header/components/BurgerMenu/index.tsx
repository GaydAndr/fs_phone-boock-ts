import { Icons } from '../../../Icons/Icons';
import styles from './BurgerMenu.module.scss';

interface Props {
  handlerMenu: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isActive: boolean;
}

export const BurgerMenu: React.FC<Props> = ({ handlerMenu, isActive }) => {
  return (
    <button
      className={`${styles.burger} ${isActive ? styles.active : ''}`}
      type="button"
      onClick={handlerMenu}
      aria-expanded="false"
      aria-controls="menu"
      data-menu-button
    >
      <Icons
        name="threeHorizontalStripes"
        className={styles.burger__open}
        color="currentColor"
        width="20"
        height="20"
      />
      <Icons
        name="crossForClosing"
        className={styles.burger__close}
        color="currentColor"
        width="26"
        height="26"
      />
    </button>
  );
};
