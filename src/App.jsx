import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
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
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
