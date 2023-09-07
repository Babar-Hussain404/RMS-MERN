import React from "react";

const Add = () => {
  return (
    <div classname="container-xxl flex-grow-1 container-p-y">
      <h4 classname="fw-bold mb-3">
        <span classname="text-muted fw-light">Residences /</span> Add Residence
      </h4>

      <div classname="card">
        <div classname="card-header d-flex">
          <h5 classname="mx-auto my-3">
            <strong> ADD NEW RESIDENCE </strong>
          </h5>
        </div>
        <div classname="card-body">
          <form
            asp-action="AddResidence"
            id="sub"
            method="post"
            enctype="multipart/form-data"
          >
            <input type="hidden" asp-for="Id" />

            <div classname="row">
              {/*Residence Name*/}
              <div classname="col-md-6 mb-3">
                <label classname="form-label" asp-for="Name"></label>
                <div classname="input-group input-group-merge">
                  <span id="basic-icon-residence-name" classname="input-group-text">
                    <i classname="bx bx-building"></i>
                  </span>
                  <input
                    asp-for="Name"
                    value="Pk Resorts"
                    classname="form-control"
                    id="basic-icon-default-fullname"
                    placeholder="Pk Resorts"
                    aria-label="Pk name"
                    aria-describedby="basic-icon-default-residence-name"
                  />
                </div>
                <span asp-validation-for="Name" classname="text-danger"></span>
              </div>

              {/*Owner Name*/}
              <div classname="col-md-6 mb-3">
                <label classname="form-label" asp-for="Owner"></label>
                <div classname="input-group input-group-merge">
                  <span
                    id="basic-icon-residence-owner-name"
                    classname="input-group-text"
                  >
                    <i classname="bx bx-user"></i>
                  </span>
                  <input
                    asp-for="Owner"
                    value="John doe"
                    classname="form-control"
                    id="basic-icon-residence-owner-name"
                    placeholder="John doe"
                    aria-label="John doe"
                    aria-describedby="basic-icon-default-residence-Owner-name"
                  />
                </div>
                <span asp-validation-for="Owner" classname="text-danger"></span>
              </div>

              {/*Type*/}
              <div classname="col-md-6 mb-3">
                <label asp-for="Type" classname="form-label"></label>
                <div classname="input-group input-group-merge">
                  <span
                    id="basic-icon-residence-owner-name"
                    classname="input-group-text"
                  >
                    <i classname="bx bx-slider"></i>
                  </span>
                  <select
                    classname="form-select"
                    asp-for="Type"
                    aria-label="Select Residence Type"
                  >
                    <option selected value="Hotel">
                      Hotel
                    </option>
                    <option value="Hostel">Hostel</option>
                    <option value="House">House</option>
                  </select>
                </div>
                <span asp-validation-for="Type" classname="text-danger"></span>
              </div>

              {/*Shared*/}
              <div classname="col-md-3 mb-3">
                <label asp-for="Shared" classname="form-label"></label>
                <div classname="input-group input-group-merge">
                  <span
                    id="basic-icon-residence-owner-name"
                    classname="input-group-text"
                  >
                    <i classname="bx bx-group"></i>
                  </span>
                  <select
                    classname="form-select"
                    asp-for="Shared"
                    aria-label="Select Residence Type"
                  >
                    <option selected value="No">
                      No
                    </option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>
                <span asp-validation-for="Shared" classname="text-danger"></span>
              </div>

              {/*Rooms*/}
              <div classname="col-md-3 mb-3">
                <label classname="form-label" asp-for="Rooms"></label>
                <div classname="input-group input-group-merge">
                  <span
                    id="basic-icon-residence-rooms"
                    classname="input-group-text"
                  >
                    <i classname="bx bx-minus-front"></i>
                  </span>
                  <input
                    type="number"
                    value="5"
                    classname="form-control"
                    id="Rooms"
                    name="Rooms"
                    placeholder="5"
                    aria-label="5"
                    aria-describedby="basic-icon-residence-rooms"
                  />
                </div>
                <span asp-validation-for="Rooms" classname="text-danger"></span>
              </div>

              {/*Location*/}
              <div classname="col-md-6 mb-3">
                <label classname="form-label" asp-for="Location"></label>
                <div classname="input-group input-group-merge">
                  <span id="basic-icon-map-pin" classname="input-group-text">
                    <i classname="bx bxs-map-pin"></i>
                  </span>
                  <input
                    asp-for="Location"
                    value="Township, Lahore, Pakistan."
                    classname="form-control"
                    id="basic-icon-location"
                    placeholder="Township, Lahore, Pakistan."
                    aria-label="Pk Resorts"
                    aria-describedby="basic-icon-location"
                  />
                </div>
                <span asp-validation-for="Location" classname="text-danger"></span>
              </div>

              {/*Price*/}
              <div classname="col-md-3 mb-3">
                <label classname="form-label" asp-for="Price"></label>
                <div classname="input-group input-group-merge">
                  <span
                    id="basic-icon-residence-Price"
                    classname="input-group-text"
                  >
                    <i classname="bx bx-wallet"></i>
                  </span>
                  <input
                    type="number"
                    value="500"
                    classname="form-control"
                    id="Price"
                    name="Price"
                    placeholder="Rs. 500"
                    aria-label="Rs. 500"
                    aria-describedby="basic-icon-residence-Price"
                  />
                </div>
                <span asp-validation-for="Price" classname="text-danger"></span>
              </div>

              {/*Price Type*/}
              <div classname="col-md-3 mb-3">
                <label asp-for="PriceType" classname="form-label"></label>
                <div classname="input-group input-group-merge">
                  <span
                    id="basic-icon-residence-owner-name"
                    classname="input-group-text"
                  >
                    <i classname="bx bx-time"></i>
                  </span>
                  <select
                    classname="form-select"
                    asp-for="PriceType"
                    aria-label="Select Price Type"
                  >
                    <option selected value="/Month">
                      Per Month
                    </option>
                    <option value="/Day">Per Day</option>
                  </select>
                </div>
                <span asp-validation-for="PriceType" classname="text-danger"></span>
              </div>
            </div>

            {/*Facilities*/}
            <div classname="mb-3">
              <div classname="mb-3">
                <label classname="form-label" for="basic-icon-residence-facilities">
                  Select Facilities
                </label>

                <div classname="row">
                  <div classname="col-md-4">
                    <div classname="form-check form-switch mb-2">
                      <input
                        classname="form-check-input check"
                        type="checkbox"
                        name="Facilities[@i].IsSelected"
                        id="Facility_@i"
                        value="true"
                      />
                      <input
                        type="hidden"
                        asp-for="@Model.Facilities[i].FacilityId"
                      />
                      <input
                        type="text"
                        asp-for="@Model.Facilities[i].Name"
                        value="@Model.Facilities[i].Name"
                        hidden
                      />
                      <input
                        type="text"
                        asp-for="@Model.Facilities[i].Icon"
                        value="@Model.Facilities[i].Icon"
                        hidden
                      />
                      <label
                        classname="form-check-label btn btn-outline-primary w-100 text-start"
                        for="Facility_@i"
                      >
                        <i classname="@Model.Facilities[i].Icon"></i>
                        &nbsp;@Model.Facilities[i].Name
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div classname="row">
              {/*Email*/}
              <div classname="col-md-6 mb-3">
                <label classname="form-label" asp-for="Email"></label>
                <div classname="input-group input-group-merge">
                  <span classname="input-group-text">
                    <i classname="bx bx-envelope"></i>
                  </span>
                  <input
                    asp-for="Email"
                    value="Pk.Resorts@example.com"
                    id="basic-icon-default-email"
                    classname="form-control"
                    placeholder="Pk.Resorts@example.com"
                    aria-label="Pk.Resorts@example.com"
                    aria-describedby="basic-icon-default-email"
                  />
                  <span
                    id="basic-icon-default-email"
                    classname="input-group-text"
                  ></span>
                </div>
                <div classname="form-text">
                  You can use letters, numbers & periods
                </div>
                <span asp-validation-for="Email" classname="text-danger"></span>
              </div>

              {/*Phone No*/}
              <div classname="col-md-6 mb-3">
                <label classname="form-label" asp-for="Phoneno"></label>
                <div classname="input-group input-group-merge">
                  <span id="basic-icon-default-phone2" classname="input-group-text">
                    <i classname="bx bx-phone"></i>
                  </span>
                  <input
                    asp-for="Phoneno"
                    classname="form-control"
                    value="03001234567"
                    placeholder="0300 1234567"
                  />
                </div>
                <div classname="form-text">Phone no must be 11 digits.</div>
                <span asp-validation-for="Phoneno" classname="text-danger"></span>
              </div>
            </div>

            {/*Description*/}
            <div classname="mb-3">
              <label classname="form-label" asp-for="Description"></label>
              <div classname="input-group input-group-merge">
                <span id="basic-icon-default-message2" classname="input-group-text">
                  <i classname="bx bxs-detail"></i>
                </span>
                <textarea
                  id="Description"
                  value="something is written about the residence.It is a placeholder."
                  classname="form-control"
                  asp-for="Description"
                  placeholder="Write about your Residence..."
                  aria-label="Write about your Residence..."
                  aria-describedby="basic-icon-default-description"
                ></textarea>
              </div>
              <span asp-validation-for="Description" classname="text-danger"></span>
            </div>

            {/*Select Residence Image*/}
            <div classname="mb-3">
              <label asp-for="ResidenceImage" classname="form-label">
                Select Residence Image
              </label>
              <input
                classname="form-control"
                type="file"
                asp-for="ResidenceImage"
              />
              <span
                asp-validation-for="ResidenceImage"
                classname="text-danger"
              ></span>
            </div>

            {/*Buttons*/}
            <div classname="row justify-content-center">
              <div classname="col-md-6 btn-group my-3">
                <button type="submit" classname="btn btn-primary">
                  <span classname="tf-icons bx bx-add-to-queue"></span>&nbsp;Add
                </button>

                <a asp-action="Hostel" classname="btn btn-outline-secondary w-25">
                  <span classname="tf-icons bx bx-right-arrow-alt"></span>&nbsp;Back
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
