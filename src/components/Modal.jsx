import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '../assets/images/checked.png';

function Modal(props) {

    const navigate = useNavigate();

    const handleContinue = () => {
        navigate(0)
    }

    return (<>
        {(props.show) && (<div className='z-20 absolute h-screen w-full bg-[#FEC51C]/50'>
            <div className='flex flex-col w-full h-full items-center justify-center font-arimo text-white'>
                <div className='flex flex-col h-80 w-80 bg-white rounded-[20px]'>
                    <div className='relative flex w-full items-center justify-center h-12 bg-[#68BB59] rounded-t-[20px]'>
                        <h1 className='font-bold'>Account Created</h1>
                        <CloseIcon onClick={handleContinue} fontSize='small' className='absolute right-4 cursor-pointer' />
                    </div>
                    <div className='flex-1 w-full h-full flex flex-col items-center py-4 px-10 text-[#1F2F3D] gap-4'>
                        <img src={CheckIcon} alt='checked-icon' className='w-20' />
                        <h1 className='text-center font-bold'>Your account has been successfully created</h1>
                        <div onClick={handleContinue} className='my-4 flex items-center cursor-pointer justify-center h-9 w-48 bg-[#1F2F3D] rounded-[20px] text-white'>
                            Continue
                        </div>
                    </div>
                    <div className='h-3 w-full bg-[#68BB59] rounded-b-[20px]'></div>
                </div>

            </div>
        </div>)}
    </>

    )
}

export default Modal