import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import AlertContext from "../../context/alerts/AlertContext";
import ResidenceContext from "../../context/residences/ResidenceContext";
import Residence from "./Residence";
import UserContext from "../../context/user/UserContext";

const Hotel = () => {
  const { residences, getHotels } = useContext(ResidenceContext);
  const { showAlert } = useContext(AlertContext);
  const navigate = useNavigate();
  const { user, getUser } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getHotels();
    } else {
      navigate("/login");
      showAlert(`Please login to view residences`, "info");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createBooking = async (id) => {
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
      if (data.type === "error") {
        showAlert(data.message, "error");
      }
      if (data.type === "success") {
        showAlert(data.message, "success");
        navigate("/bookinglist");
      }
      
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
            Hotels
          </h4>
        </div>

        <div className="col-md-3">
        {user.UserType !== "Customer" ? (
                <Link to="/add" className="btn btn-primary mx-4">
                <span className="tf-icons bx bx-add-to-queue"></span>&nbsp;Add
                Residence
              </Link>
              ) : (
                ""
              )}
        </div>
      </div>

      {/*  Cards */}
      <div className="row">
        {residences.length === 0 && (
          <div className="card p-2">
            No Hotels available at the moment. Please check back later.
          </div>
        )}
        {residences.map((residence) => (
  <Residence
    residence={residence}
    key={residence._id}
    createBooking={createBooking}
  />
))}

      </div>
    </div>
  );
};

export default Hotel;
