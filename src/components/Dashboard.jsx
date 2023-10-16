import React from 'react'
import doc from '../assets/images/Community Logo (5).png'
import about from '../assets/images/d.png'
import flag from '../assets/images/Community Logo (13).png'
import call from '../assets/images/g.png'

function Dashboard() {
  return (
    <div className='w-full min-h-screen mt-[85px] ml-[85px]'>
      <p className='mb-4 font-arimo'>{'Home > Dashboard'}</p>
      <h1 className='text-3xl font-bold font-arimo mb-8'>Welcome back, <span className='text-[#1B75BC]'>Precious Hope</span></h1>
      <div className='flex flex-row'>
        <div className='flex flex-col mr-[85px]'>
          <div className='relative bg-[#FEC51C] rounded-2xl drop-shadow-lg'>
            <div className='flex flex-col justify-end z-30 bg-[#1F2F3D] h-[300px] w-[500px] rounded-2xl mt-2'>
              <img className='object-scale-down h-[190px] w-auto my-[5%]' src={doc} alt="" />
              <div className='z-40 bg-[#FEC51C] rounded-2xl'>
                <h1 className='text-center text-xl font-bold font-arimo p-4 text-[#1F2F3D]'>VIEW DOCUMENT LIST</h1>
              </div>
            </div>
          </div>
          <div className='flex flex-row'>
            <div className='flex flex-col justify-end bg-[#1F2F3D] h-[180px] w-[160px] mt-4 mr-2 rounded-2xl drop-shadow-lg'>
              <img className='object-scale-down h-[90px] w-auto my-[16%]' src={about} alt="" />
              <div className='bg-[#FEC51C] rounded-2xl'>
                <p className='text-center text-[10pt] font-bold font-arimo p-2 text-[#1F2F3D]'>About Us</p>
              </div>
            </div >
            <div className='flex flex-col justify-end bg-[#1F2F3D] h-[180px] w-[160px] mt-4 mr-2 rounded-2xl drop-shadow-lg'>
              <img className='object-scale-down h-[90px] w-auto my-[16%]' src={flag} alt="" />
              <div className='bg-[#FEC51C] rounded-2xl'>
                <p className='text-center text-[10pt] font-bold font-arimo p-2 text-[#1F2F3D]'>Citizen's Charter</p>
              </div>
            </div>
            <div className='flex flex-col justify-end bg-[#1F2F3D] h-[180px] w-[160px] mt-4 mr rounded-2xl drop-shadow-lg'>
              <img className='object-scale-down h-[90px] w-auto my-[16%]' src={call} alt="" />
              <div className='bg-[#FEC51C] rounded-2xl'>
                <p className='text-center text-[10pt] font-bold font-arimo p-2 text-[#1F2F3D]'>Contact Us</p>
              </div>
            </div>
          </div>
        </div>
        <div className='relative bg-[#FEC51C] rounded-2xl drop-shadow-lg'>
          <p className=' text-[#1F2F3D] mt-2 ml-4 flex flex-row'>Show
            <span className='ml-2 flex flex-row'>
              <select name="show" id="show" className='bg-[#FEC51C] border-2 border-[#1F2F3D]'>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <p className='text-[#1F2F3D] ml-2'>entries</p>
            </span>
          </p>
          <div className='flex flex-col z-30 bg-[#1F2F3D] h-[450px] w-[450px] rounded-2xl mt-3'>
            <div className='p-8'>
              <p className='text-white font-bold font-arimo mb-4'>Monday, July 3, 2023</p>
              <p className='text-white font-bold font-arimo'>FOR PICK-UP</p>
              <ul className='border-b-2 border-gray-400 list-disc p-4'>
                <li className='text-white font-arimo'>Community Tax Certificate (Cedula)</li>
                <li className='text-white font-arimo'>Barangay Clearance</li>
                <li className='text-white font-arimo'>Certificate of Residency</li>
                <li className='text-white font-arimo'>Certificate of Indigency</li>
              </ul>
            </div>
            <div className='h-full'></div>
            <div className='z-40 bg-[#FEC51C] rounded-2xl'>
              <h1 className='text-center text-xl font-bold font-arimo p-4 text-[#1F2F3D]'>Calendar</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard