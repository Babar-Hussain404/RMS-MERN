import React from "react";

const Profile = () => {
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold mb-3">
        <span className="text-muted fw-light">Dashboard /</span> Profile
      </h4>

      <partial name="_Alerts" />

      <div className="card">
        <div className="card-header d-flex">
          <h5 className="mx-auto my-1">
            <strong className="display-6">My Profile</strong>
          </h5>
        </div>

        <div className="card-body">
          <form>
            <div className="row">
              <div className="col-md-5">
                {/* User Type */}
                <h5 className="d-flex justify-content-center text-primary">
                  <strong className="display-6">@Model.UserType</strong>
                </h5>

                {/* Photo */}
                <div className="d-flex justify-content-center align-items-sm-center m-4">
                  <img
                    src="/assets/img/avatars/1.png"
                    alt="User-Image"
                    className="d-block rounded"
                    height="250"
                    width="250"
                    id="User-pic"
                  />
                </div>

                {/* Buttons */}
                <div className="d-flex justify-content-around mb-2">
                  <a
                    asp-controller="Users"
                    asp-action="Update"
                    className="btn btn-info"
                  >
                    <span className="tf-icons bx bxs-edit"></span>&nbsp;Update
                  </a>
                </div>
              </div>

              <div className="col-md-7 my-3 border border-3 border-top-0 rounded-bottom">
                {/* About Section */}
                <div className="text-muted fw-light">
                  About
                  <hr />
                </div>

                <div className="mb-3">
                  {/* Basic Information */}
                  <div className="fw-bold">Basic Information</div>
                  <div className="row">
                    <div className="col-sm-3">First Name:</div>
                    <div className="col-sm-9">@Model.FName</div>

                    <div className="col-sm-3">Last Name:</div>
                    <div className="col-sm-9">@Model.LName</div>

                    <div className="col-sm-3">Gender:</div>
                    <div className="col-sm-9">@Model.Gender</div>

                    <div className="col-sm-3">CNIC:</div>
                    <div className="col-sm-9">@Model.CNIC</div>
                  </div>

                  {/* Contact Information */}
                  <div className="fw-bold mt-2">Contact Information</div>
                  <div className="row">
                    <div className="col-sm-3">Phone no:</div>
                    <div className="col-sm-9 mb-1">@Model.Phoneno</div>

                    <div className="col-sm-3">Email:</div>
                    <div className="col-sm-9 mb-1">@Model.Email</div>

                    <div className="col-sm-3">Address:</div>
                    <div className="col-sm-9 mb-1">@Model.Address</div>
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

export default Profile;