import React from "react";

const Footer = () => {
  return (
    <footer className="content-footer footer bg-white">
      <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
        <div className="mb-2 mb-md-0">
          © {new Date().getFullYear()}
          <span className="text-primary"> RMS </span>. All rights reserved.
        </div>
        <div>
          {" "}
          <span className="text-primary"> V 1.0.0</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
