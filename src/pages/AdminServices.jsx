import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import documents from '../assets/data/content.json'
import edit from '../assets/images/Community Logo (19).png'
import doc from '../assets/images/Community Logo (5).png'
import add from '../assets/images/22.png'

const AdminServices = (props) => {

  const [height, setHeight] = useState(400)

  const handleClick = () => {
    props.setScreen(9)
  }

  return (
    <div className='flex flex-col w-full h-full'>
      <h1 className='text-3xl font-bold font-arimo mt-2 mb-4'>Documents Offered</h1>
      <div className={`h-[${height}px] w-full overflow-auto`}>
        <div className='flex flex-col items-center gap-6'>
          {
            documents['documents'].map((item, i) => {
              return (
                <div key={item} className='flex flex-col w-[90%] rounded-[20px]'>
                  <div className='h-20 w-full'>
                    <div className='relative flex flex-row h-full rounded-[20px] bg-[#FEC51C]'>
                      <div className='flex w-20 items-center justify-center bg-[#FEC51C] rounded-l-[20px]'>
                        <img className='w-6 h-6 cursor-pointer' src={edit} alt='edit' />
                      </div>
                      <div className='flex flex-row flex-1 bg-[#1F2F3D] rounded-[20px] border-r items-center gap-6 px-8'>
                        <img src={doc} className='w-16 h-16' />
                        <h1 className='text-white text-2xl font-bold'>{item.name}</h1>
                      </div>
                      <div className='flex justify-center items-center z-10 h-full right-0 absolute w-40 bg-[#FEC51C] rounded-[20px] drop-shadow-lg'>
                        <h1 className='text-[#1F2F3D] text-xl font-bold'>COST:<span><p>{item.price} Php</p></span></h1>
                      </div>
                    </div>
                  </div>
                </div>)
            })
          }
          <div className='flex w-[90%] justify-end'>
            <div 
            onClick={ handleClick } 
            className='bg-[#FEC51C] rounded-[20px] p-2 w-16 cursor-pointer'>
              <img src={add} alt="add" className='w-12 h-12'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminServices