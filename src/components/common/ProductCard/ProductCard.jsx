import React from "react";
import "./ProductCard.css";
function ProductCard({ image, name, description, content, labelButton }) {
  return (
    <div className="card card-1">
      <img className="hinh2" src={image} alt={name} />
      <h1>{name}</h1>
      <h3>{description}</h3>
      <p>{content}</p>
      <button>{labelButton}</button>
    </div>
  );
}

export default ProductCard;
