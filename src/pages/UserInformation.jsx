import React, { useReducer, useState } from 'react'
import bg from '../assets/images/background.svg'
import { Link } from 'react-router-dom'
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function UserInformation() {

  const [startDate, setStartDate] = useState();
  const [agree, setAgree] = useState(false);
  const [notAgree, setNotAgree] = useState('');
  const [profile, updateProfile] = useReducer((prev, next) => {
    return { ...prev, ...next }
  },
    {
      lastname: '',
      firstname: '',
      mi: '',
      age: '',
      gender: '',
      birthdate: '',
      birthplace: '',
      address: '',
      national: '',
      civilstatus: '',
      occupation: '',
      phone: ''
    })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!agree) {
      return setNotAgree('Please accept the terms of service and privacy policy.')
    }

  }

  return (
    <div className='relative h-screen w-full bg-[#FEC51C]'>
      <div className="flex flex-row">
        <div className='bg-white w-[65%] h-screen rounded-r-[24px]'>
          <div className='flex flex-col items-center pt-8'>
            <h1 className='font-arimo font-bold text-[#1F2F3D] text-[26px]'>USER INFORMATION</h1>
            <div className='z-10 flex flex-col w-full items-center'>
              <form onSubmit={handleSubmit} className='flex flex-col w-full z-10 py-2 px-28 font-arimo text-[#1F2F3D] text-sm'>
                <div className='w-full flex flex-row gap-2'>
                  <CustomInput customStyle='flex-1 flex flex-col' label='Last Name' fieldkey='lastname' value={profile.lastname} required={true} updateProfile={updateProfile} />
                  <CustomInput customStyle='flex-1 flex flex-col' label='First Name' fieldkey='firstname' value={profile.firstname} required={true} updateProfile={updateProfile} />
                  <CustomInput customStyle='w-24 flex flex-col' label='M.I.' fieldkey='mi' value={profile.mi} required={true} updateProfile={updateProfile} />
                </div>
                <div className='relative w-full flex flex-row gap-2'>
                  <CustomInput customStyle='w-24 flex flex-col' label='Age' fieldkey='age' value={profile.age} required={true} updateProfile={updateProfile} />
                  <CustomInput customStyle='flex-1 flex flex-col' label='Gender' fieldkey='gender' value={profile.gender} required={true} updateProfile={updateProfile} />
                  <div className='flex-1 flex flex-col'>
                    <label className='text-xs p-1 font-bold'>Date of Birth</label>
                    <DatePicker
                      placeholderText='Month Day, Year'
                      dateFormat={['MMMM dd, yyyy']}
                      required={true}
                      onSelect={(e) => {
                        updateProfile({ birthdate: e })
                      }}
                      className='z-10 w-full px-2 border-2 text-[#1F2F3D] border-[#1F2F3D] h-8 rounded-lg' selected={startDate} onChange={(date) => setStartDate(date)} />
                  </div>
                  <CalendarTodayRoundedIcon className='px-[3px] cursor-pointer right-2 top-7 absolute opacity-90' />
                </div>
                <CustomInput customStyle='flex-1 flex flex-col' placeholder='Hospital/Clinic/Barangay, City/Municipality, Province, Country' label='Place of Birth' fieldkey='birthplace' value={profile.birthplace} required={true} updateProfile={updateProfile} />
                <CustomInput customStyle='flex-1 flex flex-col' placeholder='Street, Zone, Barangay, City/Municipality, Zip Code, Province' label='Address' fieldkey='address' value={profile.address} required={true} updateProfile={updateProfile} />
                <div className='w-full flex flex-row gap-2'>
                  <CustomInput customStyle='flex-1 flex flex-col' label='Nationality' fieldkey='national' value={profile.national} required={true} updateProfile={updateProfile} />
                  <CustomInput customStyle='flex-1 flex flex-col' label='Civil Status' fieldkey='civilstatus' value={profile.civilstatus} required={true} updateProfile={updateProfile} />
                </div>
                <div className='w-full flex flex-row gap-2'>
                  <CustomInput customStyle='flex-1 flex flex-col' label='Occupation' fieldkey='occupation' value={profile.occupation} required={true} updateProfile={updateProfile} />
                  <CustomInput customStyle='flex-2 flex flex-col' label='Phone Number' fieldkey='phone' value={profile.phone} required={true} updateProfile={updateProfile} />
                </div>
                <div>
                  <div className='px-1 mt-4 flex flex-row gap-2'>
                    <input
                      checked={agree}
                      onChange={() => {
                        setAgree(!agree);
                      }} type='checkbox'></input>
                    <p className='text-sm font-bold text-[#1F2F3D]'>I agree to the <span onClick={() => {

                    }} className='text-[#1B75BC] cursor-pointer'>Terms of Service</span> and <span onClick={() => {

                    }} className='text-[#1B75BC] cursor-pointer'>Privacy Policy</span> of this website.</p>
                  </div>
                  <p className={`${(notAgree != null && !agree) ? 'opacity-100' : 'opacity-0'} px-1 py-2 h-8 text-xs font-bold text-[#E8090C]`}>{notAgree}</p>
                </div>
                <button type='submit' className='mt-2 flex w-72 self-center h-9 bg-[#1F2F3D] rounded-lg justify-center items-center'>
                  <p className='text-white text-sm font-bold'>Sign Up</p>
                </button>
              </form>

            </div>
          </div>
        </div>
        <div className='w-[35%] flex flex-col items-end'>
          <Link to='/'>
            <div className='h-20 text-md font-bold font-arimo p-10'>
              Back
            </div>
          </Link>
          <div className='flex flex-col w-full font-arimo italic px-16 font-bold text-[#1F2F3D] text-[26px]'>
            <div className='flex justify-start '>
              <h1 className=''>Tinood nga Serbisyo, </h1>
            </div>
            <div className='flex justify-end'>
              <h1 className=''>Tuhod sa Kinahanglanon!</h1>
            </div>
          </div>
        </div>

      </div>

      <img src={bg} className='absolute bottom-0 transform -scale-x-100' />
    </div>
  )
}

function CustomInput({ label, fieldkey, value, placeholder, pattern, required, updateProfile, customStyle }) {

  return (
    <div className={customStyle}>
      <label className='text-xs p-1 font-bold'>{label}</label>
      <input type={"text"} value={value} className='px-2 border-2 text-[#1F2F3D] border-[#1F2F3D] h-8 rounded-lg'
        required={required}
        pattern={pattern}
        placeholder={placeholder}
        onChange={(e) => {
          updateProfile({ [fieldkey]: e.target.value })
        }} />
    </div>
  );
}

export default UserInformation