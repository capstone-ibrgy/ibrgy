import React, { useState } from 'react'
import arrow_right from '../../assets/images/Arrow right 2.png'
import arrow_down from '../../assets/images/Arrow down.png'
import doc from '../../assets/images/Community Logo (5).png'


const UserServices = () => {
  
    const options = [
        {label: 'Community Tax Certificate (Cedula)',
        details: `The official document verifying the resident's financial hardship, qualifying them for social welfare
        benefits. It serves as proof of their economic disadvantage and is required when applying for
        government assistance programs, medical aid, or other forms of support for those in need.`},
        {label: 'Barangay Clearance',
        details: `The official document verifying the resident's financial hardship, qualifying them for social welfare
        benefits. It serves as proof of their economic disadvantage and is required when applying for
        government assistance programs, medical aid, or other forms of support for those in need.`},
        {label: 'Certificate of Residency',
        details: `The official document verifying the resident's financial hardship, qualifying them for social welfare
        benefits. It serves as proof of their economic disadvantage and is required when applying for
        government assistance programs, medical aid, or other forms of support for those in need.`},
        {label: 'Certificate of Indigency',
        details: `The official document verifying the resident's financial hardship, qualifying them for social welfare
        benefits. It serves as proof of their economic disadvantage and is required when applying for
        government assistance programs, medical aid, or other forms of support for those in need.`}
    ]

    const [drop, setDrop] = useState(-1)

    const handleDrop = (i) => {
    if (i === drop){
        setDrop(-1)
    }
    else{
        setDrop(i)
    }
    }

    const handleClick = (index) => {
    props.setScreen(index)
    }


    return (
    <div className='min-h-screen'>

        <h1 className='text-3xl font-bold font-arimo mb-8'>Documents Offered</h1>

        {options.map((options, i) => {
        return(
            <div key={options.label} className='flex flex-col relative mb-4'>
            <div className={`bg-[#FEC51C] rounded-2xl flex flex-row w-[90%] items-center z-50 ${(i === drop) ? 'mb-8' : 'mb-0'}`}>
                <img
                className='object-scale-down h-[20px] w-auto mx-6 cursor-pointer'
                onClick={() =>{ handleDrop(i) }}
                src={(i === drop) ? arrow_down : arrow_right} alt="" />
                <div className='bg-[#1F2F3D] w-full rounded-2xl flex flex-row items-center justify-end'>
                <div className='flex flex-row items-center w-full'>
                    <img className='object-scale-down h-[80px] w-auto mx-12' src={doc} alt="" />
                    <h1 className='text-2xl font-bold font-arimo text-white'>{options.label}</h1>
                </div>
                <div
                    onClick={() => { handleClick(i) }}
                    className='bg-[#FEC51C] p-7 rounded-2xl cursor-pointer'>
                    <div className='text-xl font-bold font-arimo text-[#1F2F3D] m-auto'>
                    REQUEST
                    </div>
                </div>
                </div>
            </div>
            {(i === drop) && 
                <div className='font-arimo bg-[#d1d3d6] w-[90%] mb-1 z-0 -mt-12 pt-12 px-8 pb-8'>
                {options.details}
                </div>
            }
            </div>
        )
        })}
    </div>
    )
}

export default UserServices