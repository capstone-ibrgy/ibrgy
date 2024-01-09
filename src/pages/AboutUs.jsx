import React from 'react'
import hope from '../assets/images/hope.png'
import lyrca from '../assets/images/lyrca.png'
import brian from '../assets/images/brian.png'
import roger from '../assets/images/roger.png'

const AboutUs = () => {

  return (
    <div className='w-full h-full overflow-y-auto py-4 px-4'>
      <h1 className='text-3xl font-bold font-arimo pb-4'>iBRGY: Barangay Management System</h1>
      <h1 className='pb-4 text-justify'>
        iBRGY is a Barangay Management System, a computer-based software that streamlines the management of barangays,
        the smallest administrative divisions in the Philippines. For now, this system automates resident information
        management and certificate issuance tasks. Complaint handling, financial management, legislative tracking, and
        inventory management will be catered soon. The system helps maintain a comprehensive resident database and
        generate various certificates. Soon, it will track complaints, manage finances, monitor legislative processes,
        and track assets. The developers aim to also provide reporting and analytics features. The goal is to improve
        governance and service delivery by enhancing efficiency, transparency, and accountability at the barangay level.
      </h1>
      <h2 className='text-2xl font-bold font-arimo mb-8'>The Team</h2>
      <div className="flex flex-row justify-between font-bold font-arimo">
        <div className="flex flex-col gap-4 justify-between items-center">
          <div className="h-44 w-44 bg-[#FEC51C] shadow-md rounded-full transform rotate-1">
            <img src={lyrca} className='object-cover' />
          </div>
          <div>Lyrca Balala</div>
        </div>
        <div className="flex flex-col gap-4 justify-between items-center">
          <div className="h-44 w-44 bg-[#FEC51C] shadow-md rounded-full transform rotate-1">
            <img src={brian} className='object-cover' />
          </div>
          <div>Brian Concillo</div>
        </div>
        <div className="flex flex-col gap-4 justify-between items-center">
          <div className="h-44 w-44 bg-[#FEC51C] shadow-md rounded-full transform rotate-1">
            <img src={hope} className='object-cover' />
          </div>
          <div>Precious Jumuad</div>
        </div>
        <div className="flex flex-col gap-4 justify-between items-center">
          <div className="h-44 w-44 bg-[#FEC51C] shadow-md rounded-full transform rotate-1">
            <img src={roger} className='object-cover' />
          </div>
          <div>Roger Maliao</div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs