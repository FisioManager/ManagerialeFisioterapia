import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex center">
      <nav className="flex gap-10">
        <div className="flex col">
          <Link to="">GDPR</Link>
          <Link to="">Privacy Policy</Link>
          <Link to="">Cookie Policy</Link>
          <Link to="">Termini di servizio</Link>
        </div>
        <div className="flex col">
          <Link to="">Aiuto</Link>
          <Link to="">Email</Link>
          <Link to="">Documentazione</Link>
          <Link to="/documentazione">Mappa Del Sito</Link>
        </div>
        <div className="flex col">
          <Link to="/">
            <img src="/images/logo.svg" alt="logo aziendale" />
          </Link>
          <p>&#169; 2023 | Copyright</p>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
