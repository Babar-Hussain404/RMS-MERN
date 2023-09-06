import React from "react";

const Add = () => {
  return (
    <div class="container-xxl flex-grow-1 container-p-y">
      <h4 class="fw-bold mb-3">
        <span class="text-muted fw-light">Residences /</span> Add Residence
      </h4>

      <div class="card">
        <div class="card-header d-flex">
          <h5 class="mx-auto my-3">
            <strong> ADD NEW RESIDENCE </strong>
          </h5>
        </div>
        <div class="card-body">
          <form
            asp-action="AddResidence"
            id="sub"
            method="post"
            enctype="multipart/form-data"
          >
            <input type="hidden" asp-for="Id" />

            <div class="row">
              {/*Residence Name*/}
              <div class="col-md-6 mb-3">
                <label class="form-label" asp-for="Name"></label>
                <div class="input-group input-group-merge">
                  <span id="basic-icon-residence-name" class="input-group-text">
                    <i class="bx bx-building"></i>
                  </span>
                  <input
                    asp-for="Name"
                    value="Pk Resorts"
                    class="form-control"
                    id="basic-icon-default-fullname"
                    placeholder="Pk Resorts"
                    aria-label="Pk name"
                    aria-describedby="basic-icon-default-residence-name"
                  />
                </div>
                <span asp-validation-for="Name" class="text-danger"></span>
              </div>

              {/*Owner Name*/}
              <div class="col-md-6 mb-3">
                <label class="form-label" asp-for="Owner"></label>
                <div class="input-group input-group-merge">
                  <span
                    id="basic-icon-residence-owner-name"
                    class="input-group-text"
                  >
                    <i class="bx bx-user"></i>
                  </span>
                  <input
                    asp-for="Owner"
                    value="John doe"
                    class="form-control"
                    id="basic-icon-residence-owner-name"
                    placeholder="John doe"
                    aria-label="John doe"
                    aria-describedby="basic-icon-default-residence-Owner-name"
                  />
                </div>
                <span asp-validation-for="Owner" class="text-danger"></span>
              </div>

              {/*Type*/}
              <div class="col-md-6 mb-3">
                <label asp-for="Type" class="form-label"></label>
                <div class="input-group input-group-merge">
                  <span
                    id="basic-icon-residence-owner-name"
                    class="input-group-text"
                  >
                    <i class="bx bx-slider"></i>
                  </span>
                  <select
                    class="form-select"
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
                <span asp-validation-for="Type" class="text-danger"></span>
              </div>

              {/*Shared*/}
              <div class="col-md-3 mb-3">
                <label asp-for="Shared" class="form-label"></label>
                <div class="input-group input-group-merge">
                  <span
                    id="basic-icon-residence-owner-name"
                    class="input-group-text"
                  >
                    <i class="bx bx-group"></i>
                  </span>
                  <select
                    class="form-select"
                    asp-for="Shared"
                    aria-label="Select Residence Type"
                  >
                    <option selected value="No">
                      No
                    </option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>
                <span asp-validation-for="Shared" class="text-danger"></span>
              </div>

              {/*Rooms*/}
              <div class="col-md-3 mb-3">
                <label class="form-label" asp-for="Rooms"></label>
                <div class="input-group input-group-merge">
                  <span
                    id="basic-icon-residence-rooms"
                    class="input-group-text"
                  >
                    <i class="bx bx-minus-front"></i>
                  </span>
                  <input
                    type="number"
                    value="5"
                    class="form-control"
                    id="Rooms"
                    name="Rooms"
                    placeholder="5"
                    aria-label="5"
                    aria-describedby="basic-icon-residence-rooms"
                  />
                </div>
                <span asp-validation-for="Rooms" class="text-danger"></span>
              </div>

              {/*Location*/}
              <div class="col-md-6 mb-3">
                <label class="form-label" asp-for="Location"></label>
                <div class="input-group input-group-merge">
                  <span id="basic-icon-map-pin" class="input-group-text">
                    <i class="bx bxs-map-pin"></i>
                  </span>
                  <input
                    asp-for="Location"
                    value="Township, Lahore, Pakistan."
                    class="form-control"
                    id="basic-icon-location"
                    placeholder="Township, Lahore, Pakistan."
                    aria-label="Pk Resorts"
                    aria-describedby="basic-icon-location"
                  />
                </div>
                <span asp-validation-for="Location" class="text-danger"></span>
              </div>

              {/*Price*/}
              <div class="col-md-3 mb-3">
                <label class="form-label" asp-for="Price"></label>
                <div class="input-group input-group-merge">
                  <span
                    id="basic-icon-residence-Price"
                    class="input-group-text"
                  >
                    <i class="bx bx-wallet"></i>
                  </span>
                  <input
                    type="number"
                    value="500"
                    class="form-control"
                    id="Price"
                    name="Price"
                    placeholder="Rs. 500"
                    aria-label="Rs. 500"
                    aria-describedby="basic-icon-residence-Price"
                  />
                </div>
                <span asp-validation-for="Price" class="text-danger"></span>
              </div>

              {/*Price Type*/}
              <div class="col-md-3 mb-3">
                <label asp-for="PriceType" class="form-label"></label>
                <div class="input-group input-group-merge">
                  <span
                    id="basic-icon-residence-owner-name"
                    class="input-group-text"
                  >
                    <i class="bx bx-time"></i>
                  </span>
                  <select
                    class="form-select"
                    asp-for="PriceType"
                    aria-label="Select Price Type"
                  >
                    <option selected value="/Month">
                      Per Month
                    </option>
                    <option value="/Day">Per Day</option>
                  </select>
                </div>
                <span asp-validation-for="PriceType" class="text-danger"></span>
              </div>
            </div>

            {/*Facilities*/}
            <div class="mb-3">
              <div class="mb-3">
                <label class="form-label" for="basic-icon-residence-facilities">
                  Select Facilities
                </label>

                <div class="row">
                  <div class="col-md-4">
                    <div class="form-check form-switch mb-2">
                      <input
                        class="form-check-input check"
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
                        class="form-check-label btn btn-outline-primary w-100 text-start"
                        for="Facility_@i"
                      >
                        <i class="@Model.Facilities[i].Icon"></i>
                        &nbsp;@Model.Facilities[i].Name
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              {/*Email*/}
              <div class="col-md-6 mb-3">
                <label class="form-label" asp-for="Email"></label>
                <div class="input-group input-group-merge">
                  <span class="input-group-text">
                    <i class="bx bx-envelope"></i>
                  </span>
                  <input
                    asp-for="Email"
                    value="Pk.Resorts@example.com"
                    id="basic-icon-default-email"
                    class="form-control"
                    placeholder="Pk.Resorts@example.com"
                    aria-label="Pk.Resorts@example.com"
                    aria-describedby="basic-icon-default-email"
                  />
                  <span
                    id="basic-icon-default-email"
                    class="input-group-text"
                  ></span>
                </div>
                <div class="form-text">
                  You can use letters, numbers & periods
                </div>
                <span asp-validation-for="Email" class="text-danger"></span>
              </div>

              {/*Phone No*/}
              <div class="col-md-6 mb-3">
                <label class="form-label" asp-for="Phoneno"></label>
                <div class="input-group input-group-merge">
                  <span id="basic-icon-default-phone2" class="input-group-text">
                    <i class="bx bx-phone"></i>
                  </span>
                  <input
                    asp-for="Phoneno"
                    class="form-control"
                    value="03001234567"
                    placeholder="0300 1234567"
                  />
                </div>
                <div class="form-text">Phone no must be 11 digits.</div>
                <span asp-validation-for="Phoneno" class="text-danger"></span>
              </div>
            </div>

            {/*Description*/}
            <div class="mb-3">
              <label class="form-label" asp-for="Description"></label>
              <div class="input-group input-group-merge">
                <span id="basic-icon-default-message2" class="input-group-text">
                  <i class="bx bxs-detail"></i>
                </span>
                <textarea
                  id="Description"
                  value="something is written about the residence.It is a placeholder."
                  class="form-control"
                  asp-for="Description"
                  placeholder="Write about your Residence..."
                  aria-label="Write about your Residence..."
                  aria-describedby="basic-icon-default-description"
                ></textarea>
              </div>
              <span asp-validation-for="Description" class="text-danger"></span>
            </div>

            {/*Select Residence Image*/}
            <div class="mb-3">
              <label asp-for="ResidenceImage" class="form-label">
                Select Residence Image
              </label>
              <input
                class="form-control"
                type="file"
                asp-for="ResidenceImage"
              />
              <span
                asp-validation-for="ResidenceImage"
                class="text-danger"
              ></span>
            </div>

            {/*Buttons*/}
            <div class="row justify-content-center">
              <div class="col-md-6 btn-group my-3">
                <button type="submit" class="btn btn-primary">
                  <span class="tf-icons bx bx-add-to-queue"></span>&nbsp;Add
                </button>

                <a asp-action="Hostel" class="btn btn-outline-secondary w-25">
                  <span class="tf-icons bx bx-right-arrow-alt"></span>&nbsp;Back
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
