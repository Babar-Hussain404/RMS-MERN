import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div classname="container-xxl">
      <div classname="authentication-wrapper authentication-basic container-p-y">
        <div classname="authentication-inner">
          <partial name="_Alerts" />

          {/*  Login  */}
          <div classname="card">
            <div classname="card-body">
              {/*  Logo  */}
              <partial name="_Logo" />
              {/*  /Logo  */}

              <h4 classname="mb-2">Welcome to REHAISH GAH! 👋</h4>
              <p classname="mb-4">
                Please sign-in to your account and start the adventure
              </p>

              <form
                id="formAuthentication"
                classname="mb-3"
                method="post"
                asp-controller="Users"
                asp-action="Login"
              >
                <div
                  asp-validation-summary="ModelOnly"
                  classname="text-danger"
                ></div>

                {/* Email */}
                <div classname="mb-3">
                  <label asp-for="Email" classname="form-label"></label>
                  <input
                    asp-for="Email"
                    classname="form-control"
                    id="Email"
                    name="Email"
                    placeholder="Enter your email"
                    autocomplete="username"
                    autofocus
                  />
                  <span asp-validation-for="Email" classname="text-danger"></span>
                </div>

                {/* Password */}
                <div classname="mb-3 form-password-toggle">
                  <div classname="d-flex justify-content-between">
                    <label classname="form-label" asp-for="Password"></label>
                    <a asp-controller="Users" asp-action="ForgotPass">
                      <small>Forgot Password?</small>
                    </a>
                  </div>

                  <div classname="input-group input-group-merge">
                    <input
                      asp-for="Password"
                      id="Password"
                      classname="form-control"
                      name="Password"
                      value="pass999"
                      placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                      aria-describedby="password"
                      autocomplete="current-password"
                    />
                    <span classname="input-group-text cursor-pointer">
                      <i classname="bx bx-hide"></i>
                    </span>
                    <span
                      asp-validation-for="Password"
                      classname="text-danger"
                    ></span>
                  </div>
                </div>

                {/* Remember Me */}
                <div classname="mb-3">
                  <div classname="form-check">
                    <input
                      classname="form-check-input"
                      type="checkbox"
                      id="RememberMe"
                      asp-for="RememberMe"
                      name="RememberMe"
                    />
                    <label classname="form-check-label" asp-for="RememberMe">
                      {" "}
                      Remember Me{" "}
                    </label>
                  </div>
                </div>

                <div classname="mb-3">
                  <button classname="btn btn-primary d-grid w-100" type="submit">
                    Sign in
                  </button>
                </div>
              </form>

              <p classname="text-center">
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
