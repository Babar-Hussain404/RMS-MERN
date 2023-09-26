import Home from "./components/Home/Home";
import Help from "./components/Home/Help";
import Add from "./components/Residences/Add";
import Layout from "./components/Shared/Layout";
import AboutUs from "./components/Home/AboutUs";
import House from "./components/Residences/House";
import Hotel from "./components/Residences/Hotel";
import Update from "./components/Residences/Update";
import Hostel from "./components/Residences/Hostel";
import ContactUs from "./components/Home/ContactUs";
import Detail from "./components/Residences/Detail";
import Delete from "./components/Residences/Delete";
import Login from "./components/Authorization/Login";
import Setting from "./components/Authorization/Setting";
import Profile from "./components/Authorization/Profile";
import BookingList from "./components/Booking/BookingList";
import Register from "./components/Authorization/Register";
import PrivacyPolicy from "./components/Home/PrivacyPolicy";
import ProfileUpdate from "./components/Authorization/ProfileUpdate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Authentication */}
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route path="setting" element={<Setting />} />
            <Route path="register" element={<Register />} />
            <Route path="/updateprofile/:id" element={<ProfileUpdate />} />

            {/* Home */}
            <Route index element={<Home />} />
            <Route path="privacypolicy" element={<PrivacyPolicy />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="help" element={<Help />} />

            {/* Residences */}
            <Route path="add" element={<Add />} />
            <Route path="house" element={<House />} />
            <Route path="hotel" element={<Hotel />} />
            <Route path="hostel" element={<Hostel />} />
            <Route path="update/:id" element={<Update />} />
            <Route path="delete/:id" element={<Delete />} />
            <Route path="detail/:id" element={<Detail />} />

            {/* Booking */}
            <Route path="bookinglist" element={<BookingList />} />

          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
