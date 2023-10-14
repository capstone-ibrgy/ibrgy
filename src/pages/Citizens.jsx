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
    <div className=''>
        <div className='flex flex-row'>
            <Sidebar data={data} data2={data2} data3={data3} data4={data4} data5={data5} className='z-40' />
            <div className='w-[70%] h-screen mt-[85px] ml-[85px]'>
              <p className='mb-4 font-arimo'>{'Hello > The Barangay'}</p>
              <h1 className='text-3xl font-bold font-arimo mb-8'>Barangay [Name]</h1>
              <h1 className='text-2xl font-bold font-arimo mb-2 pb-2 border-b-2 border-[#1F2F3D]'>Vision</h1>
              <div className='mb-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </div>
              <h1 className='text-2xl font-bold font-arimo mb-2 pb-2 border-b-2 border-[#1F2F3D]'>Mission</h1>
              <div className='mb-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </div>
              <h1 className='text-2xl font-bold font-arimo mb-2 pb-2 border-b-2 border-[#1F2F3D]'>Our Service Pledge</h1>
              <div className='mb-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </div>
              <h1 className='text-2xl font-bold font-arimo mb-2 pb-2 border-b-2 border-[#1F2F3D]'>Functional Departments and Directory</h1>
              <div className='mb-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </div>
            </div>
        </div>
        <Navbar2 className='' />
    </div>
  )
}

export default Citizens