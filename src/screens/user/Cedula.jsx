import React, {useState} from 'react'
import doc from '../../assets/images/Community Logo (5).png'
import upload from '../../assets/images/Community Logo (16).png'
import calendar from '../../assets/images/Community Logo (14).png'

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Cedula = () => {

  const [startDate, setStartDate] = useState();

  return (
    <div className=''>
        <div className='flex flex-row'>
            <div className='w-[70%] min-h-screen mt-[85px] ml-[85px]'>
              <p className='mb-4 font-arimo'>{'Home > Services > Cedula'}</p>
              <h1 className='text-3xl font-bold font-arimo mb-8'>Request Form</h1>
              <div className='bg-[#1F2F3D] rounded-2xl flex flex-col w-[90%] items-center'>
                <div className='bg-[#d1d3d6] w-full h-full flex flex-col mb-3 rounded-ss-2xl rounded-se-2xl'> 
                  <div className='bg-[#1F2F3D] flex flex-row rounded-2xl'>
                    <div className='flex flex-row items-center w-full'>
                      <img className='object-scale-down h-[80px] w-auto mx-12' src={doc} alt="" />
                      <h1 className='text-2xl font-bold font-arimo text-white'>Community Tax Certificate (Cedula)</h1>
                    </div>
                    <div className='bg-[#FEC51C] px-7 rounded-2xl pt-3 cursor-pointer'>
                      <div className='text-xl font-bold font-arimo text-[#1F2F3D] m-auto flex flex-col items-center'>
                        <h1 className='m-auto px-2'>
                          COST:
                        </h1>
                        <h1 className='m-auto'>
                          50 Php
                        </h1>
                      </div>
                    </div>
                  </div>
                  <form action="" className='flex flex-col m-8'>
                    <div className='flex flex-row mb-16'>
                      <div className='flex flex-col'>
                        <div className='flex flex-row'>
                          <div className='relative mr-4'>
                            <label className='font-arimo font-bold text-[#1F2F3D]'>Height (in cm)</label>
                            <input className='border-2 h-12 w-[280px] border-[#1F2F3D] rounded-md bg-[#d1d3d6] px-6' type="text" />
                          </div>
                          <div className='relative mr-4'>
                            <label className='z-10 bg-[#d1d3d6] font-arimo font-bold text-[#1F2F3D]'>Weight (in kg)</label>
                            <input className='z-0 border-2 h-12 w-[280px] border-[#1F2F3D] rounded-md bg-[#d1d3d6] px-6' type="text" />
                          </div>
                        </div>
                        <div>
                          <div className='flex flex-row border-2 border-[#1F2F3D] h-[135px] mr-4 my-4 rounded-md items-center justify-center'>
                            <div className='text-[#1F2F3D] font-bold font-arimo'>
                              Upload Zone Clearance and/or Other Documents
                            </div>
                            <img className='h-10 ml-8' src={upload} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className='flex flex-col'>
                        <div className='mb-2'>
                          <label className='bg-[#d1d3d6] font-arimo font-bold text-[#1F2F3D]'>Monthly Income</label>
                          <select name="income" id="income" className='border-2 h-12 w-[280px] border-[#1F2F3D] rounded-md bg-[#d1d3d6] px-6'>
                            <option value="<1">below Php 10,000</option>
                            <option value="1 - 2">Php 10,000.01 - Php 20,000</option>
                            <option value="2 - 4">Php 20,000.01 - Php 40,000</option>
                            <option value="4 - 6">Php 40,000.01 - Php 60,000</option>
                            <option value="6 - 10">Php 60,000.01 - Php 100,000</option>
                            <option value=">10">above Php 100,000</option>
                          </select>
                        </div>
                        <div className='mb-2'>
                          <label className='bg-[#d1d3d6] font-arimo font-bold text-[#1F2F3D]'>Preferred Pick-up Date</label>
                          <DatePicker
                          placeholderText='Month Day, Year'
                          dateFormat={['MMMM dd, yyyy']}
                          selected={startDate} 
                          onChange={(date) => setStartDate(date)}
                          className='border-2 h-11 w-[280px] border-[#1F2F3D] rounded-md bg-[#d1d3d6] px-6'/>
                        </div>
                        <div className='mb-2'>
                          <label className='bg-[#d1d3d6] font-arimo font-bold text-[#1F2F3D]'>Payment Method</label>
                          <div className='border-2 h-10 w-[280px] border-[#1F2F3D] rounded-md bg-[#d1d3d6] text-red-600 flex items-center px-6 font-bold font-arimo'>
                            Cash on pick-up only
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-row justify-end'>
                      <button 
                      className='bg-[#FEC51C] rounded-2xl cursor-pointer h-[45px] w-[200px] font-arimo font-bold text-[#1F2F3D]'>
                        Submit
                      </button>
                    </div> 
                  </form>
                </div>
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default Cedula