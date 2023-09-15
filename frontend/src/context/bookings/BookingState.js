import React, { useContext, useState } from "react";
import BookingContext from "./BookingContext";
import AlertContext from "../alerts/AlertContext";

const BookingState = (props) => {
  const [residences, setResidences] = useState([]);
  const [residence, setResidence] = useState({});
  const { showAlert } = useContext(AlertContext);

  const getResidences = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/residences/getallresidences",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        }
      );
      const residenceData = await response.json();
      setResidences(residenceData); // Update the residence state with the fetched data
    } catch (error) {
      console.error(error);
    }
  };

  const getHotels = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/residences/getallresidences",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        }
      );
      const residenceData = await response.json();

      // Filter out residences with Type set to "Hotel"
      const hotels = residenceData.filter(
        (residence) => residence.Type === "Hotel"
      );

      // Set the filtered residences to state
      setResidences(hotels);
    } catch (error) {
      console.error(error);
    }
  };

  const getHostels = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/residences/getallresidences",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        }
      );
      const residenceData = await response.json();

      // Filter out residences with Type set to "Hostel"
      const hostels = residenceData.filter(
        (residence) => residence.Type === "Hostel"
      );

      // Set the filtered residences to state
      setResidences(hostels);
    } catch (error) {
      console.error(error);
    }
  };

  const getHouses = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/residences/getallresidences",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        }
      );
      const residenceData = await response.json();

      // Filter out residences with Type set to "House"
      const houses = residenceData.filter(
        (residence) => residence.Type === "House"
      );

      // Set the filtered residences to state
      setResidences(houses);
    } catch (error) {
      console.error(error);
    }
  };

  const getResidenceDetails = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/residences/getresidence/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        }
      );
      const residenceDetails = await response.json();
      setResidence(residenceDetails.residence);

    } catch (error) {
      console.error(error);
    }
  };

  const updateResidence = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/residences/updateresidence/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify(residence),
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
      console.error("Error creating the residence:", error);
      showAlert(`Error registering user: ${error}`, "danger");
    }

  };

  const deleteResidence = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/residences/deleteresidence/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        }
      );
      const res = await response.json();
      setResidence(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BookingContext.Provider
      value={{
        residence,
        residences,
        getHotels,
        getHouses,
        getHostels,
        setResidence,
        getResidences,
        deleteResidence,
        updateResidence,
        getResidenceDetails,
      }}
    >
      {props.children}
    </BookingContext.Provider>
  );
};

export default BookingState;
