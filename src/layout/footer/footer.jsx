import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div className="container-1">
      <div className="menu-footer">
        <div className="about">
          <h4>About</h4>
          <li>About</li>
          <li>Careers</li>
          <li>community</li>
        </div>
        <div className="Treatment">
          <h4>Treatment</h4>
          <li>Primary Care</li>
          <li>Surgery</li>
          <li>Medical Check-up</li>
        </div>
        <div className="Support">
          <h4>Support</h4>
          <li>Help Centre</li>
          <li>FAQ</li>
          <li>Contact Us</li>
        </div>
      </div>
      <div className="input-footer">
        <div className="input-name">
          <h1>Get 10% Off Your First Order!</h1>
          <input type="email" placeholder="email@example.com" required />
        </div>
        <button className="button-footer">SUBSRIBE</button>
      </div>
    </div>
  );
}

export default Footer;
