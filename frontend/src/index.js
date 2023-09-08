import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import UserState from "./context/user/UserState";
import AlertState from "./context/alerts/AlertState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AlertState>
      <UserState>
        <App />
      </UserState>
    </AlertState>
  </React.StrictMode>
);
