import React, { useContext, useState } from "react";
import Logo from "../Shared/Logo";
import { Link, useNavigate } from "react-router-dom";
import AlertContext from "../../context/alerts/AlertContext";

const Register = () => {
  const navigate = useNavigate();
  const { showAlert } = useContext(AlertContext);

  const [formData, setFormData] = useState({
    FName: "John",
    LName: "Doe",
    Email: "john.doe@example.com",
    Password: "pass123",
    DOB: "1990-01-01",
    Gender: "Other", // Set a default value
    UserType: "Customer", // Set a default value
    CNIC: "12345-6789012-3",
    Phoneno: "12345678901",
    Address: "123 Main Street",
    ProfilePic: "profile_pic_url.jpg",
    TermsAndConditions: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleFileChange = async (e) => {
  //   const selectedFile = e.target.files[0];
  //   const base64String = await convertFileToBase64(selectedFile);
  //   setFormData({
  //     ...formData,
  //     imageUrl: base64String,
  //   });
  // };

  // const convertFileToBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => resolve(reader.result);
  //     reader.onerror = (error) => reject(error);
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData.ProfilePic);
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(response);
      const data = await response.json();

      if (response.ok) {
        console.log(data);
      } else {
        showAlert(`HTTP error! status: ${response.status}`, "danger");
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      if (data.success) {
        localStorage.setItem("token", data.authtoken);
        navigate("/");
        showAlert("Account Created Successfully", "success");
      }
    } catch (error) {
      console.error("Error registering user:", error);
      showAlert(`Error registering user: ${error}`, "danger");
    }
  };

  return (
    <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner">
          <div className="card">
            <div className="card-body">
              {/* Logo */}
              <Logo />
              {/* Logo */}

              <h4 className="mb-2">Adventure starts here 🚀</h4>
              <p className="mb-4">
                Book or Advertise your Residence easily and Quickly!
              </p>

              <form className="mb-3" onSubmit={handleSubmit}>
                <div className="row">
                  {/* First Name */}
                  <div className="col-md-12 col-lg-6 mb-3">
                    <label htmlFor="FName" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="FName"
                      name="FName"
                      value={formData.FName}
                      onChange={handleChange}
                      placeholder="Enter First Name"
                      required
                      autoFocus
                    />
                  </div>

                  {/* Last Name */}
                  <div className="col-md-12 col-lg-6 mb-3">
                    <label htmlFor="LName" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="LName"
                      name="LName"
                      value={formData.LName}
                      onChange={handleChange}
                      placeholder="Enter Last Name"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label htmlFor="Email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="Email"
                      name="Email"
                      value={formData.Email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Password */}
                  <div className="mb-3 form-password-toggle">
                    <label htmlFor="Password" className="form-label">
                      Password
                    </label>
                    <div className="input-group input-group-merge">
                      <input
                        type="password"
                        className="form-control"
                        id="Password"
                        name="Password"
                        value={formData.Password}
                        onChange={handleChange}
                        placeholder="••••••••"
                        aria-describedby="password"
                      />
                    </div>
                    <p className="form-text">
                      Must contain at least one letter and one digit.
                    </p>
                  </div>

                  {/* Date Of Birth */}
                  <div className="col-md-12 col-lg-6 mb-3">
                    <label htmlFor="DOB" className="form-label">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="DOB"
                      name="DOB"
                      value={formData.DOB}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Gender */}
                  <div className="col-md-12 col-lg-6 mb-3">
                    <label htmlFor="Gender" className="form-label">
                      Gender
                    </label>
                    <select
                      className="form-select"
                      id="Gender"
                      name="Gender"
                      value={formData.Gender}
                      onChange={handleChange}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* CNIC */}
                  <div className="col-md-12 col-lg-6 mb-3">
                    <label htmlFor="CNIC" className="form-label">
                      CNIC
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="CNIC"
                      name="CNIC"
                      value={formData.CNIC}
                      onChange={handleChange}
                      placeholder="12345-1234567-1"
                    />
                    <p className="form-text">
                      Follow this pattern (xxxxx-xxxxxx-x)
                    </p>
                  </div>

                  {/* UserType */}
                  <div className="col-md-12 col-lg-6 mb-3">
                    <label htmlFor="UserType" className="form-label">
                      User Type
                    </label>
                    <select
                      className="form-select"
                      id="UserType"
                      name="UserType"
                      value={formData.UserType}
                      onChange={handleChange}
                    >
                      <option value="Admin">Admin</option>
                      <option value="Owner">Owner</option>
                      <option value="Customer">Customer</option>
                    </select>
                  </div>

                  {/* Phone No */}
                  <div className="mb-3">
                    <label htmlFor="Phoneno" className="form-label">
                      Phone Number
                    </label>
                    <div className="input-group input-group-merge">
                      <span
                        id="basic-icon-default-phone2"
                        className="input-group-text"
                      >
                        <i className="bx bx-phone"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="Phoneno"
                        name="Phoneno"
                        value={formData.Phoneno}
                        onChange={handleChange}
                        placeholder="0300 1234567"
                      />
                    </div>
                    <div className="form-text">Phone no must be 11 digits.</div>
                  </div>

                  {/* Location */}
                  <div className="mb-3">
                    <label htmlFor="Address" className="form-label">
                      Address
                    </label>
                    <div className="input-group input-group-merge">
                      <span
                        id="basic-icon-map-pin"
                        className="input-group-text"
                      >
                        <i className="bx bxs-map-pin"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="Address"
                        name="Address"
                        value={formData.Address}
                        onChange={handleChange}
                        placeholder="Township, Lahore, Pakistan."
                      />
                    </div>
                  </div>

                  {/* Profile picture */}
                  <div className="mb-3">
                    <label htmlFor="ProfilePic" className="form-label">
                      Profile Picture
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      className="form-control"
                      id="ProfilePic"
                      name="ProfilePic"
                      onChange={handleChange}
                    />
                  </div>

                  {/* Terms And Conditions */}
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="terms-conditions"
                        name="TermsAndConditions"
                        checked={formData.TermsAndConditions}
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="terms-conditions"
                      >
                        I agree to
                        <a href="/privacy-policy">privacy policy & terms</a>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary d-grid w-100"
                  >
                    Register
                  </button>
                </div>
              </form>

              <p className="text-center">
                <span>Already have an account?</span>
                <Link to="/login">
                  <span>Login instead</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
