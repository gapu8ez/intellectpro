import React from 'react';
import Headers from './Headers';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Headers />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;