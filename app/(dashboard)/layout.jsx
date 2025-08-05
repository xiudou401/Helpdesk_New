import React from 'react';
import NavBar from '../components/NavBar';

const DashboardLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default DashboardLayout;
