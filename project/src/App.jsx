import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  ChiSiamo,
  Contattaci,
  Documentazione,
  Prodotti,
  Login,
  Manageriale,
  Layout
} from "./components";

import "./App.scss";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/chi-siamo" element={<ChiSiamo />} />
          <Route exact path="/contattaci" element={<Contattaci />} />
          <Route exact path="/prodotti" element={<Prodotti />} />
          <Route exact path="/log-in" element={<Login />} />
          <Route exact path="/documentazione" element={<Documentazione />} />
          <Route exact path="/manageriale" element={<Manageriale />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
