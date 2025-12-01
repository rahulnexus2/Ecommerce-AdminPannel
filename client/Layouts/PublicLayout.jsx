import React from 'react'
import { Outlet } from 'react-router-dom'
import PublicNavBar from '../Components/PublicNavBar'

const PublicLayout = () => {
  return (
    <div>
      <PublicNavBar/>
      <Outlet/>  
    </div>
  )
}

export default PublicLayout
