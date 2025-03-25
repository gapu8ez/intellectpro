import React from "react";
import ProductCard from "./ProductCard"; // ProductCard.js импортлох

const products = [
  { image: process.env.PUBLIC_URL + "/tuluulul.jpg", title: "Төлөөлөл" },
  { image: process.env.PUBLIC_URL + "/law.jpg", title: "Хуулийн зөвлөгөө" },
  { image: process.env.PUBLIC_URL + "/advice.jpg", title: "Оюуны өмчийн талаархи зөвлөгөө" },
  { image: process.env.PUBLIC_URL + "/10170114.jpg", title: "Баталгаат орчуулга" },
];

const Product = () => {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <div style={{ width: "200px", borderRight: "1px solid #ccc", paddingRight: "20px", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2>Манай бүтээгдэхүүнүүд</h2>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Product;