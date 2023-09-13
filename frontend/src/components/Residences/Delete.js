import React, { useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AlertContext from "../../context/alerts/AlertContext";
import ResidenceContext from "../../context/residences/ResidenceContext";

const Delete = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const { showAlert } = useContext(AlertContext);
  const { residence, getResidenceDetails, deleteResidence } =
    useContext(ResidenceContext);

  useEffect(() => {
    getResidenceDetails(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);

  const handleDelete = async () => {
    deleteResidence(id);
    showAlert(residence.Type +`${" "} Deleted successfully`, "success");
    navigate(`/`+ residence.Type);
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold mb-3">
        <span className="text-muted fw-light">
          {" "}
          Dashboard / {residence.Type}s{" "}
        </span>{" "}
        / Delete {residence.Type}
      </h4>

      <div className="card">
        <div className="card-header d-flex">
          <h5 className="mx-auto my-3">
            <strong className="text-danger">
              Are you Sure You want to Delete this {residence.Type}?
            </strong>
          </h5>
        </div>
        <div className="card-body">
          <form>
            <div className="row">
              <div className="col-md-5">
                {/* Name */}
                <h5 className="d-flex justify-content-center">
                  <strong>{residence.Name}</strong>
                </h5>

                {/* Photo */}
                <div className="d-flex justify-content-center align-items-sm-center m-5">
                  <img
                    src="/assets/img/buildings/Hotel/Hotel-1.png"
                    alt="building-img"
                    className="d-block rounded"
                    height="250"
                    width="250"
                    id="residence-pic"
                  />
                </div>

                {/* Buttons */}
                <div className="d-flex btn-group mx-4">
                  <button className="btn btn-danger" onClick={handleDelete}>
                    <span className="tf-icons bx bx-trash"></span>&nbsp;Delete
                  </button>

                  <Link
                    to={`/${residence.Type}`}
                    className="btn btn-outline-secondary"
                  >
                    <span className="tf-icons bx bx-right-arrow-alt"></span>
                    &nbsp;Back
                  </Link>
                </div>
              </div>

              <div className="col-md-7 border border-3 border-top-0 rounded-bottom">
                {/* About Section */}
                <div className="text-muted fw-light">
                  About
                  <hr />
                </div>

                <div className="mb-3">
                  {/* Basic Information */}
                  <div className="fw-bold">Basic Information</div>
                  <div className="row">
                    <div className="col-sm-3">Owner:</div>
                    <div className="col-sm-9">{residence.Owner}</div>

                    <div className="col-sm-3">Type:</div>
                    <div className="col-sm-9">{residence.Type}</div>

                    <div className="col-sm-3">Rooms:</div>
                    <div className="col-sm-9">{residence.Rooms}</div>

                    <div className="col-sm-3">Shared:</div>
                    <div className="col-sm-9">{residence.Shared}</div>

                    <div className="col-sm-3">Price {residence.PriceType}:</div>
                    <div className="col-sm-9">Rs.{residence.Price}</div>

                    <div className="col-sm-3">Facilities:</div>

                    <div className="col-sm-3">
                      <i className="residence.Facilities[i].Icon"></i>
                      &nbsp;residence.Facilities[i].Name
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="fw-bold mt-2">Contact Information</div>
                  <div className="row">
                    <div className="col-sm-3">Phone no:</div>
                    <div className="col-sm-9 mb-1">{residence.Phoneno}</div>

                    <div className="col-sm-3">Email:</div>
                    <div className="col-sm-9 mb-1">{residence.Email}</div>

                    <div className="col-sm-3">Location:</div>
                    <div className="col-sm-9 mb-1">{residence.Location}</div>
                  </div>

                  <div className="row">
                    {/* Description */}
                    <div className="col-sm-4 fw-bold mt-2">Description</div>
                    <div className="col-sm-8"></div>

                    <div className="col-sm-3"></div>
                    <div className="col-sm-9">
                      {residence.Description
                        ? residence.Description
                        : "No Description provided."}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Delete;
