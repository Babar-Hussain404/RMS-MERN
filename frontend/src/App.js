import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Shared/Layout";
import Home from "./components/Home/Home";
import PrivacyPolicy from "./components/Home/PrivacyPolicy";
import AboutUs from "./components/Home/AboutUs";
import ContactUs from "./components/Home/ContactUs";
import Help from "./components/Home/Help";

function App() {
  const [alert, setAlert] = useState();

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}
          > {/* Home */}
            <Route index element={<Home />} />
            <Route path="privacypolicy" element={<PrivacyPolicy />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="help" element={<Help />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
