import React, { useContext, useState } from "react";
import BookingContext from "./BookingContext";
import AlertContext from "../alerts/AlertContext";
import { useNavigate } from "react-router-dom";

const BookingState = (props) => {
  const [bookings, setBookings] = useState([]);
  const [booking, setBooking] = useState({});
  const { showAlert } = useContext(AlertContext);
  const navigate = useNavigate();
  
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

  const addBooking = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/bookings/addbooking/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        }
      );

      const data = await response.json();

      showAlert(data.message , "success");
      navigate("/bookinglist")

    } catch (error) {
      console.error(error);
    }
  };

  const updateResidence = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/bookings/updatebooking/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify(booking),
        }
      );
      const data = await response.json();

      if (response.ok) {
        showAlert(data.message, "success");
      } else {
        showAlert(`HTTP error! status: ${response.status}`, "danger");
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error creating the booking:", error);
      showAlert(`Error registering user: ${error}`, "danger");
    }
  };

  const deleteResidence = async (id) => {
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
      setBooking(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BookingContext.Provider
      value={{
        booking,
        bookings,
        addBooking,
        getBookings,
      }}
    >
      {props.children}
    </BookingContext.Provider>
  );
};

export default BookingState;
