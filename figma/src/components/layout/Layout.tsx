import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <div>
      <Header/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;