import React from "react";
import "../CSS/ProductCard.css";// CSS файл холбох

const ProductCard = ({ image, title }) => {
  return (
    <div className="product-card group">
      <img src={image} alt={title} className="product-image" />
      <div className="overlay">
        <h3 className="product-title">{title}</h3>
      </div>
    </div>
    
  );
};

export default ProductCard;
