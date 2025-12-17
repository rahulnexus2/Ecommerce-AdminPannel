import React from "react"
import SignupPage from "./pages/SignupPage"
import LoginPage from "./pages/LoginPage"
import Card from "./components/card"
import { RouterProvider } from "react-router-dom";
import router from "./routes/AppRoute";

function App() {
  

  return (
    <>
  <RouterProvider router={router}/>
    


    </>
  )
}

export default App
