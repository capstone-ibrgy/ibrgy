import React from 'react'
import Navbar from './Navbar'

function CommonRoute({ children }) {
    return (
        <>
            <Navbar />
            <div className='flex flex-col w-full h-screen items-center'>
                <div className='w-[70%] h-full mt-[85px] ml-[85px]'>
                    {children}
                </div>
            </div>
        </>)
}

export default CommonRoute