import React from 'react'
import Navbar2 from '../components/Navbar2'
import Sidebar from '../components/Sidebar'

const Profile = () => {

    const drop = true
    const high = true
    const high2 = false

  return (
    <div className='relative'>
        <Navbar2 drop={drop} high={high} high2={high2} className='z-50' />
        <div className='flex flex-row'>
            <Sidebar className='z-40' />
            <p className='mt-[100px]'>My Profile</p>
        </div>
        
    </div>
  )
}

export default Profile