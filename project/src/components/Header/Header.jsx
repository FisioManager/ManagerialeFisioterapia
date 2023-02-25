import React from "react";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <div id="header">
      <img className="logo" src={logo} alt="logo" />
      <div id="navbar">
        <ul>
          <li>
            <a href="#">Chi Siamo</a>
          </li>
          <li>
            <a href="#">Prodotti</a>
          </li>
          <li>
            <a href="#">Contattaci</a>
          </li>
          <li>
            <a href="#">Log In</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
