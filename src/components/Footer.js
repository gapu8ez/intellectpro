import React from "react";
import '../CSS/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>CONTACT US</h3>
          <p>Tel.: +86 177 2741 6895</p>
          <p>Email: <a href="mailto:info@intellectpro.mn">info@intellectpro.mn</a></p>
          <p>Skype: +86 177 2741 6895</p>
          <p>WhatsApp: 8617727416895</p>
          <p>Address: Ikh Mongol Street, 355A bldg 301 Bayanzurkh District, Ulaanbaatar, Mongolia</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Intellect pro Co., Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;