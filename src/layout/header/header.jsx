import React from "react";
import "./header.css";
import logo from "../../assets/milktea.jpg";

function Header() {
  return (
    <div className="container">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
        <h1>Linh MilkTea</h1>
      </div>
      <div className="menu">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <button>SIGN IN</button>
      </div>
    </div>
  );
}

export default Header;
