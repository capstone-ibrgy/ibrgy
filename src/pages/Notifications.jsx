import React from 'react'
import Navbar2 from '../components/Navbar2'
import Sidebar from '../components/Sidebar'

const Notifications = () => {

    const drop = true
    const high = false
    const high2 = true

  return (
    <div className=''>
        <div className='flex flex-row'>
            <Sidebar className='' />
            <div className='w-[70%] min-h-screen mt-[85px] ml-[85px]'>
              <p className=''>Notifications</p>
            </div>
        </div>
        <Navbar2 drop={drop} high={high} high2={high2} className='' />
    </div>
  )
}

export default Notifications