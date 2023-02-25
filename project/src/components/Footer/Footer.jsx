import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer">
      <ul>
        <li>GDPR</li>
        <li>Privacy Policy</li>
        <li>Cookie Policy</li>
        <li>Terms Of Service</li>
      </ul>
      <ul>
        <li>Aiuto</li>
        <li>Email</li>
        <li>
          <Link to="/documentazione" className="link">
            Documentazione
          </Link>
        </li>
        <li>Mappa Del Sito</li>
      </ul>
      <ul>
        <li>
          <img src="/images/logo.svg" alt="logo" />
        </li>
        <li>&#169; 2023 | Copyright</li>
      </ul>
    </div>
  );
};

export default Footer;
