import React from 'react';
import SideBar from './sidebar';
import Header from './header';
import { Outlet, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const MainWrapper = styled('div')(() => ({
  overflowX: 'hidden',
}));

const Layout = () => {
  let location = useLocation();
  return (
    <React.Fragment>
      <MainWrapper>
        {location.pathname == '/connector/layout' && <SideBar />}
        <Header />
        <Outlet />
      </MainWrapper>
    </React.Fragment>
  );
};

export default Layout;
