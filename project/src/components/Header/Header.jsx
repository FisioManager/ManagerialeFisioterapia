import React from "react";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <header>
      <img className="logo" src={logo} alt="logo" />
      <nav>
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
      </nav>
    </header>
  );
};

export default Header;
