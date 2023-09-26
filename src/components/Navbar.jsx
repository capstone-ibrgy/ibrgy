import React from 'react'
import logo from '../assets/images/logo.png'

function Navbar() {
  return (
    <div className='bg-[#FEC51C] w-full h-24 rounded-b-[48px] px-24'>
        <div className='flex flex-row h-full justify-between items-center'>
            <img src={logo} className='h-[45px] w-[145px] cursor-pointer'/>
            <div className='flex flex-row items-center text-[#1F2F3D] font-arimo font-bold cursor-pointer gap-12'>
                <p>ABOUT US</p>
                <p>CITIZEN'S CHARTER</p>
                <p>SERVICES</p>
                <p>CONTACT US</p>
                <p className='text-[#1B75BC]'>LOGIN</p>
                <div className='bg-[#1F2F3D] text-white rounded-[10px] py-2 px-5'>
                    SIGN UP
                </div>
            </div>
        </div>
    </div>

  )
}

export default Navbar