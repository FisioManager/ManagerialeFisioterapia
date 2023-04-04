import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Layout,

  Home,
  Login,
  Register,

  AboutUs,
  ContactUs,
  Products,
  Checkout,

  Manager,
  Documentation,
} from "./pages/pages";

import "./App.scss";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/log-in" element={<Login />} />
          <Route exact path="/register" element={<Register />} />

          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/checkout" element={<Checkout />} />

          <Route exact path="/manager" element={<Manager />} />
          <Route exact path="/documentation" element={<Documentation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
