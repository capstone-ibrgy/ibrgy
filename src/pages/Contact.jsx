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
    <div className=''>
        <div className='flex flex-row'>
            <Sidebar data={data} data2={data2} data3={data3} data4={data4} data5={data5} className='' />
            <div className='w-[70%] h-screen mt-[85px] ml-[85px]'>
              <p className=''>CONTACT US</p>
            </div>
        </div>
        <Navbar2 className='' />
    </div>
  )
}

export default Contact