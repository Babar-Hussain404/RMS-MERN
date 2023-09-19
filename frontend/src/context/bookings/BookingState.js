import React, { useContext, useState } from "react";
import BookingContext from "./BookingContext";
import AlertContext from "../alerts/AlertContext";

const BookingState = (props) => {
  const [bookings, setBookings] = useState([]);
  const [booking, setBooking] = useState({});
  const { showAlert } = useContext(AlertContext);

  const getBookings = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/bookings/getallbookings",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        }
      );
      const bookingData = await response.json();
      setBookings(bookingData); // Update the booking state with the fetched data
    } catch (error) {
      console.error(error);
    }
  };

  const updateBooking = async (id, status) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/bookings/updatebooking/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({ Status: status }),
        }
      );
      const res = await response.json();

      showAlert(res.message, res.type);
    } catch (error) {
      console.error("Error creating the booking:", error);
      showAlert(`Error registering user: ${error}`, "danger");
    }
  };

  const deleteBooking = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/bookings/deletebooking/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        }
      );
      const res = await response.json();

      showAlert(res.message, res.type);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BookingContext.Provider
      value={{
        booking,
        bookings,
        getBookings,
        updateBooking,
        deleteBooking,
      }}
    >
      {props.children}
    </BookingContext.Provider>
  );
};

export default BookingState;
