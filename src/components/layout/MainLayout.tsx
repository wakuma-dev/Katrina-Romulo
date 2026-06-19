import React from 'react'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'
const MainLayout = () => {
  return (
  <>
  <Navbar />
  <main>
    <Outlet />
  </main>
  <Footer />
  </>
  )
}

export default MainLayout