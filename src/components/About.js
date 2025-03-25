import React from "react";

const About = () => {
  return (
    <div style={{ paddingTop: "600px", textAlign: "center", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between", width:"100%" }}>
      <div>
        <h1>Бидний тухай</h1>
        <p>Манай компани 2010 онд байгуулагдсан бөгөөд инноваци шингэсэн бүтээгдэхүүн, үйлчилгээг хэрэглэгчдэд хүргэх зорилготой.</p>
        <p>Бид мэдээллийн технологи, программ хангамж, дижитал маркетингийн салбарт үйл ажиллагаа явуулдаг.</p>
      </div>
 {/* Footer-ийн div-д width 100% тохируулах */}
 <div style={{ width: "99.2vw" }}>
      </div>
    </div>
  );
};

export default About;
