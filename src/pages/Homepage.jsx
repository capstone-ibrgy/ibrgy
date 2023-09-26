import React from 'react'
import Navbar from '../components/Navbar'
import logo from '../assets/images/logo.png'
import brand from '../assets/images/branding.png'
import backg from '../assets/images/background.svg'

function Homepage() {
  return (
    <div>
      <Navbar />
      <div className='w-full h-screen flex flex-col justify-between'>
        <div className='flex flex-row max-w-[1248px] m-auto'>
          <div>
            <img src={brand}/>
          </div>
          <div className='text-[#1F2F3D] font-arimo flex flex-col justify-center md:items-start w-full'>
            <h1 className='text-4xl font-bold ml-12'>WELCOME TO</h1>
            <img src={logo} class='scale-75 -ml-10 -mt-7'/>
            <p class='italic text-xl ml-12 -mt-8'>True service, tailored to your needs!</p>
            <div className='flex flex-row items-center gap-1 mt-8'>
              <button className='bg-[#1F2F3D] text-white rounded-[50px] ml-12 py-2 px-20 shadow-2xl'>
                    SIGN UP
              </button>
              <button className='bg-[#FFFFFF] text-[#1F2F3D] border-2 border-[#1F2F3D] rounded-[50px] ml-12 py-2 px-20 shadow-2xl'>
                    LOG IN
              </button>
            </div>
          </div>
        </div>
      </div>
      <img src={backg} className='fixed bottom-0'/>
    </div>
  )
}

export default Homepage