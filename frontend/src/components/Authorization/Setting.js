import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../context/user/UserContext";

const Setting = () => {
  const { user, getUser, deleteUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, []);

  const handleDeactivate = () => {
    deleteUser(user._id);
    navigate("/register");
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold mb-3">
        <span className="text-muted fw-light">Dashboard /</span> Settings
      </h4>

      {/* Settings */}
      <div className="card">
        {/* Delete Account */}
        <h5 className="card-header">Delete Account</h5>
        <div className="card-body">
          <div className="mb-3 col-12 mb-0">
            <div className="alert-warning p-3 rounded">
              <h6 className="alert-heading fw-bold mb-1">
                Are you sure you want to deactivate your account?
              </h6>
              <p className="mb-0">
                Once you deactivate your account, there is no going back. Please
                be certain.
              </p>
            </div>
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              asp-for="ConfirmDelete"
              id="accountActivation"
            />
            <label className="form-check-label" asp-for="ConfirmDelete">
              I confirm my account deactivation
            </label>
            <br />
            <span
              asp-validation-for="ConfirmDelete"
              className="text-danger"
            ></span>
          </div>
          <button
            onClick={() => handleDeactivate()}
            className="btn btn-outline-danger deactivate-account mx-4"
          >
            <span className="tf-icons bx bxs-user-x"></span>&nbsp;Deactivate
          </button>
        </div>

        <hr className="m-0" />

        {/* Update Profile */}
        <h5 className="card-header">Update Profile</h5>
        <div className="card-body">
          <div>Click the button below to update your profile.</div>
          <div className="my-3 col-12 mb-0">
            <Link to={`/updateprofile/${user._id}`} className="btn btn-infox-5 mx-4 btn-outline-info">
              <span className="tf-icons bx bxs-edit"></span>&nbsp;Update
            </Link>
          </div>
        </div>

        <hr className="m-0" />

        {/*  Notifications  */}
        <h5 className="card-header">Notifications</h5>
        <div className="card-body">
          <span>
            We need permission from your browser to show notifications.
            <span className="notificationRequest">
              <strong>Request Permission</strong>
            </span>
          </span>
          <div className="error"></div>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-borderless border-bottom">
            <thead>
              <tr>
                <th className="text-nowrap">Type</th>
                <th className="text-nowrap text-center">✉️ Email</th>
                <th className="text-nowrap text-center">🖥 Browser</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-nowrap">Promotional</td>
                <td>
                  <div className="form-check d-flex justify-content-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="defaultCheck1"
                      defaultChecked
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check d-flex justify-content-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="defaultCheck2"
                      defaultChecked
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-nowrap">Account activity</td>
                <td>
                  <div className="form-check d-flex justify-content-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="defaultCheck4"
                      defaultChecked
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check d-flex justify-content-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="defaultCheck5"
                      defaultChecked
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-nowrap">Booking Status</td>
                <td>
                  <div className="form-check d-flex justify-content-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="defaultCheck7"
                      defaultChecked
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check d-flex justify-content-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="defaultCheck8"
                      defaultChecked
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-nowrap">Residence Status</td>
                <td>
                  <div className="form-check d-flex justify-content-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="defaultCheck10"
                      defaultChecked
                    />
                  </div>
                </td>
                <td>
                  <div className="form-check d-flex justify-content-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="defaultCheck11"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card-body">
          <h6>When should we send you notifications?</h6>
          <form action="#">
            <div className="row">
              <div className="col-sm-6">
                <select
                  id="sendNotification"
                  className="form-select"
                  name="sendNotification"
                >
                  <option>Only when I'm online</option>
                  <option>Anytime</option>
                </select>
              </div>
              <div className="mt-4">
                <button type="submit" className="btn btn-outline-primary">
                  <span className="tf-icons bx bx-save"></span>&nbsp;Save
                  changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Setting;
