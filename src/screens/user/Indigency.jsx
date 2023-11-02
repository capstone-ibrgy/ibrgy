import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import doc from '../../assets/images/Community Logo (5).png'
import upload from '../../assets/images/Community Logo (16).png'
import data from '../../assets/data/content.json'

import "react-datepicker/dist/react-datepicker.css";

const Indigency = (props) => {

  const [startDate, setStartDate] = useState();

  return (
    <div className='w-full h-full'>
      <h1 className='text-3xl font-bold my-2'>Request Form</h1>
      <div
        style={{ height: props.height, minHeight: "420px" }}
        className='relative flex flex-col items-center justify-center'>
        <div
          className={`flex flex-col w-[80%] rounded-[20px] bg-[#D9D9D9] text-[#1F2F3D]`}>
          <div className='relative flex flex-row w-full h-16 bg-[#1F2F3D] rounded-[20px] items-center px-6 gap-6'>
            <img src={doc} className='w-14 h-14' />
            <h1 className='text-white text-xl font-bold'>{data['documents'][3].name}</h1>
            <div className='absolute right-[-1px] rounded-[20px] w-28 h-full bg-[#FEC51C] py-3 px-6'>
              <h1 className='font-bold text-lg text-center leading-tight'>COST: {data['documents'][3].price}</h1>
            </div>
          </div>
          <div className='flex flex-col w-full flex-1 px-6 py-2 gap-1'>
            <div className='flex-1 flex flex-col w-1/3'>
              <label className='py-1 font-bold text-[#1F2F3D] text-sm'>Monthly Income</label>
              <select name="income" id="income" className='border-2 h-9 w-full border-[#1F2F3D] rounded-[10px] bg-[#D9D9D9] px-2'>
                <option value="<1">below Php 10,000</option>
                <option value="1 - 2">Php 10,000.01 - Php 20,000</option>
                <option value="2 - 4">Php 20,000.01 - Php 40,000</option>
                <option value="4 - 6">Php 40,000.01 - Php 60,000</option>
                <option value="6 - 10">Php 60,000.01 - Php 100,000</option>
                <option value=">10">above Php 100,000</option>
              </select>
            </div>
            <div className='flex-1 flex flex-col w-full'>
              <label className='py-1 font-bold text-sm'>Purpose</label>
              <textarea className='resize-none border-2 h-12 border-[#1F2F3D] bg-[#D9D9D9] rounded-[10px] px-2' />
            </div>
            <div className='flex flex-row py-2'>
              <div className='flex-1 flex flex-row border-2 border-[#1F2F3D] rounded-[10px] items-center justify-center gap-2'>
                <div className='font-bold px-2 text-sm'>
                  Upload Zone Clearance and/or Other Documents
                </div>
                <img className='h-6' src={upload} alt="" />
              </div>
              <div className='w-1/3 pl-2'>
                <div className='flex flex-col'>
                  <label className='bg-[#D9D9D9] font-arimo font-bold text-sm py-1'>Preferred Pick-up Date</label>
                  <DatePicker
                    placeholderText='Month Day, Year'
                    dateFormat={['MMMM dd, yyyy']}
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className='border-2 h-9 w-full border-[#1F2F3D] rounded-[10px] bg-[#D9D9D9] px-6 text-sm' />
                </div>
                <div className=''>
                  <label className='font-bold text-sm py-1'>Payment Method</label>
                  <div className='flex items-center border-2 text-sm h-9 w-full border-[#1F2F3D] rounded-[10px] bg-[#D9D9D9] text-red-600 justify-center font-bold'>
                    Cash on pick-up only
                  </div>
                </div>
              </div>
            </div>
            <div className='cursor-pointer h-10 my-2 flex items-center justify-center ml-2 w-1/3 rounded-[10px] drop-shadow-lg bg-[#FEC51C] self-end'>
              <h1 className='font-bold'>Submit</h1>
            </div>
          </div>
          <div className='w-full h-4 bg-[#1F2F3D] rounded-b-[20px]'></div>
        </div>
      </div>
    </div>
  )
}

export default Indigency