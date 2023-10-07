import React from 'react'
import Navbar2 from '../components/Navbar2'
import Sidebar from '../components/Sidebar'

const Contact = () => {
    const data = false
    const data2 = false
    const data3 = false
    const data4 = false
    const data5 = true
  return (
    <div className='relative'>
        <Navbar2 className='z-50' />
        <div className='flex flex-row'>
            <Sidebar data={data} data2={data2} data3={data3} data4={data4} data5={data5} className='z-40' />
            <p className='mt-[100px]'>CONTACT US</p>
        </div>
        
    </div>
  )
}

export default Contact