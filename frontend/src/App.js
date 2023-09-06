import Home from "./components/Home/Home";
import Help from "./components/Home/Help";
import Layout from "./components/Shared/Layout";
import AboutUs from "./components/Home/AboutUs";
import ContactUs from "./components/Home/ContactUs";
import Login from "./components/Authorization/Login";
import Register from "./components/Authorization/Register";
import PrivacyPolicy from "./components/Home/PrivacyPolicy";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Authentication */}
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />

            {/* Home */}
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
