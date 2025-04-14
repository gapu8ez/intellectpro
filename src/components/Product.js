import React from "react";
import ProductCard from "./ProductCard"; // ProductCard.js импортлох

const products = [
  { image: process.env.PUBLIC_URL + "/filling.jpg", title: "Filing and Prosecution" },
  { image: process.env.PUBLIC_URL + "/search.jpg", title: "Search Services" },
  { image: process.env.PUBLIC_URL + "/post.jpg", title: "Post-Grant Services" },
  { image: process.env.PUBLIC_URL + "/pregrant.jpg", title: "Pre-Grant Services" },
  { image: process.env.PUBLIC_URL + "/agreement.jpg", title: "Agreement registration" },
];

const Product = () => {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <div style={{ width: "200px", borderRight: "1px solid #ccc", paddingRight: "20px", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2>Our Expertise</h2>
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