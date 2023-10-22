import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import documents from '../assets/data/content.json'
import arrow from '../assets/images/Arrow right 2.png'
import arrow2 from '../assets/images/Arrow down.png'
import doc from '../assets/images/Community Logo (5).png'

const Services = () => {

  const [dropdown, setDropdown] = useState(0)
  const [height, setHeight] = useState(400)

  const handleDropdown = (index) => {
    if (dropdown === index) return setDropdown(null)
    setDropdown(index)
  }

  useEffect(() => {
    function handleResize() {
      setHeight(Math.round(window.innerHeight * 0.7))
    }

    const eventL = window.addEventListener('resize', handleResize)

    return eventL
  }, [height])


  return (
    <div className='flex flex-col w-full'>
      <h1 className='text-3xl font-bold font-arimo mt-2 mb-4'>Documents Offered</h1>
      <div className={`h-[${height}px] w-full overflow-auto`}>
        <div className='flex flex-col items-center gap-6'>
          {
            documents['documents'].map((item, i) => {
              return (
                <div key={item} className='flex flex-col w-[90%] bg-[#D9D9D9]'>
                  <div className={`h-20 w-full bg-white ${dropdown === i && 'rounded-b-[20px] '}`}>
                    <div className='relative flex flex-row h-full rounded-[20px] bg-[#FEC51C]'>
                      <div className='flex w-20 items-center justify-center bg-[#FEC51C] rounded-l-[20px]'>
                        <img onClick={() => { handleDropdown(i) }} className={`w-6 h-6 cursor-pointer duration-500 transition-all ease-in-out  ${dropdown === i ? 'rotate-90' : 'rotate-0'}`} src={arrow} alt='arrow' />
                      </div>
                      <div className='flex flex-row flex-1 bg-[#1F2F3D] rounded-[20px] border-r items-center gap-6 px-8'>
                        <img src={doc} className='w-16 h-16' />
                        <h1 className='text-white text-2xl font-bold'>{item.name}</h1>
                      </div>
                      <div className='flex justify-center items-center z-10 h-full right-0 absolute w-40 bg-[#FEC51C] rounded-[20px] drop-shadow-lg'>
                        <h1 className='text-[#1F2F3D] text-xl font-bold'>REQUEST</h1>
                      </div>
                    </div>
                  </div>
                  <h1 className={` text-justify duration-500 transition-all ease-in-out px-8 py-6 ${dropdown === i ? 'opacity-100' : 'opacity-0 py-0'}`}>
                    {i === dropdown && item.description}
                  </h1>
                </div>)
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Services