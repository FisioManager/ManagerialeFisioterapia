import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /* 
  React.StrictMode è usato in fase di sviluppo per runnare extra warning 
  e controlli. è consigliabile rimuovere questa modalità in fase di produzione
  siccome causa rallentamenti e impatta sulle performance
  */
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
