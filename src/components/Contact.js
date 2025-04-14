import React from 'react';
import '../CSS/ContactUs.css';

const Contact = () => {
  const emailAddress = 'info@intellectpro.mn'; // Өөрийн мэйл хаягаа энд оруулна уу

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Бидэнтэй Холбогдох</h2>
        <p>Мэйл илгээхийн тулд доорх товчийг дарна уу:</p>
        <button className="email-button" onClick={handleEmailClick}>
          Gmail-ээр Мэйл Илгээх
        </button>
      </div>
      <div className="contact-info">
        <h3>Манай Мэдээлэл</h3>
        <p>
          <strong>Хаяг:</strong> Ikh Mongol Street, 355A bldg 301 Bayanzurkh District, Ulaanbaatar
        </p>
        <p>
          <strong>Утас:</strong> +1 (555) 123-4567
        </p>
        <p>
          <strong>Мэйл:</strong> info@intellectpro.mn
        </p>
      </div>
    </div>
  );
};

export default Contact; 