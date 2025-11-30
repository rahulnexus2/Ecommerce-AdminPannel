import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from '../Pages/Login'
import Signup from '../Pages/SIgnup'


const Approute = () => {
  return (
    <div>
      {/*Public Routes */}
      <Routes>

        <Route element={}>
        <Route path='signup' element={<Signup/>}/>
        <Route path='login' element={<Login/>}/>
        </Route>


      </Routes>

      
    </div>
  )
}

export default Approute
