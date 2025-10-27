import React from "react";
import "./SelectSection.css";
import SelectCard from "../../common/SelectCard/SelectCard";
import { selects } from "../../../constants/Selects";
function SelectSection() {
  return (
    <div className="select-section">
      {selects.map((select, index) => (
        <SelectCard
          key={index}
          name={select.name}
          labelButton={select.button}
          image={select.img}
        />
      ))}
    </div>
  );
}

export default SelectSection;
