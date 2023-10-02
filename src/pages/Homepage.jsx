import React from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar'
import logo from '../assets/images/logo.png'
import brand from '../assets/images/branding.png'
import backg from '../assets/images/background.svg'


function Homepage() {

  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className='w-full h-screen flex flex-row items-center justify-center'>
          <div>
            <img className='w-[300px]' src={brand}/>
          </div>
          <div className='text-[#1F2F3D] font-arimo flex flex-col justify-center md:items-start'>
            <h1 
            onClick={
              () => {
                navigate('/landingpage')
              }
            }
            className='text-4xl font-bold ml-12'>WELCOME TO</h1>
            <img src={logo} class='scale-75 -ml-10 -mt-7'/>
            <p class='italic text-xl ml-12 -mt-8'>True service, tailored to your needs!</p>
            <div className='flex flex-row items-center gap-1 mt-8'>
              <button 
			  onClick={
				() => {
					navigate('/signup')
				}
			  }
			  className='bg-[#1F2F3D] text-white rounded-[50px] ml-12 py-2 px-20 shadow-2xl'>
                    SIGN UP
              </button>
              <button 
              onClick={
                () => {
                  navigate('/login')
                }
              }
              className='bg-[#FFFFFF] text-[#1F2F3D] border-2 border-[#1F2F3D] rounded-[50px] ml-8 py-[6px] px-20 shadow-2xl'>
                    LOG IN
              </button>
            </div>
          </div>
        </div>
      <img src={backg} className='absolute w-full z-[-10] bottom-0'/>
    </div>
  )
}

export default Homepage
