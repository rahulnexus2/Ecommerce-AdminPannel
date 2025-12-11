import React from 'react'
import { Link } from 'react-router-dom'

const AuthNav = () => {
  return (
    <div>
      <Link to='/admin/signup'>Admin</Link>
      <Link to='/user/signup'>User</Link>
      

      
    </div>
  )
}

export default AuthNav
