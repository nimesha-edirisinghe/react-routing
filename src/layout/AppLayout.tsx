import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/NavBar/NavigationBar';

const AppLayout: FC = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
};

export default AppLayout;
