import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  AboutUs,
  ContactUs,
  Documentation,
  Products,
  Login,
  Manager,
  Layout
} from "./components";

import "./App.scss";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/log-in" element={<Login />} />
          <Route exact path="/documentation" element={<Documentation />} />
          <Route exact path="/manager" element={<Manager />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
