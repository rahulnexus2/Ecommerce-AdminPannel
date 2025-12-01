import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from '../Pages/Login'
import Signup from '../Pages/SIgnup'
import PublicLayout from '../Layouts/PublicLayout'


const Approute = () => {
  return (
    <div>
      {/*Public Routes */}
      <Routes>
        <Route path="/" element={<PublicLayout/>}>
        <Route path='signup' element={<Signup/>}/>
        <Route path='login' element={<Login/>}/>
        </Route>


      </Routes>

      
    </div>
  )
}

export default Approute
