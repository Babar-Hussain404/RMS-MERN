import React from "react";

const Delete = () => {
  return (
    <div classname="container-xxl flex-grow-1 container-p-y">
      <h4 classname="fw-bold mb-3">
        <span classname="text-muted fw-light"> Dashboard / @(Model.Type)s </span> /
        Delete @Model.Type
      </h4>

      <div classname="card">
        <div classname="card-header d-flex">
          <h5 classname="mx-auto my-3">
            <strong classname="text-danger">
              Are you Sure You want to Delete this @Model.Type?
            </strong>
          </h5>
        </div>
        <div classname="card-body">
          <form>
            <div classname="row">
              <div classname="col-md-5">
                {/* Name*/}
                <h5 classname="d-flex justify-content-center">
                  <strong>@Model.Name</strong>
                </h5>

                {/* Photo*/}
                <div classname="d-flex justify-content-center align-items-sm-center m-5">
                  <img
                    src="/assets/img/buildings/Hotel/Hotel-1.png"
                    alt="building-img"
                    classname="d-block rounded"
                    height="250"
                    width="250"
                    id="residence-pic"
                  />
                </div>

                {/* Buttons*/}
                <div classname="d-flex btn-group mx-4">
                  <a
                    classname="btn btn-danger"
                    href="/Residences/DeleteConfirm?Id=@Model.Id"
                  >
                    <span classname="tf-icons bx bx-trash"></span>&nbsp;Delete
                  </a>
                  <a
                    asp-controller="Residences"
                    asp-action="@Model.Type"
                    classname="btn btn-outline-secondary"
                  >
                    <span classname="tf-icons bx bx-right-arrow-alt"></span>
                    &nbsp;Back
                  </a>
                </div>
              </div>

              <div classname="col-md-7 border border-3 border-top-0 rounded-bottom">
                {/* About Section*/}
                <div classname="text-muted fw-light">
                  About
                  <hr />
                </div>

                <div classname="mb-3">
                  {/* Basic Information*/}
                  <div classname="fw-bold">Basic Information</div>
                  <div classname="row">
                    <div classname="col-sm-3">Owner:</div>
                    <div classname="col-sm-9">@Model.Owner</div>

                    <div classname="col-sm-3">Type:</div>
                    <div classname="col-sm-9">@Model.Type</div>

                    <div classname="col-sm-3">Rooms:</div>
                    <div classname="col-sm-9">@Model.Rooms</div>

                    <div classname="col-sm-3">Shared:</div>
                    <div classname="col-sm-9">@Model.Shared</div>

                    <div classname="col-sm-3">Price/Day:</div>
                    <div classname="col-sm-9">Rs.@Model.Price</div>

                    <div classname="col-sm-3">Facilities:</div>

                    <div classname="col-sm-9">
                      Residence Owner has not provided with any Facilities.
                    </div>
                  </div>

                  {/* Contact Information*/}
                  <div classname="fw-bold mt-2">Contact Information</div>
                  <div classname="row">
                    <div classname="col-sm-3">Phone no:</div>
                    <div classname="col-sm-9 mb-1">@Model.Phoneno</div>

                    <div classname="col-sm-3">Email:</div>
                    <div classname="col-sm-9 mb-1">@Model.Email</div>

                    <div classname="col-sm-3">Location:</div>
                    <div classname="col-sm-9 mb-1">@Model.Location</div>
                  </div>

                  <div classname="row">
                    {/* Description*/}
                    <div classname="col-sm-4 fw-bold mt-2">Description</div>
                    <div classname="col-sm-8"></div>

                    <div classname="col-sm-3"></div>
                    <div classname="col-sm-9">
                      <p>No Description Provided.</p>
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
