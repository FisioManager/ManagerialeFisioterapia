import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import {
  AppHeader,
  Header,
  Footer,
  Home,
  ChiSiamo,
  Contattaci,
  Documentazione,
  Prodotti,
  Login,
  Manageriale
} from "./components";

import "./App.scss";

function App() {
  const [showAppHeader, setShowAppHeader] = useState(false);

  return (
    <BrowserRouter>
      {showAppHeader ? <AppHeader setShowAppHeader={setShowAppHeader}/> : <Header/>}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/chi-siamo" element={<ChiSiamo />} />
        <Route exact path="/contattaci" element={<Contattaci />} />
        <Route exact path="/prodotti" element={<Prodotti />} />
        <Route exact path="/log-in" element={<Login setShowAppHeader={setShowAppHeader}/>} />
        <Route exact path="/documentazione" element={<Documentazione />} />
        <Route exact path="/manageriale" element={<Manageriale />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
