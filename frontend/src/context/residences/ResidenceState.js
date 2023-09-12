import React, { useState } from "react";
import ResidenceContext from "./ResidenceContext";

const ResidenceState = (props) => {
  const [residences, setResidences] = useState([]);

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
      const hotels = residenceData.filter((residence) => residence.Type === "Hotel");
  
      // Set the filtered residences to state
      setResidences(hotels);
      console.log("Hotels are displayed.")

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
      const hostels = residenceData.filter((residence) => residence.Type === "Hostel");
  
      // Set the filtered residences to state
      setResidences(hostels);
      console.log("Hostels are displayed.")
      
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
      const houses = residenceData.filter((residence) => residence.Type === "House");
  
      // Set the filtered residences to state
      setResidences(houses);
      console.log("Houses are displayed.")
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ResidenceContext.Provider
      value={{ residences, getResidences, getHotels, getHostels, getHouses }}
    >
      {props.children}
    </ResidenceContext.Provider>
  );
};

export default ResidenceState;
