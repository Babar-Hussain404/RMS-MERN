import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import UserState from "./context/user/UserState";
import AlertState from "./context/alerts/AlertState";
import ResidenceState from "./context/residences/ResidenceState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AlertState>
      <UserState>
        <ResidenceState>
          <App />
        </ResidenceState>
      </UserState>
    </AlertState>
  </React.StrictMode>
);
