import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AlertState from './context/alerts/AlertState'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AlertState>
      <App />
    </AlertState>
  </React.StrictMode>
);
