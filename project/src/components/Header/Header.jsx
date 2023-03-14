import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="flex space-between">
      <Link to="/">
        <img src="/images/logo.svg" alt="logo" />
      </Link>
      <nav className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about-us">Chi Siamo</Link>
        <Link to="/contact-us">Contattaci</Link>
        <Link to="/products">Prodotti</Link>
        <Link to="/log-in">Log In</Link>
      </nav>
    </header>
  );
};

export default Header;
