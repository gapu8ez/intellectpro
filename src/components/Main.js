import React from 'react';
import "../CSS/Main.css";

function CompanyInfo() {
  return (
    <div className="container">
      <div className="image-section">
        <img src="/tall.jpg" alt="Компанийн зураг" />
      </div>
      <div className="text-section">
        <h1>Манай компани</h1>
        <p>Манай компани 20XX онд байгуулагдсан бөгөөд олон улсын стандартад нийцсэн бүтээгдэхүүн, үйлчилгээг үзүүлж байна.</p>
        <p><strong>Эрхэм зорилго:</strong> Үйлчлүүлэгчдэд өндөр чанартай, найдвартай үйлчилгээг хүргэх.</p>
        <p><strong>Алсын хараа:</strong> Салбартаа тэргүүлэгч компани болох.</p>
        <p><strong>Үнэт зүйлс:</strong></p>
        <ul>
          <li>✔ Чанартай үйлчилгээ</li>
          <li>✔ Итгэлцэл ба хариуцлага</li>
          <li>✔ Инноваци ба дэвшилт</li>
          <li>✔ Харилцагч төвтэй бодлого</li>
        </ul>
        <button onClick={() => alert('Манай компани дэлгэрэнгүй мэдээллийг удахгүй оруулна!')}>Дэлгэрэнгүй</button>
      </div>
    </div>
  );
}

export default CompanyInfo;
