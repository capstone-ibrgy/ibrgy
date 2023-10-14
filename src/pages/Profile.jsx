import React from 'react'
import Navbar2 from '../components/Navbar2'
import Sidebar from '../components/Sidebar'

const Profile = () => {

    const drop = true
    const high = true
    const high2 = false

  return (
    <div className=''>
        <div className='flex flex-row'>
            <Sidebar className='' />
            <div className='w-[70%] min-h-screen mt-[85px] ml-[85px]'>
              <p className=''>My Profile</p>
            </div>
        </div>
        <Navbar2 drop={drop} high={high} high2={high2} className='' />
    </div>
  )
}

export default Profile