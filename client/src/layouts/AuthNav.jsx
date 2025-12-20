import React from 'react'
import { NavLink,useLocation } from 'react-router-dom';

const AuthNav = () => {
  const {pathname}=useLocation();
  const isAdmin=pathname.startsWith("/admin");
  const isUser=pathname.startsWith("/user");

  return (
    <div>

    {isAdmin&&<>
     <NavLink to="/admin/signup">Signup</NavLink>
     <NavLink to="/admin/login">Login</NavLink></>}


{isUser&&<>
     <NavLink to="/user/signup">Signup</NavLink>
     <NavLink to="/user/login">Login</NavLink>
     </>}

      
      
    </div>
  )
}

export default AuthNav
