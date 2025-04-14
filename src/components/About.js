import React from "react";
import "../CSS/Navbar.css"; // CSS-г тусдаа файлаар холбож байгаа гэж үзье

const About = () => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
      
      {/* Navbar */}
      <nav className="navbar">
        <ul className="nav-list">
          <li><a href="#">Home</a></li>
          <li><a href="#">APPLICATION</a></li>

          <li className="dropdown">
            <a href="#" className="dropbtn">APPLICATION</a>
            <div className="dropdown-content">
              <a href="#">Patent application</a>
              <a href="#">Utility Model application</a>
              <a href="#">Trademark application</a>
              <a href="#">Design application</a>
            </div>
          </li>
          <li><a href="#">Forms</a></li>
          <li><a href="#">Contact us</a></li>
        </ul>
      </nav>

      {/* About us Section */}
      <div style={{ paddingTop: "80px", textAlign: "center" }}>
        <h1>Бидний тухай</h1>
        <p>Манай компани 2010 онд байгуулагдсан бөгөөд инноваци шингэсэн бүтээгдэхүүн, үйлчилгээг хэрэглэгчдэд хүргэх зорилготой.</p>
        <p>Бид мэдээллийн технологи, программ хангамж, дижитал маркетингийн салбарт үйл ажиллагаа явуулдаг.</p>
      </div>

      {/* Footer эсвэл бусад хэсэг */}
      <div style={{ width: "100%" }}></div>
    </div>
  );
};

export default About;
