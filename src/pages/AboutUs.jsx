import React from 'react'
import Navbar2 from '../components/Navbar2'
import Sidebar from '../components/Sidebar'


const AboutUs = () => {
    const data = false
    const data2 = false
    const data3 = false
    const data4 = true
    const data5 = false
  return (
    <div className=''>
        <div className='flex flex-row'>
        <Sidebar data={data} data2={data2} data3={data3} data4={data4} data5={data5} className='z-40' />
            <div className='w-[70%] min-h-screen mt-[85px] ml-[85px]'>
              <p className='mb-4 font-arimo'>{'Home > About Us'}</p>
              <h1 className='text-3xl font-bold font-arimo mb-8'>iBRGY: Barangay Management System</h1>
              <div className='mb-6'>
                iBRGY is a Barangay Management System, a computer-based software that streamlines the management of barangays, 
                the smallest administrative divisions in the Philippines. For now, this system automates resident information 
                management and certificate issuance tasks. Complaint handling, financial management, legislative tracking, and 
                inventory management will be catered soon. The system helps maintain a comprehensive resident database and 
                generate various certificates. Soon, it will track complaints, manage finances, monitor legislative processes, 
                and track assets. The developers aim to also provide reporting and analytics features. The goal is to improve 
                governance and service delivery by enhancing efficiency, transparency, and accountability at the barangay level. 
              </div>
              <h2 className='text-2xl font-bold font-arimo mb-8'>The Team</h2>
              <div class="flex flex-row gap-12 font-bold font-arimo">
                <div class="flex flex-col gap-4 justify-between items-center">
                  <div class="h-48 w-48 bg-[#FEC51C] shadow-md rounded-full transform rotate-1"></div>
                  <div>Lyrca Balala</div>
                </div>
                <div class="flex flex-col gap-4 justify-between items-center">
                  <div class="h-48 w-48 bg-[#FEC51C] shadow-md rounded-full transform rotate-1"></div>
                  <div>Brian Concillo</div>
                </div>
                <div class="flex flex-col gap-4 justify-between items-center">
                  <div class="h-48 w-48 bg-[#FEC51C] shadow-md rounded-full transform rotate-1"></div>
                  <div>Precious Jumuad</div>
                </div>
                <div class="flex flex-col gap-4 justify-between items-center">
                  <div class="h-48 w-48 bg-[#FEC51C] shadow-md rounded-full transform rotate-1"></div>
                  <div>Roger Maliao</div>
                </div>
              </div>
            </div>
        </div>
        <Navbar2 className='' />
    </div>
  )
}

export default AboutUs