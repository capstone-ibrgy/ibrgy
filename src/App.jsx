import Homepage from "./pages/Homepage"
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
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
