import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminDashBoard from '../pages/AdminDashBoard'


const AdminLayout = () => {
  return (
    <div>
      <AdminDashBoard></AdminDashBoard>
      <Outlet></Outlet>



      
    </div>
  )
}

export default AdminLayout
