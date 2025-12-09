import React from 'react'
import { Outlet } from 'react-router-dom'
import PublicNavBar from '../Components/PublicNavBar'
import AuthNav from '../Components/AuthNav'

const PublicLayout = () => {
  return (
    <div>
      <AuthNav/>
      <PublicNavBar/>
      <Outlet/>  
    </div>
  )
}

export default PublicLayout
