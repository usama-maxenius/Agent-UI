import React from 'react';
import SideBar from './sidebar';
import Header from './header';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const MainWrapper = styled('div')(() => ({
  overflowX: 'hidden',
}));

const Layout = () => {
  return (
    <React.Fragment>
      <MainWrapper>
        <SideBar />
        <Header />
        <Outlet />
      </MainWrapper>
    </React.Fragment>
  );
};

export default Layout;
