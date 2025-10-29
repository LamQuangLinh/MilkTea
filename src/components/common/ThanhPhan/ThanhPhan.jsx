import React from "react";
import hinh11 from "../../../assets/hinh11.webp";
import "./ThanhPhan.css";

function ThanhPhan() {
  return (
    <div className="thanhphan">
      <img src={hinh11} alt={hinh11} />
      <div className="mota">
        <h1>Twrl's changing the boba tea game! </h1>
        <p>
          Cafe-style boba tea at home, ready in under a minute. Twrl makes it
          easy to customize your drink just the way you like it!
        </p>
        <p>Boba experience anytime, anywhere!</p>
        <button>SHOP NOW</button>
      </div>
    </div>
  );
}

export default ThanhPhan;
