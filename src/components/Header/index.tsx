import { useState } from 'react';
import { BurgerMenu } from './components/BurgerMenu';
import { Navigation } from './components/Navigation';
import { Logo } from '@components/Header/components/Logo';
import style from './index.module.scss';

export const Header: React.FC = () => {
  const [isActive, setOnMenuBtn] = useState(false);
  const isLogin = true;
  const handlerMenu = () => {
    setOnMenuBtn(!isActive);
  };
  return (
    <header className={style.header}>
      <div className={style.container}>
        <Logo/>
        <div className={style.navigation}>
          <Navigation
            handlerMenu={handlerMenu}
            isLogin={isLogin}
            isActive={isActive}
          />
          {isLogin && (
            <BurgerMenu handlerMenu={handlerMenu} isActive={isActive} />
          )}
        </div>
      </div>
    </header>
  );
};
