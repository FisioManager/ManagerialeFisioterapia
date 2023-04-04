import { Outlet, useLocation } from "react-router-dom";
import {
    Header,
    Footer,
    AppHeader
  } from "../components/components";

const Layout = () => {
    const location = useLocation()

    return (
      <>
        {!(location.pathname === "/manager") ? <Header /> : <AppHeader/>}
        <Outlet />
        <Footer />
      </>
    )
};

export default Layout;