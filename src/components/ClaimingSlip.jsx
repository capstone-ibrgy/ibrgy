import React from 'react'
import x from '../assets/images/Group 90.png'
import slip from '../assets/images/Community Logo (18).png'

const ClaimingSlip = (props) => {




  return (
    <>
        <div className='z-20 absolute h-screen w-full bg-[#FEC51C]/50 font-arimo'>
            <div className='flex flex-col w-full h-full items-center justify-center font-arimo text-white'>
                <div className='flex flex-col h-[65%] w-[30%] bg-[#23A41F]/60 rounded-[20px] pb-4'>
                    <div className='relative flex flex-row w-full h-[18%] '>
                        <div className='flex h-full w-full items-center justify-center'>
                            <h1 className='font-bold text-xl'>Request Submitted!</h1>
                        </div>
                        <img className='absolute right-4 top-0 bottom-0 my-auto w-5 cursor-pointer' src={x} alt="" />
                    </div>
                    <div className='flex flex-col h-full w-full bg-white items-center'>
                        <h1 className='text-[#1F2F3D] font-bold text-md my-4'>Thank you for requesting this document!</h1>
                        <h1 className='text-[#1F2F3D] font-bold text-sm'>Please wait for the Barangay Personnel to tend to your request.</h1>
                        <h1 className='text-[#1F2F3D] font-bold text-sm'>See <span className='text-[#1B75BC] cursor-pointer'>notification</span> for updates.</h1>
                        <div className='cursor-pointer relative flex justify-center h-[50%] w-[45%] my-4 rounded-[20px] bg-[#1F2F3D] items-center'>
                            <img src={slip} className='mb-10 w-28 h-28' />
                            <div className='absolute bottom-0 flex w-full h-10 bg-[#FEC51C] rounded-[20px] justify-center items-center'>
                                <h1 className='font-bold text-sm text-[#1F2F3D]'>Download Claiming Slip</h1>
                            </div>
                        </div>
                        <h1 className='text-[#1F2F3D] font-bold text-sm'>This request is now set in <span className='text-[#1B75BC] cursor-pointer'>calendar</span>.</h1>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default ClaimingSlip