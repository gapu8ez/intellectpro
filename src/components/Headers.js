import React from "react";
import "../CSS/Headers.css"; // Importing the external CSS
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo-container">
        <img src="/logo.png" alt="Logo" className="logo" />
        <span className="logo-text">Intellect pro</span>
      </div>

      {/* Navigation */}
      <nav className="nav">
        <Link to="/Home">НҮҮР ХУУДАС</Link>
        <Link to="/about">БИДНИЙ ТУХАЙ</Link>
        <Link to="/info">МЭДЭЭ МЭДЭЭЛЭЛ</Link>
        <Link to="/Product">БҮТЭЭГДХҮҮН</Link>
        <Link to="/Contact">ХОЛБОО БАРИХ</Link>
      </nav>

      {/* Language Switcher байрлуулах */}
      <div className="language-switcher">
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
