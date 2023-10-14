import Homepage from "./pages/Homepage"
import Landingpage from "./pages/Landingpage";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import AboutUs from "./pages/AboutUs";
import Citizens from "./pages/Citizens";
import Services from "./pages/Services";
import Tax from "./pages/Tax";
import Clearance from "./pages/Clearance";
import Residency from "./pages/Residency";
import Indigency from "./pages/Indigency";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import UserInformation from "./pages/UserInformation";
import PrivateRoute from "./components/PrivateRoute";
import { Dashboard } from "@mui/icons-material";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={
              <PrivateRoute>
                <Homepage />
              </PrivateRoute>
            } />
            <Route path="/login" element={
              <PrivateRoute>
                <Login />
              </PrivateRoute>
            } />
            <Route path="/signup" element={
              <PrivateRoute>
                <Signup />
              </PrivateRoute>
            } />
            <Route path="/userinfo" element={
              <PrivateRoute>
                <UserInformation />
              </PrivateRoute>
            } />
            <Route path="*" element={
              <PrivateRoute>
                <Homepage />
              </PrivateRoute>
            } />
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
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
