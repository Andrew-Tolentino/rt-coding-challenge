import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './root-layout.css';

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <MainContent>
        <Outlet />
      </MainContent>
    </>
  );
}

const NavBar = () => {
  return (
    <div className="NavBarContainer">
      <Link to="/">
        <h2>Reviews</h2>
      </Link>
    </div>
  );
}

const MainContent = ({ children }) => {
  return (
    <div className="MainContent">
      {children}
    </div>
  );
}

export default RootLayout;