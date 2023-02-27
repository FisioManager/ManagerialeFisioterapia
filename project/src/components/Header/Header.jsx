import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div id="header">
        <img src="/images/logo.svg" alt="logo" />
        <div id="navbar">
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/chi-siamo" className="link">
              Chi Siamo
            </Link>
            <Link to="/contattaci" className="link">
              Contattaci
            </Link>
            <Link to="/Prodotti" className="link">
              Prodotti
            </Link>
            <Link to="/log-in" className="link">
              Log In
            </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
