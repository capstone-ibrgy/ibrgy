import React from 'react'
import { Link } from "react-router-dom";
import Navbar2 from '../components/Navbar2'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'

const Landingpage = () => {
  return (
    <div className='relative'>
        <Navbar2 className='z-50' />
        <div className='flex flex-row'>
            <Sidebar className='z-40' />
            <Dashboard className='z-0' />
        </div>
        
    </div>
  )
}

export default Landingpage