import React from 'react';
import Headers from './Headers';
import Footer from './Footer';
import LanguageSwitcher from "./LanguageSwitcher";

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