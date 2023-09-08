import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Shared/Logo";
import AlertContext from "../../context/alerts/AlertContext";

const Login = () => {
  const navigate = useNavigate();
  const { showAlert } = useContext(AlertContext);
  const [loginData, setLoginData] = useState({
    Email: "john.doe@example.com",
    Password: "pass123",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      
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
        showAlert("Logged in Successfully", "success");
      }
    } catch (error) {
      console.error("Error loggin in:", error);
      showAlert(`Error loggin in: ${error}`, "danger");
    }
  };


  return (
    <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner">

          {/*  Login  */}
          <div className="card">
            <div className="card-body">
              {/*  Logo  */}
              <Logo />
              {/*  /Logo  */}

              <h4 className="mb-2">Welcome to REHAISH GAH! 👋</h4>
              <p className="mb-4">
                Please sign-in to your account and start the adventure
              </p>

              <form className="mb-3" onSubmit={handleSubmit} >
                
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
                      value={loginData.Email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                    />
                  </div>

                {/* Password */}
                <div className="mb-3 form-password-toggle">
                  <div className="d-flex justify-content-between">
                    <label className="form-label" htmlFor="Password"></label>
                    <a href="#">
                      <small>Forgot Password?</small>
                    </a>
                  </div>

                  <div className="input-group input-group-merge">
                    <input
                      type="password"
                      id="Password"
                      className="form-control"
                      name="Password"
                      value={loginData.Password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      aria-describedby="password"
                  />
                    <span className="input-group-text cursor-pointer">
                      <i className="bx bx-hide"></i>
                    </span>
                  </div>
                </div>

                {/* Remember Me */}
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="RememberMe"
                      asp-for="RememberMe"
                      name="RememberMe"
                    />
                    <label className="form-check-label" asp-for="RememberMe">
                      Remember Me
                    </label>
                  </div>
                </div>

                <div className="mb-3">
                  <button className="btn btn-primary d-grid w-100" type="submit">
                    Sign in
                  </button>
                </div>
              </form>

              <p className="text-center">
                <span>New on our platform?</span>
                <Link to='/register'>
                  <span>Create an account</span>
                </Link>
              </p>
            </div>
          </div>
          {/*  /Login  */}
        </div>
      </div>
    </div>
  );
};

export default Login;
