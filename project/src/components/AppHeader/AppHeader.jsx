import { Link } from "react-router-dom";
import './AppHeader.scss'

const AppHeader = ({setShowAppHeader}) => {
  return (
    <>
      <header className="flex">
        <Link onClick={() => setShowAppHeader(false)} to="/">
          <img src="/images/logo.svg" alt="logo" />
        </Link>
      </header>
    </>
  );
};

export default AppHeader;
