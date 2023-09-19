import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import AlertContext from "../../context/alerts/AlertContext";
import ResidenceContext from "../../context/residences/ResidenceContext";
import Residence from "./Residence";

const Hostel = () => {
  const { residences, getHostels } = useContext(ResidenceContext);
  const { showAlert } = useContext(AlertContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getHostels();
    } else {
      navigate("/login");
      showAlert(`Please login to view residences`, "info");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createbooking = async (id) => {
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

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="row d-flex justify-content-between">
        <div className="col-md-3">
          <h4 className="fw-bold py-2 mb-4">
            <span className="text-muted fw-light">Dashboard /</span>
            Hostels
          </h4>
        </div>

        <div className="col-md-3">
          <Link to="/add" className="btn btn-primary mx-4">
            <span className="tf-icons bx bx-add-to-queue"></span>&nbsp;Add
            Residence
          </Link>
        </div>
      </div>

      {/*  Cards */}
      <div className="row">
        {residences.length === 0 && (
          <div className="card p-2">
            No Hostels available at the mments.Please check back later.
          </div>
        )}
        {residences.map(
          (residence) =>(
            <Residence residence={residence} key={residence._id} createbooking={createbooking}/>
            )
        )}
      </div>
    </div>
  );
};

export default Hostel;
