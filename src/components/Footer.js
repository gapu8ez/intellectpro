import React from "react";
import '../CSS/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>NAVIGATION</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/applications">Applications</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>CONTACT US</h3>
          <p>Tel.: +86 177 2741 6895</p>
          <p>Email: <a href="mailto:market@kings3dprinter.com">market@kings3dprinter.com</a></p>
          <p>Skype: +86 177 2741 6895</p>
          <p>WhatsApp: 8617727416895</p>
          <p>Address: Floor 14, Building 3A, Yunzhi Science Park, Shenzhen, China</p>
        </div>

        <div className="footer-section">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-google-plus"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Shenzhen Kings 3D Printing Technology Co., Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;