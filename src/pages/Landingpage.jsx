import React from 'react'
import { Link } from "react-router-dom";
import Navbar2 from '../components/Navbar2'
import Sidebar from '../components/Sidebar'

const Landingpage = () => {
  return (
    <div>
        <Navbar2 />
        <div>
            <Sidebar />
        </div>
        
    </div>
  )
}

export default Landingpage