import React from "react";
import "./ComboCard.css";
function ComboCard({ image, name, content, labelButton }) {
  return (
    <div className="combo-card">
      <img src={image} alt={image} />
      <h1>{name}</h1>
      <p>{content}</p>
      <button>{labelButton}</button>
    </div>
  );
}

export default ComboCard;
