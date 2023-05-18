import { NavLink } from 'react-router-dom';
import styles from './NavBtn.module.css';
// import { INavBtn } from 'src/dataStructure';

interface Props{
  handlerMenu: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
  isActive:boolean,
  location:object,
  title:string,
  path:string
}

export const NavBtn:React.FC<Props> = ({ handlerMenu, location, isActive, title, path }) => {
  return (
    <NavLink
      to={path}
      state={location}
      className={({ isActive }) =>
        isActive ? styles.link_btn_active : styles.link_btn
      }
      onClick={handlerMenu}
    >
      {title}
    </NavLink>
  );
};
