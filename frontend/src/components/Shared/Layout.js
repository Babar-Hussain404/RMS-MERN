import { Outlet } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import Sidenav from "./Sidenav";
import Topnav from "./Topnav";
import Footer from "./Footer";
import Alert from "./Alert";
import UserContext from "../../context/user/UserContext";

const Layout = () => {
  // const { user, getUser } = useContext(UserContext);
  // useEffect(()=>{
  //   getUser();
  // },[])
//base64 image then authorization.
  return (
    <>
      {/* Layout wrapper */}
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          {/* Menu */}
          <Sidenav />
          {/*Menu */}

          {/* Layout container */}
          <div className="layout-page">
            {/*Top Navbar */}
            <Topnav />
            {/*Top Navbar */}

            {/* Content wrapper */}
            <div className="content-wrapper">
              
              {/* Menu */}
              <Alert />
              {/*Menu */}

              {/* Content */}
              <Outlet />

              {/* Footer */}
              <Footer />

              <div className="content-backdrop fade"></div>
            </div>
            {/* Content wrapper */}
          </div>
          {/*Layout page */}
        </div>

        {/* Overlay */}
        <div className="layout-overlay layout-menu-toggle"></div>
      </div>
      {/*Layout wrapper */}
    </>
  );
};

export default Layout;
