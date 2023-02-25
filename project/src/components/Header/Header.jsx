import React from "react";
import logo from "../../assets/images/logo.svg";
import Login from "../../pages/Login/Login";
import ChiSiamo from "../../pages/ChiSiamo/ChiSiamo";
import Prodotti from "../../pages/Prodotti/Prodotti";
import Contattaci from "../../pages/Contattaci/Contattaci";
import Home from "../../pages/Home/Home";
import { Route, Routes, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div id="header">
        <img src={logo} alt="logo" />
        <div id="navbar">
          <ul>
            <li>
              <Link to="/home" className="link">
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

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/chi-siamo" element={<ChiSiamo />} />
        <Route path="/contattaci" element={<Contattaci />} />
        <Route path="/prodotti" element={<Prodotti />} />
        <Route path="/log-in" element={<Login />} />
      </Routes>
    </>
  );
};

export default Header;
