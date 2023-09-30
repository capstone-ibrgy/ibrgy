import Homepage from "./pages/Homepage"
import Landingpage from "./pages/Landingpage";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
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
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
