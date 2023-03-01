import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="flex center gap-5">
      <nav className="flex gap-5">
        <div className="flex col gap">
          <Link to="">GDPR</Link>
          <Link to="">Privacy Policy</Link>
          <Link to="">Cookie Policy</Link>
          <Link to="">Termini di servizio</Link>
        </div>
        <div className="flex col gap">
          <Link to="">Aiuto</Link>
          <Link to="">Email</Link>
          <Link to="">Documentazione</Link>
          <Link to="/documentazione">Mappa Del Sito</Link>
        </div>
      </nav>

      <div>
        <Link to="/">
          <img src="/images/logo.svg" alt="logo aziendale" />
        </Link>
        <p>&#169; 2023 | Copyright</p>
      </div>
    </footer>
  );
};

export default Footer;
