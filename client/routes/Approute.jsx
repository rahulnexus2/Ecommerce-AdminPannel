import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Signup from '../Pages/SIgnup'
import Login from '../Pages/Login'
import Home from '../Pages/Home'

const Approute = () => {
  return (
    <div>
      <Routes>
      
      
      <Route path="/user" >
      <Route path="signup" element={<Signup/>} />
      <Route path="login" element={<Login/>} />
      </Route>

    <Route path="/admin">
    <Route path="signup" element={<Signup/>}/>
    <Route path="login" element={<Login/>}/> 
    </Route>
    

      </Routes>
      
      
    </div>
  )
}

export default Approute
