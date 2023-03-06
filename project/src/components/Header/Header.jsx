import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="flex space-between">
        <img src="/images/logo.svg" alt="logo" />
        <nav className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/chi-siamo">Chi Siamo</Link>
          <Link to="/contattaci">Contattaci</Link>
          <Link to="/Prodotti">Prodotti</Link>
          <Link to="/log-in">Log In</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
