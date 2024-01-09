import React, { useState } from 'react'
import arrow from '../../assets/images/Arrow right 2.png'
import arrow_down from '../../assets/images/Arrow down.png'
import doc from '../../assets/images/Community Logo (5).png'

function Documents({ docs, onClick }) {
    const [drop, setDrop] = useState(false)

    return (
        <div className='flex flex-col w-[90%] bg-[#D9D9D9]'>
            <div className={`h-20 w-full bg-white ${drop && 'rounded-b-[20px] '}`}>
                <div className='relative flex flex-row h-full rounded-[20px] bg-[#FEC51C]'>
                    <div className='flex w-20 items-center justify-center bg-[#FEC51C] rounded-l-[20px]'>
                        <img onClick={() => { setDrop(!drop) }}
                            className={`w-6 h-6 cursor-pointer duration-500 transition-all ease-in-out  
                        ${drop ? 'rotate-90' : 'rotate-0'}`} src={arrow} alt='arrow' />
                    </div>
                    <div className='flex flex-row flex-1 bg-[#1F2F3D] rounded-[20px] border-r items-center gap-6 px-8'>
                        <img src={doc} className='w-16 h-16' />
                        <h1 className='text-white text-2xl font-bold'>{docs.name}</h1>
                    </div>
                    <div onClick={() => {
                        onClick();
                    }} className='cursor-pointer flex justify-center items-center z-10 h-full right-0 absolute w-40 bg-[#FEC51C] rounded-[20px] drop-shadow-lg'>
                        <h1 className='text-[#1F2F3D] text-xl font-bold'>REQUEST</h1>
                    </div>
                </div>
            </div>
            <h1 className={` text-justify duration-500 transition-all ease-in-out ${drop ? 'opacity-100 px-8 py-6' : 'opacity-0 py-0 px-0'}`}>
                {drop && docs.description}
            </h1>
        </div>
    )
}

export default Documents