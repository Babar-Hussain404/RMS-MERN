import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div class="container-xxl">
      <div class="authentication-wrapper authentication-basic container-p-y">
        <div class="authentication-inner">
          <partial name="_Alerts" />

          {/*  Register Card */}
          <div class="card">
            <div class="card-body">
              {/*  Logo */}
              <partial name="_Logo" />
              {/*  /Logo */}

              <h4 class="mb-2">Adventure starts here 🚀</h4>
              <p class="mb-4">
                Book or Advertise your Residence easily and Quickly!
              </p>

              <form
                id="formAuthentication"
                class="mb-3"
                method="post"
                enctype="multipart/form-data"
                asp-controller="Users"
                asp-action="Register"
              >
                <div class="row">
                  <div
                    asp-validation-summary="ModelOnly"
                    class="text-danger"
                  ></div>

                  {/* First Name*/}
                  <div class="col-md-12 col-lg-6 mb-3">
                    <label asp-for="FName" class="form-label"></label>
                    <input
                      asp-for="FName"
                      class="form-control"
                      id="FName"
                      name="FName"
                      value="John"
                      placeholder="Enter First Name"
                      required
                      autofocus
                    />
                    <span asp-validation-for="FName" class="text-danger"></span>
                  </div>

                  {/* Last Name*/}
                  <div class="col-md-12 col-lg-6 mb-3">
                    <label asp-for="LName" class="form-label"></label>
                    <input
                      asp-for="LName"
                      class="form-control"
                      id="LName"
                      name="LName"
                      value="Doe"
                      placeholder="Enter Last Name"
                      required
                    />
                    <span asp-validation-for="LName" class="text-danger"></span>
                  </div>

                  {/* Email*/}
                  <div class="mb-3">
                    <label asp-for="Email" class="form-label"></label>
                    <input
                      asp-for="Email"
                      class="form-control"
                      id="Email"
                      name="Email"
                      placeholder="Enter your email"
                    />
                    <span asp-validation-for="Email" class="text-danger"></span>
                  </div>

                  {/* Password*/}
                  <div class="mb-3 form-password-toggle">
                    <label class="form-label" asp-for="Password"></label>
                    <div class="input-group input-group-merge">
                      <input
                        asp-for="Password"
                        id="Password"
                        class="form-control"
                        name="Password"
                        value="pass999"
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                        aria-describedby="password"
                      />
                      <span class="input-group-text cursor-pointer">
                        <i class="bx bx-hide"></i>
                      </span>
                      <span
                        asp-validation-for="Password"
                        class="text-danger"
                      ></span>
                    </div>
                    <p class="form-text">
                      Must contain atleast one letter and one digit.
                    </p>
                  </div>

                  {/* Date Of Birth*/}
                  <div class="col-md-12 col-lg-6 mb-3">
                    <label asp-for="DOB" class="form-label"></label>
                    <input
                      asp-for="DOB"
                      class="form-control"
                      type="date"
                      name="DOB"
                    />
                    <span asp-validation-for="DOB" class="text-danger"></span>
                  </div>

                  {/* Gender*/}
                  <div class="col-md-12 col-lg-6 mb-3">
                    <label asp-for="Gender" class="form-label"></label>
                    <select
                      class="form-select"
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
                  <div class="col-md-12 col-lg-6 mb-3">
                    <label asp-for="CNIC" class="form-label"></label>
                    <input
                      asp-for="CNIC"
                      class="form-control"
                      id="CNIC"
                      name="CNIC"
                      value="12345-1234567-1"
                      placeholder="12345-1234567-1"
                    />
                    <span asp-validation-for="CNIC" class="text-danger"></span>
                    <p class="form-text">
                      Follow this pattern (xxxxx-xxxxxx-x)
                    </p>
                  </div>

                  {/* UserType*/}
                  <div class="col-md-12 col-lg-6 mb-3">
                    <label asp-for="UserType" class="form-label"></label>
                    <select
                      class="form-select"
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
                  <div class="mb-3">
                    <label class="form-label" asp-for="Phoneno"></label>
                    <div class="input-group input-group-merge">
                      <span
                        id="basic-icon-default-phone2"
                        class="input-group-text"
                      >
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
                    <span
                      asp-validation-for="Phoneno"
                      class="text-danger"
                    ></span>
                  </div>

                  {/* Location*/}
                  <div class="mb-3">
                    <label class="form-label" asp-for="Address"></label>
                    <div class="input-group input-group-merge">
                      <span id="basic-icon-map-pin" class="input-group-text">
                        <i class="bx bxs-map-pin"></i>
                      </span>
                      <input
                        asp-for="Address"
                        class="form-control"
                        id="basic-icon-location"
                        value="Township, Lahore, Pakistan."
                        placeholder="Township, Lahore, Pakistan."
                        aria-label="Pk Resorts"
                        aria-describedby="basic-icon-location"
                      />
                    </div>
                    <span
                      asp-validation-for="Address"
                      class="text-danger"
                    ></span>
                  </div>

                  {/* Profile picture*/}
                  <div class="mb-3">
                    <label asp-for="ProfilePic" class="form-label"></label>
                    <input
                      asp-for="ProfilePic"
                      type="file"
                      class="form-control"
                      id="ProfilePic"
                    />
                    <span
                      asp-validation-for="ProfilePic"
                      class="text-danger"
                    ></span>
                    <p class="form-text">
                      Allowed JPG, GIF or PNG. Max size of 800K
                    </p>
                  </div>

                  {/* Terms And Conditions*/}
                  <div class="mb-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="terms-conditions"
                        asp-for="TermsAndConditions"
                      />
                      <label
                        class="form-check-label"
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
                        class="text-danger"
                      ></span>
                    </div>
                  </div>

                  <button type="submit" class="btn btn-primary d-grid w-100">
                    Register
                  </button>
                </div>
              </form>

              <p class="text-center">
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
