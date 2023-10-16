import React from 'react'
import Navbar2 from '../../components/Navbar2'
import Sidebar from '../../components/Sidebar'

const Clearance = () => {
  const data = false
  const data2 = false
  const data3 = true
  const data4 = false
  const data5 = false
  const open = true
  const data31 = false
  const data32 = true
  const data33 = false
  const data34 = false
  return (
    <div className=''>
      <div className='flex flex-row'>
        <Sidebar
          data={data} data2={data2} data3={data3} data4={data4} data5={data5} open={open} data31={data31} data32={data32} data33={data33} data34={data34}
          className='' />
        <div className='w-[70%] min-h-screen mt-[85px] ml-[85px]'>
          <p className=''>Barangay Clearance</p>
        </div>
      </div>
      <Navbar2 className='' />
    </div>
  )
}

export default Clearance