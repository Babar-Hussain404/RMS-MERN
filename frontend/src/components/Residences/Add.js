import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AlertContext from "../../context/alerts/AlertContext";
import ResidenceContext from "../../context/residences/ResidenceContext";

const Add = () => {
  const navigate = useNavigate();
  const { showAlert } = useContext(AlertContext);
  const { facilities, getFacilities } = useContext(ResidenceContext);

  useEffect(() => {
    getFacilities();
  }, []);

  const [formData, setFormData] = useState({
    Name: "H1",
    Owner: "Please do nothing 3",
    Type: "House",
    Rooms: 3,
    Shared: "Yes",
    Price: 3000,
    PriceType: "/Day",
    Location: "Test Location 3",
    Email: "test3@example.com",
    Phoneno: "12345678901",
    ResidencePic: "",
    Facilities: [
      { Name: 'TV', Icon: 'bx bx-tv', IsSelected: true },
      { Name: 'Wifi', Icon: 'bx bx-wifi', IsSelected: true },
    ]
  });

  const handleChange = async (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const selectedFile = files[0];
      const base64String = await convertFileToBase64(selectedFile);
      setFormData({
        ...formData,
        [name]: base64String,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]); // Get rid of the data:image/...;base64,
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:5000/api/residences/addresidence",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify(formData),
        }
      );
      console.log(response);
      const data = await response.json();

      if (response.ok) {
        console.log(data);
        navigate("/" + formData.Type);
        showAlert("Residence Created Successfully", "success");
      } else {
        showAlert(`HTTP error! status: ${response.status}`, "danger");
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error creating the residence:", error);
      showAlert(`Error registering user: ${error}`, "danger");
    }
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold mb-3">
        <span className="text-muted fw-light">Residences /</span> Add Residence
      </h4>

      <div className="card">
        <div className="card-header d-flex">
          <h5 className="mx-auto my-3">
            <strong> ADD NEW RESIDENCE </strong>
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
                    value={formData.Name}
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
                    value={formData.Owner}
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
                    value={formData.Type}
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
                    value={formData.Shared}
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
                    value={formData.Rooms}
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
                    value={formData.Location}
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
                    value={formData.Price}
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
                    value={formData.PriceType}
                    onChange={handleChange}
                  >
                    <option value="/Month">Per Month</option>
                    <option value="/Day">Per Day</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Facilities */}
            <label
              className="form-label"
              htmlFor="Facilities"
            >
              Select Facilities
            </label>
            <div className="row">
              {facilities.map((facility) => (
                <div key={facility._id} className="col-md-4">
                  <div className="mb-3">
                    <div className="form-check form-switch mb-2">
                      <input
                        className="form-check-input check"
                        type="checkbox"
                        name={`${facility.Name}`}
                        value={`${formData.Facilities.IsSelected}`}
                        onChange={handleChange}
                        id={`Facility_${facility._id}`}
                      />
                      <label
                        className="form-check-label btn btn-outline-primary w-100 text-start"
                        htmlFor={`Facility_${facility._id}`}
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
                    value={formData.Email}
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
                    value={formData.Phoneno}
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
                  value={formData.Description}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            {/* Select Residence Image */}
            <div className="mb-3">
              <label htmlFor="ResidencePic" className="form-label">
                Select Residence Image
              </label>
              <input
                className="form-control"
                type="file"
                htmlFor="ResidencePic"
                name="ResidencePic"
                onChange={handleChange}
              />
            </div>

            {/* Buttons */}
            <div className="row justify-content-center">
              <div className="col-md-6 btn-group my-3">
                <button type="submit" className="btn btn-primary">
                  <span className="tf-icons bx bx-add-to-queue"></span>&nbsp;Add
                </button>

                <Link
                  to={`/${formData.Type}`}
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

export default Add;
