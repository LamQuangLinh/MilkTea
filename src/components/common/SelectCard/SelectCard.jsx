import React from "react";
import "./SelectCard.css";
function SelectCard({ image, name, labelButton }) {
  return (
    <div className="select-card">
      <img src={image} alt={image} />
      <h1>{name}</h1>
      <button>{labelButton}</button>
    </div>
  );
}

export default SelectCard;
