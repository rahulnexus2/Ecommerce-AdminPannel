import React from 'react'
import { Outlet } from 'react-router-dom'
import PublicNav from './PublicNav'
import Footer from '../components/Footer'
import Home from '../pages/Home'


const HomeLayout = () => {
  return (
    <div>
      <PublicNav></PublicNav>
      <Home></Home>
      <Footer></Footer>
      
      
    </div>
  )
}

export default HomeLayout
