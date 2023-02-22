import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  /* 
  React.StrictMode è usato in fase di sviluppo per runnare extra warning 
  e controlli. è consigliabile rimuovere questa modalità in fase di produzione
  siccome causa rallentamenti e impatta sulle performance
  */
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
