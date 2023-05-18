import { Outlet } from 'react-router-dom';
import { Header } from '@components/Header';
import MainContainer from '@components/MainContainer';

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  );
};

// export default Layout;
