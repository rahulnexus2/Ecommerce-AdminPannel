import React from 'react'
import {Outlet} from 'react-router-dom';
import PublicNav from './PublicNav';
import AuthNav from './AuthNAv';


const AuthLayout = () => {
  return (
    <div>
     <PublicNav></PublicNav>
     <AuthNav></AuthNav>
      

      <Outlet></Outlet>
      
    </div>
  )
}

export default AuthLayout
