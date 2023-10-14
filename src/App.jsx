import Homepage from "./pages/Homepage"
import Landingpage from "./pages/Landingpage";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import AboutUs from "./pages/AboutUs";
import Citizens from "./pages/Citizens";
import Services from "./pages/Services";
import Cedula from "./pages/Cedula";
import Clearance from "./pages/Clearance";
import Residency from "./pages/Residency";
import Indigency from "./pages/Indigency";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <Homepage/>
          }
        />
        <Route
          path='/login'
          element={
            <Login/>
          }
        />
        <Route
          path='/signup'
          element={
            <Signup/>
          }
        />
        <Route
          path='/landingpage'
          element={
            <Landingpage/>
          }
        />
        <Route
          path="/about-us"
          element={
            <AboutUs />
          }
        />
        <Route
          path="/citizens-charter"
          element={
            <Citizens />
          }
        />
        <Route
          path="/services"
          element={
            <Services />
          }
        />
        <Route
          path="/contact-us"
          element={
            <Contact />
          }
        />
        <Route
          path="/services/community-tax-certificate"
          element={
            <Cedula />
          }
        />
        <Route
          path="/services/barangay-clearance"
          element={
            <Clearance />
          }
        />
        <Route
          path="/services/certificate-of-residency"
          element={
            <Residency />
          }
        />
        <Route
          path="/services/certificate-of-indigency"
          element={
            <Indigency />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile />
          }
        />
        <Route
          path="/notifications"
          element={
            <Notifications />
          }
        />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
