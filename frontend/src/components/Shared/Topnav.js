import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UserContext from "../../context/user/UserContext";
import AlertCotext from "../../context/alerts/AlertContext";

const Topnav = () => {
  const navigate = useNavigate();
  const { showAlert } = useContext(AlertCotext);
  const { user, getUser } = useContext(UserContext);
  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUser();
    } else {
      if (location.pathname !== "/login") {
        navigate("/login");
        showAlert(`Please login to view profile`, "info");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
    showAlert("You have been logged out", "info");
  };

  return (
    <nav
      className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
      id="layout-navbar"
    >
      <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
        <a className="nav-item nav-link px-0 me-xl-4" href="">
          <i className="bx bx-menu bx-sm"></i>
        </a>
      </div>

      <div
        className="navbar-nav-right d-flex align-items-center"
        id="navbar-collapse"
      >
        {/* Search */}
        <div className="navbar-nav align-items-center">
          <div className="nav-item d-flex align-items-center">
            <i className="bx bx-search fs-4 lh-0"></i>
            <input
              type="text"
              className="form-control border-0 shadow-none"
              placeholder="Search..."
              aria-label="Search..."
            />
          </div>
        </div>
        {/* /Search */}

        {localStorage.getItem("token") && (
          <ul className="navbar-nav flex-row align-items-center ms-auto">
            {/* User */}
            <li className="nav-item navbar-dropdown dropdown-user dropdown">
              {user.ProfilePic && (
                <a
                  className="nav-link dropdown-toggle hide-arrow"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  <div className="avatar avatar-online">
                    <img
                      src={`data:image/png;base64,${user.ProfilePic}`}
                      alt="Profile pic"
                      className="w-px-40 h-auto rounded-circle"
                    />
                  </div>
                </a>
              )}

              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="">
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <div className="avatar avatar-online">
                          <img
                            src={`data:image/png;base64,${user.ProfilePic}`}
                            alt="Profile pic"
                            className="w-px-40 h-auto rounded-circle"
                          />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <span className="fw-semibold d-block">
                          {user.FName} {user.LName}
                        </span>
                        <small className="text-muted">{user.UserType}</small>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="dropdown-divider"></div>
                </li>
                <li>
                  <Link className="dropdown-item" to="/profile">
                    <i className="bx bx-user me-2"></i>
                    <span className="align-middle">My Profile</span>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/setting">
                    <i className="bx bx-cog me-2"></i>
                    <span className="align-middle">Settings</span>
                  </Link>
                </li>
                <li>
                  <div className="dropdown-divider"></div>
                </li>
                <li>
                  <button
                    onClick={logOut}
                    className="dropdown-item text-danger"
                  >
                    <i className="bx bx-log-out me-2"></i>
                    <span className="align-middle">Log Out</span>
                  </button>
                </li>
              </ul>
            </li>
            {/*/ User */}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Topnav;
