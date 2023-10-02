import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";

import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
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
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
