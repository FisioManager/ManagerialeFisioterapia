import { Outlet, useLocation } from "react-router-dom";
import {
    Header,
    Footer,
    AppHeader
  } from "./components";

const Layout = () => {
    const location = useLocation()

    return (
      <>
        {!(location.pathname === "/manageriale") ? <Header /> : <AppHeader/>}
        <Outlet />
        <Footer />
      </>
    )
};

export default Layout;