import { Link } from "react-router-dom";
import './AppHeader.scss'

const AppHeader = () => {
  return (
    <>
      <header className="flex">
        <Link to="/">
          <img src="/images/logo.svg" alt="logo" />
        </Link>
      </header>
    </>
  );
};

export default AppHeader;
