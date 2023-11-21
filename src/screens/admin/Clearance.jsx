import React, { useState } from 'react'
import doc from '../../assets/images/Community Logo (5).png'

const Clearance = (props) => {

  //const [height, setHeight] = useState(400)

  return (
    <div className='flex flex-col w-full h-full font-arimo'>
      <h1 className='text-3xl font-bold font-arimo mt-2 mb-4'>Requests List</h1>
      <div className={`h-[85%] w-full overflow-auto`}>
        <div className='flex flex-col h-[90%] w-full gap-4'>
          <div className='bg-[#1F2F3D] w-full h-[90%] rounded-[20px] pb-4'>
            <div className='bg-[#D9D9D9] flex flex-col w-full h-full rounded-t-[20px]'>
              <div className='bg-[#D9D9D9] border-[#1F2F3D] border-2 rounded-t-[20px] h-[35%] w-full flex flex-col'>
                <div className='h-[55%] w-full bg-[#1F2F3D] flex justify-center py-2 rounded-[15px]'>
                  <div className='h-full w-[90%] flex flex-row items-center text-white'>
                      <img src={doc} alt="" className='w-16 h-16'/>
                      <div className='text-2xl font-bold mx-4 w-full'>Barangay Clearance</div>
                      <div className='h-12 flex flex-row px-5 items-center'>
                          <p className='pr-2'>Show</p>
                          <select name="show" id="show" className='bg-[#1F2F3D] border-2 border-white'>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                          </select>
                          <p className='font-bold pl-2'>entries</p>
                      </div>
                  </div>
                </div>
                <div className='w-full h-full flex'>
                  <div className='bg-[#D9D9D9] flex flex-row text-[#1F2F3D] font-bold text-lg gap-4 w-full items-center'>
                    <label className='mx-12'>No.</label>
                    <label className='w-full'>Name</label>
                    <label className='w-[80%]'>Date Requested</label>
                    <label className='w-[80%]'>Claiming Date</label>
                    <label className='w-[80%] text-center mr-8'>Status</label>
                  </div>
                </div>
                
              </div>
              
              <div>

              </div>
            </div>
          </div>
          <div className='w-full flex justify-end'>
            <button className='bg-[#FEC51C] h-12 w-[20%] rounded-lg font-bold drop-shadow-lg'>Update</button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Clearance