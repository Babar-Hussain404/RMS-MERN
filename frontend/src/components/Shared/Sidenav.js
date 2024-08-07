import Logo from "./Logo";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidenav = () => {
  const location = useLocation();

  return (
    <aside
      id="layout-menu"
      className="layout-menu menu-vertical menu bg-menu-theme"
    >
      <div className="app-brand demo">
        <Logo />

        <a
          href="#"
          className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
        >
          <i className="bx bx-chevron-left bx-sm align-middle"></i>
        </a>
      </div>

      <div className="menu-inner-shadow"></div>

      <ul className="menu-inner py-1">
        {/* Dashboard */}
        <li
          className={`menu-item ${location.pathname === "/" ? "active" : ""}`}
        >
          <Link to="/" className="menu-link">
            <i className="menu-icon tf-icons bx bx-home-circle"></i>
            <div data-i18n="Analytics">Dashboard</div>
          </Link>
        </li>

        {!localStorage.getItem("token") && (
          <>
            <li className="menu-header small text-uppercase">
              <span className="menu-header-text">Authorization</span>
            </li>

            {/* Login */}
            <li
              className={`menu-item ${
                location.pathname === "/login" ? "active" : ""
              }`}
            >
              <Link to="/login" className="menu-link">
                <i className="menu-icon tf-icons fa-solid fa-arrow-right-to-bracket"></i>
                <div data-i18n="Login">Login</div>
              </Link>
            </li>

            {/* Register */}
            <li
              className={`menu-item ${
                location.pathname === "/register" ? "active" : ""
              }`}
            >
              <Link to="/register" className="menu-link">
                <i className="menu-icon tf-icons fa-regular fa-address-card"></i>
                <div data-i18n="Register">Register</div>
              </Link>
            </li>
          </>
        )}

        {localStorage.getItem("token") && (
          <>
            {" "}
            <li className="menu-header small text-uppercase">
              <span className="menu-header-text">Residences</span>
            </li>
            {/* Booking List */}
            <li
              className={`menu-item ${
                location.pathname === "/bookinglist" ? "active" : ""
              }`}
            >
              <Link to="/bookinglist" className="menu-link">
                <i className="menu-icon tf-icons bx bx-list-ol"></i>
                <div data-i18n="Booking List">Booking List</div>
              </Link>
            </li>
            {/* Hotel */}
            <li
              className={`menu-item ${
                location.pathname === "/hotel" || location.pathname === "/Hotel"
                  ? "active"
                  : ""
              }`}
            >
              <Link to="/hotel" className="menu-link">
                <i className="menu-icon tf-icons bx bx-hotel"></i>
                <div data-i18n="Hotel">Hotel</div>
              </Link>
            </li>
            {/* Hostel */}
            <li
              className={`menu-item ${
                location.pathname === "/hostel" ||
                location.pathname === "/Hostel"
                  ? "active"
                  : ""
              }`}
            >
              <Link to="/hostel" className="menu-link">
                <i className="menu-icon tf-icons bx bx-building-house"></i>
                <div data-i18n="Hostel">Hostel</div>
              </Link>
            </li>
            {/* House */}
            <li
              className={`menu-item ${
                location.pathname === "/house" || location.pathname === "/House"
                  ? "active"
                  : ""
              }`}
            >
              <Link to="/house" className="menu-link">
                <i className="menu-icon tf-icons bx bxs-institution"></i>
                <div data-i18n="House">House</div>
              </Link>
            </li>
            {/* Info Heading */}
            <li className="menu-header small text-uppercase">
              <span className="menu-header-text">Info</span>
            </li>
            {/* About Us */}
            <li
              className={`menu-item ${
                location.pathname === "/aboutus" ? "active" : ""
              }`}
            >
              <Link to="/aboutus" className="menu-link">
                <i className="menu-icon bx tf-icons bxs-user-detail"></i>
                <div data-i18n="About us">About us</div>
              </Link>
            </li>
            {/* Contact Us */}
            <li
              className={`menu-item ${
                location.pathname === "/contactus" ? "active" : ""
              }`}
            >
              <Link to="/contactus" className="menu-link">
                <i className="menu-icon tf-icons bx bx-support"></i>
                <div data-i18n="Contact us">Contact Us</div>
              </Link>
            </li>
            {/* Help (FAQs) */}
            <li
              className={`menu-item ${
                location.pathname === "/help" ? "active" : ""
              }`}
            >
              <Link to="/help" className="menu-link">
                <i className="menu-icon tf-icons bx bx-info-circle"></i>
                <div data-i18n="FAQs">Help (FAQs)</div>
              </Link>
            </li>
            {/* Privacy Policy */}
            <li
              className={`menu-item ${
                location.pathname === "/privacypolicy" ? "active" : ""
              }`}
            >
              <Link to="/privacypolicy" className="menu-link">
                <i className="menu-icon tf-icons bx bx-check-shield"></i>
                <div data-i18n="Help">Privacy Policy</div>
              </Link>
            </li>
          </>
        )}
      </ul>
    </aside>
  );
};

export default Sidenav;
