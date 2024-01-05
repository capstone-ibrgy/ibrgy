import React from 'react'
import x from '../assets/images/Group 90.png'
import slip from '../assets/images/Community Logo (18).png'

const PrivacyPolicy = (props) => {




  return (
    <>
        <div className='z-20 absolute h-screen w-full bg-[#FEC51C]/50 font-arimo'>
            <div className='flex flex-col w-full h-full items-center justify-center font-arimo text-white'>
                <div className='flex flex-col h-[65%] w-[30%] bg-[#1F2F3D] rounded-[20px] pb-4'>
                    <div className='relative flex flex-row w-full h-[18%] '>
                        <div className='flex h-full w-full items-center justify-center'>
                            <h1 className='font-bold text-xl'>Privacy Policy</h1>
                        </div>
                        <img className='absolute right-4 top-0 bottom-0 my-auto w-5 cursor-pointer' src={x} alt="" />
                    </div>
                    <div className='flex flex-col h-full w-full bg-white items-center p-8'>
                        <h1 className='text-[#1B75BC] font-black text-md my-8 text-center'>Disclosure under Section 12 of Data Privacy Act of 2012 (RA No. 10173)</h1>
                        <h1 className='text-[#1F2F3D] font-bold text-sm text-center'>
                            I am allowing iBRGY: Barangay Management System to collect my personal data indicated in this 
                            form and agree that it will be collected, used and disclosed by the said system for documentation 
                            and monitoring purposes. I understand that the said system, in compliance with the Data Privacy Act 
                            of 2012 (RA 10173), commits itself to protect the privacy of the contained information therein.
                        </h1>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default PrivacyPolicy