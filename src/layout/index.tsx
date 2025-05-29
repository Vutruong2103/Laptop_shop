import React from 'react'
import Navbar from '../components/navbar';
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
        <Navbar/>
        {/* body */}
        <Outlet/> 
    </div>
  )
}
export default Layout;