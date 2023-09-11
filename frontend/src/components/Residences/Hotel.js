import React from "react";
import { Link } from "react-router-dom";

const Hotel = () => {
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
          <Link to='/add'
            className="btn btn-primary mx-4"
          >
            <span className="tf-icons bx bx-add-to-queue"></span>&nbsp;Add
            Residence
          </Link>
        </div>
      </div>

      {/*  Cards */}
      <div className="row">

        <div className="col-md-6 col-lg-4 mb-3">
          <div className="card h-100">
            {/* Residence Image*/}
            <img
              className="card-img-top"
              src="/assets/img/buildings/Hotel/Hotel-1.png"
              alt="Hotel-1"
            />

            <div className="card-body">
              {/* Residence info*/}
              <div className="d-flex justify-content-between">
                <h5 className="card-title nameFilter">
                  <span className="tf-icons bx bx-building"></span>
                  &nbsp; Hotel Name
                </h5>
                <span className="card-text">
                  <span className="tf-icons bx bx-wallet"></span>
                  &nbsp;Rs.100/Day
                </span>
              </div>
              <p className="card-text locationFilter">
                <span className="tf-icons bx bxs-map-pin"></span>
                &nbsp;Hotel Location
              </p>

              {/* Residence Modification Buttons*/}
              <div className="btn-group" role="group">
                {/*  Details Button */}
                <Link
                  className="btn btn-outline-info"
                  to='/detail'
                >
                  <span className="tf-icons bx bx-detail"></span>&nbsp;Details
                </Link>

                {/*  Edit Button */}
                <Link
                  className="btn btn-outline-warning"
                  to='/edit'
                >
                  <span className="tf-icons bx bx-edit-alt"></span>&nbsp;Edit
                </Link>

                {/*  Delete Button */}
                <Link
                  className="btn btn-outline-danger"
                  to='/delete'
                >
                  <span className="tf-icons bx bx-trash"></span>&nbsp;Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
