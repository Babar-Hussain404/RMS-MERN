import Home from "./components/Home/Home";
import Help from "./components/Home/Help";
import Add from './components/Residences/Add';
import Edit from './components/Residences/Edit';
import Layout from "./components/Shared/Layout";
import AboutUs from "./components/Home/AboutUs";
import Hotel from "./components/Residences/Hotel";
import ContactUs from "./components/Home/ContactUs";
import Detail from './components/Residences/Detail';
import Delete from './components/Residences/Delete';
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

            {/* Residences */}
            <Route path="add" element={<Add />} />
            <Route path="edit" element={<Edit />} />
            <Route path="hotel" element={<Hotel />} />
            <Route path="delete" element={<Delete />} />
            <Route path="detail" element={<Detail />} />

          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
