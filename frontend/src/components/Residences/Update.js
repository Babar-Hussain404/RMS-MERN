import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import ResidenceContext from "../../context/residences/ResidenceContext";

const Update = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const { residence, setResidence, updateResidence, getResidenceDetails } =
    useContext(ResidenceContext);
    const [selectedFacilities, setSelectedFacilities] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResidence({
      ...residence,
      [name]: value,
    });
  };

  const handleFacilityChange = (index) => {
    const updatedFacilities = [...residence.Facilities];
    updatedFacilities[index].IsSelected = !updatedFacilities[index].IsSelected;
    setSelectedFacilities(updatedFacilities);
    console.log(updatedFacilities);
  };

  useEffect(() => {
    getResidenceDetails(id);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateResidence(id);
    navigate("/" + residence.Type);
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold mb-3">
        <span className="text-muted fw-light">
          Dashboard / {residence.Type}s
        </span>
        / Edit {residence.Type}
      </h4>

      <div className="card">
        <div className="card-header d-flex">
          <h5 className="mx-auto my-3 text-upper">
            <strong> Edit {residence.Type} </strong>
          </h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              {/* Residence Name */}
              <div className="col-md-6 mb-3">
                <label className="form-label" htmlFor="Name">
                  Residence Name
                </label>
                <div className="input-group input-group-merge">
                  <span
                    id="basic-icon-residence-name"
                    className="input-group-text"
                  >
                    <i className="bx bx-building"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="basic-icon-default-fullname"
                    placeholder="Residence Name"
                    aria-label="Residence Name"
                    aria-describedby="basic-icon-default-residence-name"
                    htmlFor="Name"
                    name="Name"
                    value={residence.Name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Owner Name */}
              <div className="col-md-6 mb-3">
                <label className="form-label" htmlFor="Owner">
                  Owner Name
                </label>
                <div className="input-group input-group-merge">
                  <span
                    id="basic-icon-residence-owner-name"
                    className="input-group-text"
                  >
                    <i className="bx bx-user"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="basic-icon-residence-owner-name"
                    placeholder="Owner Name"
                    aria-label="Owner Name"
                    aria-describedby="basic-icon-default-residence-Owner-name"
                    htmlFor="Owner"
                    name="Owner"
                    value={residence.Owner}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Type */}
              <div className="col-md-6 mb-3">
                <label htmlFor="Type" className="form-label">
                  Type
                </label>
                <div className="input-group input-group-merge">
                  <span
                    id="basic-icon-residence-owner-name"
                    className="input-group-text"
                  >
                    <i className="bx bx-slider"></i>
                  </span>
                  <select
                    className="form-select"
                    aria-label="Select Residence Type"
                    htmlFor="Type"
                    name="Type"
                    value={residence.Type}
                    onChange={handleChange}
                  >
                    <option value="Hotel">Hotel</option>
                    <option value="Hostel">Hostel</option>
                    <option value="House">House</option>
                  </select>
                </div>
              </div>

              {/* Shared */}
              <div className="col-md-3 mb-3">
                <label htmlFor="Shared" className="form-label">
                  Shared
                </label>
                <div className="input-group input-group-merge">
                  <span
                    id="basic-icon-residence-owner-name"
                    className="input-group-text"
                  >
                    <i className="bx bx-group"></i>
                  </span>
                  <select
                    className="form-select"
                    aria-label="Select Residence Type"
                    htmlFor="Shared"
                    name="Shared"
                    value={residence.Shared}
                    onChange={handleChange}
                  >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>
              </div>

              {/* Rooms */}
              <div className="col-md-3 mb-3">
                <label className="form-label" htmlFor="Rooms">
                  Rooms
                </label>
                <div className="input-group input-group-merge">
                  <span
                    id="basic-icon-residence-rooms"
                    className="input-group-text"
                  >
                    <i className="bx bx-minus-front"></i>
                  </span>
                  <input
                    type="number"
                    className="form-control"
                    id="Rooms"
                    placeholder="Rooms"
                    aria-label="Rooms"
                    aria-describedby="basic-icon-residence-rooms"
                    htmlFor="Rooms"
                    name="Rooms"
                    value={residence.Rooms}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Location */}
              <div className="col-md-6 mb-3">
                <label className="form-label" htmlFor="Location">
                  Location
                </label>
                <div className="input-group input-group-merge">
                  <span id="basic-icon-map-pin" className="input-group-text">
                    <i className="bx bxs-map-pin"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="basic-icon-location"
                    placeholder="Location"
                    aria-label="Location"
                    aria-describedby="basic-icon-location"
                    htmlFor="Location"
                    name="Location"
                    value={residence.Location}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Price */}
              <div className="col-md-3 mb-3">
                <label className="form-label" htmlFor="Price">
                  Price
                </label>
                <div className="input-group input-group-merge">
                  <span
                    id="basic-icon-residence-Price"
                    className="input-group-text"
                  >
                    <i className="bx bx-wallet"></i>
                  </span>
                  <input
                    type="number"
                    className="form-control"
                    id="Price"
                    placeholder="Price"
                    aria-label="Price"
                    aria-describedby="basic-icon-residence-Price"
                    htmlFor="Price"
                    name="Price"
                    value={residence.Price}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Price Type */}
              <div className="col-md-3 mb-3">
                <label htmlFor="PriceType" className="form-label">
                  Price Type
                </label>
                <div className="input-group input-group-merge">
                  <span
                    id="basic-icon-residence-owner-name"
                    className="input-group-text"
                  >
                    <i className="bx bx-time"></i>
                  </span>
                  <select
                    className="form-select"
                    aria-label="Select Price Type"
                    htmlFor="PriceType"
                    name="PriceType"
                    value={residence.PriceType}
                    onChange={handleChange}
                  >
                    <option value="/Month">Per Month</option>
                    <option value="/Day">Per Day</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Facilities */}
            <label className="form-label" htmlFor="Facilities">
              Select Facilities
            </label>
            <div className="row">
              {residence.Facilities.map((facility, index) => (
                <div key={index} className="col-md-4">
                  <div className="mb-3">
                    <div className="form-check form-switch mb-2">
                      <input
                        className="form-check-input check"
                        type="checkbox"
                        checked={facility.IsSelected}
                        onChange={() => handleFacilityChange(index)}
                        id={`${index}`}
                      />
                      <label
                        className="form-check-label btn btn-outline-primary w-100 text-start"
                        htmlFor={`${index}`}
                      >
                        <i className={`${facility.Icon}`}></i>
                        &nbsp;{facility.Name}
                      </label>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="row">
              {/* Email */}
              <div className="col-md-6 mb-3">
                <label className="form-label" htmlFor="Email">
                  Email
                </label>
                <div className="input-group input-group-merge">
                  <span className="input-group-text">
                    <i className="bx bx-envelope"></i>
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    id="basic-icon-default-email"
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="basic-icon-default-email"
                    htmlFor="Email"
                    name="Email"
                    value={residence.Email}
                    onChange={handleChange}
                  />
                  <span
                    id="basic-icon-default-email"
                    className="input-group-text"
                  ></span>
                </div>
                <div className="form-text">
                  You can use letters, numbers & periods
                </div>
              </div>

              {/* Phone No */}
              <div className="col-md-6 mb-3">
                <label className="form-label" htmlFor="Phoneno">
                  Phone No
                </label>
                <div className="input-group input-group-merge">
                  <span
                    id="basic-icon-default-phone2"
                    className="input-group-text"
                  >
                    <i className="bx bx-phone"></i>
                  </span>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone No"
                    aria-label="Phone No"
                    aria-describedby="basic-icon-default-phone2"
                    htmlFor="Phoneno"
                    name="Phoneno"
                    value={residence.Phoneno}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-text">Phone no must be 11 digits.</div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-3">
              <label className="form-label" htmlFor="Description">
                Description
              </label>
              <div className="input-group input-group-merge">
                <span
                  id="basic-icon-default-message2"
                  className="input-group-text"
                >
                  <i className="bx bxs-detail"></i>
                </span>
                <textarea
                  id="Description"
                  className="form-control"
                  placeholder="Write about your Residence..."
                  aria-label="Write about your Residence..."
                  aria-describedby="basic-icon-default-description"
                  htmlFor="Description"
                  name="Description"
                  value={residence.Description}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            {/* Select Residence Image */}
            <div className="mb-3">
              <label htmlFor="ResidenceImage" className="form-label">
                Select Residence Image
              </label>
              <input
                className="form-control"
                type="file"
                htmlFor="ResidenceImage"
                name="ResidenceImage"
                onChange={handleChange}
              />
            </div>

            {/* Buttons */}
            <div className="row justify-content-center">
              <div className="col-md-6 btn-group my-3">
                <button type="submit" className="btn btn-primary">
                  <span className="tf-icons bx bx-edit-alt"></span>&nbsp;Edit
                </button>

                <Link
                  to={`/${residence.Type}`}
                  className="btn btn-outline-secondary w-25"
                >
                  <span className="tf-icons bx bx-right-arrow-alt"></span>
                  &nbsp;Back
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
