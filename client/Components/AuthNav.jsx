import React from 'react'
import { Link } from 'react-router-dom'

const AuthNav = () => {
  return (
    <div>
      <Link to='/admin/login'>Admin</Link>
      <Link to='/login'>User</Link>
      

      
    </div>
  )
}

export default AuthNav
