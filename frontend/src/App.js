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
          <Route
            path="/"
            element={<Layout alert={alert} showAlert={showAlert} />}
          > {/* Home */}
            <Route index element={<Home showAlert={showAlert} />} />
            <Route path="privacypolicy" element={<PrivacyPolicy showAlert={showAlert} />} />
            <Route path="contactus" element={<ContactUs showAlert={showAlert} />} />
            <Route path="aboutus" element={<AboutUs showAlert={showAlert} />} />
            <Route path="help" element={<Help showAlert={showAlert} />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
