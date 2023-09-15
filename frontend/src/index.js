import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import UserState from "./context/user/UserState";
import AlertState from "./context/alerts/AlertState";
import BookingState from "./context/bookings/BookingState";
import ResidenceState from "./context/residences/ResidenceState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AlertState>
      <UserState>
        <ResidenceState>
          <BookingState>
            <App />
          </BookingState>
        </ResidenceState>
      </UserState>
    </AlertState>
  </React.StrictMode>
);
