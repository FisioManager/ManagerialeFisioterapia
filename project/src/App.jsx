import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Header,
  Footer,
  Home,
  ChiSiamo,
  Contattaci,
  Documentazione,
  Prodotti,
  Login,
} from "./components";

import "./App.scss";

function App() {
  return (
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
  );
}

export default App;
