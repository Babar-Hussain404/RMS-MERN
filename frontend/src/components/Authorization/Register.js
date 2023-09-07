import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div classname="container-xxl">
      <div classname="authentication-wrapper authentication-basic container-p-y">
        <div classname="authentication-inner">
          <partial name="_Alerts" />

          {/*  Register Card */}
          <div classname="card">
            <div classname="card-body">
              {/*  Logo */}
              <partial name="_Logo" />
              {/*  /Logo */}

              <h4 classname="mb-2">Adventure starts here 🚀</h4>
              <p classname="mb-4">
                Book or Advertise your Residence easily and Quickly!
              </p>

              <form
                id="formAuthentication"
                classname="mb-3"
                method="post"
                enctype="multipart/form-data"
                asp-controller="Users"
                asp-action="Register"
              >
                <div classname="row">
                  <div
                    asp-validation-summary="ModelOnly"
                    classname="text-danger"
                  ></div>

                  {/* First Name*/}
                  <div classname="col-md-12 col-lg-6 mb-3">
                    <label asp-for="FName" classname="form-label"></label>
                    <input
                      asp-for="FName"
                      classname="form-control"
                      id="FName"
                      name="FName"
                      value="John"
                      placeholder="Enter First Name"
                      required
                      autofocus
                    />
                    <span asp-validation-for="FName" classname="text-danger"></span>
                  </div>

                  {/* Last Name*/}
                  <div classname="col-md-12 col-lg-6 mb-3">
                    <label asp-for="LName" classname="form-label"></label>
                    <input
                      asp-for="LName"
                      classname="form-control"
                      id="LName"
                      name="LName"
                      value="Doe"
                      placeholder="Enter Last Name"
                      required
                    />
                    <span asp-validation-for="LName" classname="text-danger"></span>
                  </div>

                  {/* Email*/}
                  <div classname="mb-3">
                    <label asp-for="Email" classname="form-label"></label>
                    <input
                      asp-for="Email"
                      classname="form-control"
                      id="Email"
                      name="Email"
                      placeholder="Enter your email"
                    />
                    <span asp-validation-for="Email" classname="text-danger"></span>
                  </div>

                  {/* Password*/}
                  <div classname="mb-3 form-password-toggle">
                    <label classname="form-label" asp-for="Password"></label>
                    <div classname="input-group input-group-merge">
                      <input
                        asp-for="Password"
                        id="Password"
                        classname="form-control"
                        name="Password"
                        value="pass999"
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                        aria-describedby="password"
                      />
                      <span classname="input-group-text cursor-pointer">
                        <i classname="bx bx-hide"></i>
                      </span>
                      <span
                        asp-validation-for="Password"
                        classname="text-danger"
                      ></span>
                    </div>
                    <p classname="form-text">
                      Must contain atleast one letter and one digit.
                    </p>
                  </div>

                  {/* Date Of Birth*/}
                  <div classname="col-md-12 col-lg-6 mb-3">
                    <label asp-for="DOB" classname="form-label"></label>
                    <input
                      asp-for="DOB"
                      classname="form-control"
                      type="date"
                      name="DOB"
                    />
                    <span asp-validation-for="DOB" classname="text-danger"></span>
                  </div>

                  {/* Gender*/}
                  <div classname="col-md-12 col-lg-6 mb-3">
                    <label asp-for="Gender" classname="form-label"></label>
                    <select
                      classname="form-select"
                      id="Gender"
                      aria-label="Default select example"
                      name="Gender"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option selected value="Other">
                        Other
                      </option>
                    </select>
                  </div>

                  {/* CNIC*/}
                  <div classname="col-md-12 col-lg-6 mb-3">
                    <label asp-for="CNIC" classname="form-label"></label>
                    <input
                      asp-for="CNIC"
                      classname="form-control"
                      id="CNIC"
                      name="CNIC"
                      value="12345-1234567-1"
                      placeholder="12345-1234567-1"
                    />
                    <span asp-validation-for="CNIC" classname="text-danger"></span>
                    <p classname="form-text">
                      Follow this pattern (xxxxx-xxxxxx-x)
                    </p>
                  </div>

                  {/* UserType*/}
                  <div classname="col-md-12 col-lg-6 mb-3">
                    <label asp-for="UserType" classname="form-label"></label>
                    <select
                      classname="form-select"
                      id="name="
                      aria-label="Default select example"
                      name="UserType"
                    >
                      <option value="Admin">Admin</option>
                      <option value="Owner">Owner</option>
                      <option selected value="Customer">
                        Customer
                      </option>
                    </select>
                  </div>

                  {/* Phone No*/}
                  <div classname="mb-3">
                    <label classname="form-label" asp-for="Phoneno"></label>
                    <div classname="input-group input-group-merge">
                      <span
                        id="basic-icon-default-phone2"
                        classname="input-group-text"
                      >
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
                    <span
                      asp-validation-for="Phoneno"
                      classname="text-danger"
                    ></span>
                  </div>

                  {/* Location*/}
                  <div classname="mb-3">
                    <label classname="form-label" asp-for="Address"></label>
                    <div classname="input-group input-group-merge">
                      <span id="basic-icon-map-pin" classname="input-group-text">
                        <i classname="bx bxs-map-pin"></i>
                      </span>
                      <input
                        asp-for="Address"
                        classname="form-control"
                        id="basic-icon-location"
                        value="Township, Lahore, Pakistan."
                        placeholder="Township, Lahore, Pakistan."
                        aria-label="Pk Resorts"
                        aria-describedby="basic-icon-location"
                      />
                    </div>
                    <span
                      asp-validation-for="Address"
                      classname="text-danger"
                    ></span>
                  </div>

                  {/* Profile picture*/}
                  <div classname="mb-3">
                    <label asp-for="ProfilePic" classname="form-label"></label>
                    <input
                      asp-for="ProfilePic"
                      type="file"
                      classname="form-control"
                      id="ProfilePic"
                    />
                    <span
                      asp-validation-for="ProfilePic"
                      classname="text-danger"
                    ></span>
                    <p classname="form-text">
                      Allowed JPG, GIF or PNG. Max size of 800K
                    </p>
                  </div>

                  {/* Terms And Conditions*/}
                  <div classname="mb-3">
                    <div classname="form-check">
                      <input
                        classname="form-check-input"
                        type="checkbox"
                        id="terms-conditions"
                        asp-for="TermsAndConditions"
                      />
                      <label
                        classname="form-check-label"
                        asp-for="TermsAndConditions"
                      >
                        I agree to{" "}
                        <a asp-action="PrivacyPolicy" asp-controller="Home">
                          privacy policy & terms
                        </a>
                      </label>
                      <br />
                      <span
                        asp-validation-for="TermsAndConditions"
                        classname="text-danger"
                      ></span>
                    </div>
                  </div>

                  <button type="submit" classname="btn btn-primary d-grid w-100">
                    Register
                  </button>
                </div>
              </form>

              <p classname="text-center">
                <span>Already have an account?</span>
                <Link to='/login'>
                  <span>Login in instead</span>
                </Link>
              </p>
            </div>
          </div>
          {/*  Register Card */}
        </div>
      </div>
    </div>
  );
};

export default Register;
