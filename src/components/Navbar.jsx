import React from 'react'
import logo from '../assets/images/logo.png'

function Navbar() {
  return (
    <div className='bg-[#FEC51C] w-full rounded-b-[30px] h-16 px-16 fixed top-0'>
        <div className='flex h-full justify-between items-center'>
            <img src={logo} className='h-[45px] w-[145px] cursor-pointer'/>
            <div className='flex items-center text-[#1F2F3D] font-arimo font-bold cursor-pointer gap-12'>
                <p>ABOUT US</p>
                <p>CITIZEN'S CHARTER</p>
                <p>SERVICES</p>
                <p>CONTACT US</p>
                <p className='text-[#1B75BC]'>LOGIN</p>
                <p className='bg-[#1F2F3D] text-white rounded-[10px] py-2 px-5'>SIGN UP</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar