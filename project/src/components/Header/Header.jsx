import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div id="header">
        <img src="logo.svg" alt="logo" />
        <div id="navbar">
          <ul>
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/chi-siamo" className="link">
                Chi Siamo
              </Link>
            </li>
            <li>
              <Link to="/contattaci" className="link">
                Contattaci
              </Link>
            </li>
            <li>
              <Link to="/Prodotti" className="link">
                Prodotti
              </Link>
            </li>
            <li>
              <Link to="/log-in" className="link">
                Log In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
