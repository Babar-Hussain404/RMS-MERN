import React, { useContext, useEffect } from "react";
import AlertContext from "../../context/alerts/AlertContext";

const PrivacyPolicy = () => {
  const { showAlert } = useContext(AlertContext);

  useEffect(()=>{
    showAlert("You are viewing Privacy policy","info")
  },[])

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      {/*  Bordered Table  */}
      <div className="card">
        <div className="card-body">
          {/* Description */}
          <div>
            <h4>Privacy Policy:</h4>
            <div className="mx-3">
              <h5>1. Introduction:</h5>
              This Privacy Policy governs the manner in which the Residential
              Management System web application collects, uses, maintains, and
              discloses information collected from users.
              <h5 className="mt-3">2. Information Collection:</h5>
              Personal Identification Information: We may collect personal
              identification information from users when they register on the
              application, including their name, email address, and contact
              details. Non-Personal Identification Information: We may collect
              non-personal identification information about users whenever they
              interact with the application. This may include browser name,
              device type, and technical information about users' means of
              connection.
              <h5 className="mt-3">3. Information Usage:</h5>
              We may collect and use users' personal information for the
              following purposes: To personalize user experience: We may use
              information to provide a personalized experience based on users'
              preferences and needs. To improve customer service: Information
              provided helps us respond to customer service requests and support
              needs more efficiently. To send periodic emails: We may use the
              email address to send users information and updates pertaining to
              their bookings, inquiries, or other requests.
              <h5 className="mt-3">4. Information Protection:</h5>
              We adopt appropriate data collection, storage, and processing
              practices to protect against unauthorized access, alteration,
              disclosure, or destruction of users' personal information,
              username, password, transaction information, and data stored on
              our application.
              <h5 className="mt-3">5. Sharing Personal Information:</h5>
              We do not sell, trade, or rent users' personal identification
              information to others. We may share generic aggregated demographic
              information not linked to any personal identification information
              regarding users with our business partners, trusted affiliates,
              and advertisers for the purposes outlined above.
              <h5 className="mt-3">6. Third-Party Websites:</h5>
              Users may find advertising or other content on our application
              that links to the websites and services of our partners,
              suppliers, advertisers, sponsors, licensors, and other third
              parties. We do not control the content or links that appear on
              these websites and are not responsible for the practices employed
              by websites linked to or from our application.
              <h5 className="mt-3">7. Changes to the Privacy Policy:</h5>
              We have the discretion to update this Privacy Policy at any time.
              We encourage users to frequently check this page for any changes.
              Users acknowledge and agree that it is their responsibility to
              review this Privacy Policy periodically and become aware of any
              modifications.
            </div>

            <h4 className="my-3">Terms of Service:</h4>
            <div className="mx-3">
              <h5 className="mt-3">1. Acceptance of Terms:</h5>
              By accessing or using the Residential Management System web
              application, users agree to be bound by these Terms of Service and
              all applicable laws and regulations. If users do not agree with
              any of these terms, they are prohibited from using or accessing
              the application.
              <h5 className="mt-3">2. User Account:</h5>
              Users are responsible for maintaining the confidentiality of their
              account and password. They agree to accept responsibility for all
              activities that occur under their account.
              <h5 className="mt-3">3. Prohibited Activities:</h5>
              Users must not engage in any activity that could harm, disrupt, or
              interfere with the proper functioning of the application,
              including but not limited to: Attempting to gain unauthorized
              access to any part of the application or its related systems.
              Uploading or transmitting malicious code, viruses, or any other
              harmful software. Engaging in any activity that violates the
              privacy or rights of others.
              <h5 className="mt-3">4. Intellectual Property:</h5>
              The Residential Management System application and its content,
              including but not limited to text, graphics, logos, and images,
              are the property of the application owner and are protected by
              copyright and other intellectual property laws. Users agree not to
              reproduce, distribute, modify, or create derivative works of any
              material without the owner's prior written consent.
              <h5 className="mt-3">5. Limitation of Liability:</h5>
              Users agree that the Residential Management System application and
              its owners shall not be liable for any direct, indirect,
              incidental, special, or consequential damages arising out of the
              use or inability to use the application or any services provided.
              <h5 className="mt-3">6. Governing Law:</h5>
              These Terms of Service shall be governed by and construed in
              accordance with the laws of the jurisdiction in which the
              application owner is located.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
