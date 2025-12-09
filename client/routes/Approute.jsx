import React from 'react'
import {Routes,Route, Navigate} from 'react-router-dom'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import PublicLayout from '../Layouts/PublicLayout'


const Approute = () => {
  return (
    <div>
      {/*Public Routes */}
      <Routes>

        <Route element={<PublicLayout/>}>

        <Route path='/'element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>


        <Route path='/admin/login' element={<Login/>}/>
        <Route path='/admin/signup' element={<Signup/>}/>

        </Route>

      </Routes>

      
    </div>
  )
}

export default Approute
