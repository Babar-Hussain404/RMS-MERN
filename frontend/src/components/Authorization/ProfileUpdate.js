import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import UserContext from "../../context/user/UserContext";

const ProfileUpdate = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const { user, updateUser } = useContext(UserContext);

  const [updatedData, setUpdatedData] = useState({
    FName: "",
    LName: "",
    DOB: "",
    Gender: "Other",
    CNIC: "",
    Phoneno: "",
    Address: "",
    ProfilePic: "",
  });

  //updatedData.DOB is in the format "1990-01-01T00:00:00.000Z"
  const dob = updatedData.DOB
    ? new Date(updatedData.DOB).toISOString().split("T")[0]
    : "";

  useEffect(() => {
    if (user) {
      setUpdatedData(user);
    }
  }, []);

  const handleChange = async (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const selectedFile = files[0];
      const base64String = await convertFileToBase64(selectedFile);
      setUpdatedData({
        ...updatedData,
        [name]: base64String,
      });
    } else {
      setUpdatedData({
        ...updatedData,
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
    updateUser(id, updatedData);

    navigate("/");
  };

  return (
    <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner">
          <div className="card">
            <div className="card-body">
              <h4 className="mb-5 text-center">Update Profile</h4>

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
                      value={updatedData.FName}
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
                      value={updatedData.LName ?? ""}
                      onChange={handleChange}
                      placeholder="Enter Last Name"
                      required
                    />
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
                      value={dob}
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
                      value={updatedData.Gender ?? "Other"}
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
                      value={updatedData.CNIC ?? ""}
                      onChange={handleChange}
                      placeholder="12345-1234567-1"
                    />
                    <p className="form-text">
                      Follow this pattern (xxxxx-xxxxxx-x)
                    </p>
                  </div>

                  {/* Phone No */}
                  <div className="col-md-12 col-lg-6 mb-3">
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
                        value={updatedData.Phoneno ?? ""}
                        onChange={handleChange}
                        placeholder="0300 1234567"
                      />
                    </div>
                    <div className="form-text">Phone no must be 11 digits.</div>
                  </div>

                  {/* Location */}
                  <div className="col-md-12 col-lg-6 mb-3">
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
                        value={updatedData.Address ?? ""}
                        onChange={handleChange}
                        placeholder="Township, Lahore, Pakistan."
                      />
                    </div>
                  </div>

                  {/* Profile picture */}
                  <div className="col-md-12 col-lg-6 mb-5">
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

                  {/* Buttons */}
                  <div className="row justify-content-center ">
                    <div className="btn-group col-md-4">
                      <button type="submit" className="btn btn-primary">
                        Save
                      </button>
                      <Link to="/" className="btn btn-outline-secondary">
                        Cancel
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
