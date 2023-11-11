import React, { useState } from 'react'
import edit from '../../assets/images/Community Logo (19).png'
import picture from '../../assets/images/Community Logo (6).png'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Profile = () => {

  const info = {
    lastname: "[Last Name]",
    firstname: "[First Name]",
    midinitial: "[M.I.]",
    age: "[Age]",
    gender: "[Gender]",
    birth_date: "[Month Day, Year]",
    address: "[Street], Zone #, [Barangay], [City/Municipality] [Zip Code], [Province]",
    position: "Barangay Hall Staff",
    number: "[Phone Number]"
  }

  const requests = [
    {label: "To Pick up", content: ""},
    {label: "Completed", content: ""},
    {label: "Cancelled", content: ""},
    {label: "Denied", content: ""}
  ]

  const length = requests.length

  const [startDate, setStartDate] = useState();

  return (
    <div className='w-full h-full'>
      <h1 className='flex flex-row text-3xl font-bold mt-2 mb-4'><span className='mr-2'><img src={edit} alt="" className='w-8 h-8'/></span>Manage Profile</h1>
      <div className='h-[85%] w-full overflow-auto'>
        <div className='flex flex-row'>
          <div className='flex flex-col border-2 border-[#1F2F3D] bg-[#D9D9D9] w-48 h-auto rounded-lg'>
            <div className='border-b-2 border-[#1F2F3D]'>
              <img src={picture} alt="" className='w-36 h-36 mx-auto'/>
            </div>
            <div className='border-b-2 border-[#1F2F3D]'>
              <h2 className='text-lg text-center font-bold my-2'>MY REQUESTS</h2>
            </div>
            {requests.map((requests, i) => {
              return(
                <div key={requests.label} className={`${i === (length - 1) ? '' : 'border-b-2 border-[#1F2F3D]'} h-full`}>
                    <h2 className='text-md font-bold mt-1 ml-1'>{requests.label}</h2>
                    <div className='text-md mt-1 ml-1'>{requests.content}</div>
                </div>
              )
            })}
          </div>
          <div className='flex flex-col ml-6 mt-8 gap-1 w-[70%]'>
            <button className='bg-[#1F2F3D] text-white border-2 border-[#1F2F3D] font-semibold rounded-lg py-2 w-32 drop-shadow-md'>Select Image</button>
            <button className='border-2 border-[#1F2F3D] text-[#1F2F3D] font-semibold rounded-lg py-2 w-32 drop-shadow-md'>Cancel</button>
            <div className='flex flex-row gap-x-2'>
              <div className='flex flex-col w-full font-semibold'>
                <label>Last Name</label>
                <input type="text" placeholder={info.lastname} className='border-2 border-[#1F2F3D] placeholder-[#1B75BC] rounded-lg h-10 p-2'/>
              </div>
              <div className='flex flex-col w-full font-semibold'>
                <label>First Name</label>
                <input type="text" placeholder={info.firstname} className='border-2 border-[#1F2F3D] placeholder-[#1B75BC] rounded-lg h-10 p-2'/>
              </div>
              <div className='flex flex-col w-16 font-semibold'>
                <label>M.I.</label>
                <input type="text" placeholder={info.midinitial} className='border-2 border-[#1F2F3D] placeholder-[#1B75BC] rounded-lg h-10 p-2'/>
              </div>
            </div>
            <div className='flex flex-row gap-x-2'>
              <div className='flex flex-col w-16 font-semibold'>
                <label>Age</label>
                <input type="text" placeholder={info.age} className='border-2 border-[#1F2F3D] placeholder-[#1B75BC] rounded-lg h-10 p-2'/>
              </div>
              <div className='flex flex-col w-full font-semibold'>
                <label>Gender</label>
                <input type="text" placeholder={info.gender} className='border-2 border-[#1F2F3D] placeholder-[#1B75BC] rounded-lg h-10 p-2'/>
              </div>
              <div className='flex flex-col w-full font-semibold'>
                <label>Date of Birth</label>
                <DatePicker
                placeholderText={info.birth_date}
                dateFormat={['MMMM dd, yyyy']}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className='border-2 border-[#1F2F3D] placeholder-[#1B75BC] rounded-lg h-10 p-2 w-full' />
              </div>
            </div>
            <div className='flex flex-col w-full font-semibold'>
              <label>Address</label>
              <input type="text" placeholder={info.address} className='border-2 border-[#1F2F3D] placeholder-[#1B75BC] rounded-lg h-10 p-2'/>
            </div>
            <div className='flex flex-row gap-x-2'>
              <div className='flex flex-col w-full font-semibold'>
                <label>Position</label>
                <input type="text" placeholder={info.position} className='border-2 border-[#1F2F3D] placeholder-[#1B75BC] rounded-lg h-10 p-2'/>
              </div>
              <div className='flex flex-col w-48 font-semibold'>
                <label>Phone Number</label>
                <input type="text" placeholder={info.number} className='border-2 border-[#1F2F3D] placeholder-[#1B75BC] rounded-lg h-10 p-2'/>
              </div>
            </div>
            <div className='flex flex-row h-full justify-end mt-2'>
              <button className='bg-[#FEC51C] w-64 rounded-lg py-4 text-[#1F2F3D] font-bold drop-shadow-md text-xl'>Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile