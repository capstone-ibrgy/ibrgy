import React from 'react'
import Navbar2 from '../components/Navbar2'
import Sidebar from '../components/Sidebar'

const Clearance = () => {
  const data = false
  const data2 = false
  const data3 = false
  const data4 = true
  const data5 = false
  const open = true
  const data41 = false
  const data42 = true
  const data43 = false
  const data44 = false
  return (
    <div className=''>
        <div className='flex flex-row'>
            <Sidebar 
            data={data} data2={data2} data3={data3} data4={data4} data5={data5} open={open} data41={data41} data42={data42} data43={data43} data44={data44} 
            className='' />
            <div className='w-[70%] h-screen mt-[85px] ml-[85px]'>
              <p className=''>Barangay Clearance</p>
            </div>
        </div>
        <Navbar2 className='' />
    </div>
  )
}

export default Clearance