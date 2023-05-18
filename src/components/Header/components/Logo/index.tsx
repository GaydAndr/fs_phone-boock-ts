import logoSvg from '@assets/svg/logo/logo.svg';
import { NavLink } from 'react-router-dom';
import style from './Logo.module.scss';

export const Logo:React.FC  = () => {
  return (
    <>
      <NavLink to="/home" className={style.logoContent}>
        <svg
          className={style.logoSVG}
          fill="#fff"
          // stroke={color}
          // width="60"
          // height="60"
        >
          <use xlinkHref={`${logoSvg}#logo`} />
        </svg>
        <div className={style.logoTXT}>
          <p>Phone</p>
          <p>Book</p>
        </div>
      </NavLink>
    </>
  );
};
