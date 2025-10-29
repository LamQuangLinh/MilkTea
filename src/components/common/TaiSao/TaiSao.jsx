import React from "react";
import hinh12 from "../../../assets/hinh12.webp";
import "./TaiSao.css";
function TaiSao() {
  return (
    <div className="taisao">
      <div className="why">
        <h1>WHY WE TWRL</h1>
        <p>
          We're on a mission to make favorite drinks, boba tea and tea lattes,
          even more convenient, all with 75% less sugar & calories and 100%
          delicious-ness
        </p>
      </div>
      <img src={hinh12} alt={hinh12} />
    </div>
  );
}

export default TaiSao;
