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
    <nav className="NavBarContainer">
      <li>
        <Link id="nav-bar-link" to="/">Reviews</Link>
      </li>
    </nav>
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