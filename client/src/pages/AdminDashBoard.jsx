import React from 'react'
import {NavLink} from 'react-router-dom'

const AdminDashBoard = () => {
  return (
    <div>
      <NavLink to="/admin/dashboard">Dashboard</NavLink>
      <NavLink to="/">Products</NavLink>
      <NavLink to="/">Customers</NavLink>
      
      


    </div>
  )
}

export default AdminDashBoard
