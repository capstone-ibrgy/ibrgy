import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import CheckIcon from '../assets/images/checked.png';

function UploadModal(props) {
    return (
        <>
            {(props.show) && (<div className='z-20 absolute h-screen w-full bg-[#FEC51C]/50'>
                <div className='flex flex-col w-full h-full items-center justify-center font-arimo text-white'>
                    <div className='flex flex-col h-64 w-80 bg-white rounded-[20px]'>
                        <div className='relative flex w-full items-center justify-center h-12 bg-[#1F2F3D] rounded-t-[20px]'>
                            <h1 className='font-bold'>Submitting Form</h1>
                        </div>
                        <div className='flex-1 w-full h-full flex flex-col items-center justify-center py-4 px-10 text-[#1F2F3D] gap-4'>
                            {props.progress < 100 && <CircularProgress className={`ease-out duration-500`} size={50} variant="determinate" value={props.progress} />}
                            <img src={CheckIcon} alt='checked-icon' className={`w-[50px] ease-in duration-500 ${props.progress != 100 && 'hidden'}`} />
                            <h1 className='text-center text-sm font-bold'>Submitting your form, please wait...</h1>
                        </div>
                        <div className='h-3 w-full bg-[#1F2F3D] rounded-b-[20px]'></div>
                    </div>

                </div>
            </div>)}
        </>
    )
}

export default UploadModal