import React from 'react';
import '../CSS/ContactUs.css';

const Contact = () => {
  const emailAddress = 'таны_мэйл@gmail.com'; // Өөрийн мэйл хаягаа энд оруулна уу

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
          <strong>Хаяг:</strong> 123 Гол Гудамж, Хотхон, Улс
        </p>
        <p>
          <strong>Утас:</strong> +1 (555) 123-4567
        </p>
        <p>
          <strong>Мэйл:</strong> info@example.com
        </p>
        <div className="social-links">
          <a href="#" className="social-icon">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact; 