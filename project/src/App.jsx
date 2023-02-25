import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import ChiSiamo from "./pages/ChiSiamo/ChiSiamo";
import Contattaci from "./pages/Contattaci/Contattaci";
import Documentazione from "./pages/Documentazione/Documentazione"
import Prodotti from "./pages/Prodotti/Prodotti";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/chi-siamo" element={<ChiSiamo />} />
          <Route exact path="/contattaci" element={<Contattaci />} />
          <Route exact path="/prodotti" element={<Prodotti />} />
          <Route exact path="/log-in" element={<Login />} />
          <Route exact path="/documentazione" element={<Documentazione />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
