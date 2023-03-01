import "./Header.scss";

//import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex center">
      <Link to="/">
        <img src="/images/logo.svg" alt="logo aziendale" />
      </Link>

      <div className="empty"></div>

      <nav className="flex gap-2">
        <Link to="/">Home</Link>
        <Link to="/chi-siamo">Chi Siamo</Link>
        <Link to="/contattaci">Contattaci</Link>
        <Link to="/Prodotti">Prodotti</Link>
        <Link to="/log-in">Log In</Link>
      </nav>
    </header>
  );
};

export default Header;
