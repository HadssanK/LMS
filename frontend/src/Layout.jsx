import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* This will render the child route component */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
