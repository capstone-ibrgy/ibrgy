import React from 'react'
import Navbar2 from '../components/Navbar2'
import Sidebar from '../components/Sidebar'

const Citizens = () => {
    const data = false
    const data2 = false
    const data3 = true
    const data4 = false
    const data5 = false
  return (
    <div className='relative'>
        <Navbar2 className='z-50' />
        <div className='flex flex-row'>
            <Sidebar data={data} data2={data2} data3={data3} data4={data4} data5={data5} className='z-40' />
            <p className='mt-[100px]'>CITIZEN'S CHARTER</p>
        </div>
        
    </div>
  )
}

export default Citizens