import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import UserContext from "../../context/user/UserContext";

const Residence = (props) => {
  const { residence, createBooking } = props;
  const { user, getUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBooking = () => {
    createBooking(residence._id);
    navigate("/bookinglist")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  return (
    <div className="col-md-6 col-lg-4 mb-3">
      <div className="card h-100">
        {/* Residence Image*/}
        <img
          className="card-img-top"
          src={`data:image/png;base64,${residence.ResidencePic}`}
          alt="Hotel-1"
        />

        <div className="card-body">
          {/* Residence info*/}
          <div className="d-flex justify-content-between">
            <h5 className="card-title nameFilter">
              <span className="tf-icons bx bx-building"></span>
              &nbsp; {residence.Name}
            </h5>
            <span className="card-text">
              <span className="tf-icons bx bx-wallet"></span>
              &nbsp;Rs.{residence.Price}
              {residence.PriceType}
            </span>
          </div>
          <p className="card-text locationFilter">
            <span className="tf-icons bx bxs-map-pin"></span>
            &nbsp;{residence.Location}
          </p>

          {/* Residence Modification Buttons*/}
          <div className="btn-group" role="group">
            {/*  Details Button */}
            <Link
              className="btn btn-outline-info"
              to={`/detail/${residence._id}`}
            >
              <span className="tf-icons bx bx-detail"></span>&nbsp;Details
            </Link>
              {user.UserType !== "Customer" ? (
                <>
                  <Link
                    className="btn btn-outline-warning"
                    to={`/update/${residence._id}`}
                  >
                    <span className="tf-icons bx bx-edit-alt"></span>&nbsp;Edit
                  </Link>

                  <Link
                    className="btn btn-outline-danger"
                    to={`/delete/${residence._id}`}
                  >
                    <span className="tf-icons bx bx-trash"></span>&nbsp;Delete
                  </Link>
                </>
              ) : (
                <button
                  className="btn btn-outline-primary"
                  onClick={() => handleBooking()}
                >
                  Book
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Residence;
