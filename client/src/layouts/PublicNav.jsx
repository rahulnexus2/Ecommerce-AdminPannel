import React from 'react'
import { useNavigate } from 'react-router-dom'

const PublicNav = () => {
  const navigate=useNavigate();
  return (
    <div>
     <h1>Welcome to Home Page</h1>
     <button onClick={()=>navigate("/admin/login")}>Admin</button>
     <button onClick={()=>navigate("/user/login")}>User</button>
     
      
    </div>
  )
}

export default PublicNav
