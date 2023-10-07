import React from 'react'
import { Link } from "react-router-dom";
import Navbar2 from '../components/Navbar2'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'

const Landingpage = () => {
  const data = true
  const data2 = false
  const data3 = false
  const data4 = false
  const data5 = false
  return (
    <div className='relative'>
        <Navbar2 className='z-50' />
        <div className='flex flex-row'>
            <Sidebar data={data} data2={data2} data3={data3} data4={data4} data5={data5} className='z-40' />
            <Dashboard className='z-30' />
        </div>
        
    </div>
  )
}

export default Landingpage