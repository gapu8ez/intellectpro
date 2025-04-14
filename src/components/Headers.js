import React from "react";
import "../CSS/Headers.css"; // Importing the external CSS
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo-container">
      <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Logo" />
      </div>

      {/* Navigation */}
      <nav className="nav">
        <Link to="/Home">HOME</Link>
        <Link to="/about">APPLICATION</Link>
        <Link to="/info">INFO</Link>
        <Link to="/Product">OUR EXPERTISE</Link>
        <Link to="/Contact">CONTACT US</Link>
      </nav>
    </header>
  );
};

export default Header;
