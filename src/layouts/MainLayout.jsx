import React from 'react';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="w-11/12 mx-auto min-h-[calc(100dvh-116px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
