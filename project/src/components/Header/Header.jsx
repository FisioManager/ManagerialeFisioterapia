import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div id="header">
        <img src="/images/logo.svg" alt="logo" />
        <div id="navbar">
            <Link to="/">
              Home
            </Link>
            <Link to="/chi-siamo">
              Chi Siamo
            </Link>
            <Link to="/contattaci">
              Contattaci
            </Link>
            <Link to="/Prodotti">
              Prodotti
            </Link>
            <Link to="/log-in">
              Log In
            </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
