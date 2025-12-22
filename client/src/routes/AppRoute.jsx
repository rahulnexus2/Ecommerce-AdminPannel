import {
  createBrowserRouter
} from "react-router-dom";

import HomeLayout from "../layouts/HomeLayout";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import AuthLayout from "../layouts/AuthLayout";
import ForgotPassword from "../pages/ForgotPAssword";
import ResetPassword from "../pages/ResetPAssword";

const router=createBrowserRouter([

  {
    path:"/",
    element:<HomeLayout/>,
  },
  
  {
    path:"/admin",
    element:<AuthLayout/>,
    children:[
      {
        index:true,element:<LoginPage/>
      },{
        path:"login" ,element:<LoginPage/>
      },{
        path:"signup",element:<SignupPage/>
      },
      {
        path:"forgotpassword",element:<ForgotPassword/>
      },
      {
        path:"resetpassword",element:<ResetPassword/>
      }
    ]
  },
  {
    path:"/user",
    element:<AuthLayout/>,
    children:[
      {
        index:true,element:<LoginPage/> 
      },{
          path:"login" ,element:<LoginPage/> 
        },{
          path:"signup",element:<SignupPage/>
      },
      {
        path:"forgotpassword",element:<ForgotPassword/>
      },{
        path:"resetpassword",element:<ResetPassword/>
      }
    ]
  },


  
])


export default router;