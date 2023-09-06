import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div class="container-xxl">
      <div class="authentication-wrapper authentication-basic container-p-y">
        <div class="authentication-inner">
          <partial name="_Alerts" />

          {/*  Login  */}
          <div class="card">
            <div class="card-body">
              {/*  Logo  */}
              <partial name="_Logo" />
              {/*  /Logo  */}

              <h4 class="mb-2">Welcome to REHAISH GAH! 👋</h4>
              <p class="mb-4">
                Please sign-in to your account and start the adventure
              </p>

              <form
                id="formAuthentication"
                class="mb-3"
                method="post"
                asp-controller="Users"
                asp-action="Login"
              >
                <div
                  asp-validation-summary="ModelOnly"
                  class="text-danger"
                ></div>

                {/* Email */}
                <div class="mb-3">
                  <label asp-for="Email" class="form-label"></label>
                  <input
                    asp-for="Email"
                    class="form-control"
                    id="Email"
                    name="Email"
                    placeholder="Enter your email"
                    autocomplete="username"
                    autofocus
                  />
                  <span asp-validation-for="Email" class="text-danger"></span>
                </div>

                {/* Password */}
                <div class="mb-3 form-password-toggle">
                  <div class="d-flex justify-content-between">
                    <label class="form-label" asp-for="Password"></label>
                    <a asp-controller="Users" asp-action="ForgotPass">
                      <small>Forgot Password?</small>
                    </a>
                  </div>

                  <div class="input-group input-group-merge">
                    <input
                      asp-for="Password"
                      id="Password"
                      class="form-control"
                      name="Password"
                      value="pass999"
                      placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                      aria-describedby="password"
                      autocomplete="current-password"
                    />
                    <span class="input-group-text cursor-pointer">
                      <i class="bx bx-hide"></i>
                    </span>
                    <span
                      asp-validation-for="Password"
                      class="text-danger"
                    ></span>
                  </div>
                </div>

                {/* Remember Me */}
                <div class="mb-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="RememberMe"
                      asp-for="RememberMe"
                      name="RememberMe"
                    />
                    <label class="form-check-label" asp-for="RememberMe">
                      {" "}
                      Remember Me{" "}
                    </label>
                  </div>
                </div>

                <div class="mb-3">
                  <button class="btn btn-primary d-grid w-100" type="submit">
                    Sign in
                  </button>
                </div>
              </form>

              <p class="text-center">
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
