import React, { useState, useEffect } from 'react'
import bg from '../assets/images/background.svg'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Modal from '../components/Modal'
import { Backdrop, CircularProgress } from '@mui/material';
import DatePicker from "react-datepicker";
import { addUserProfile } from '../api/services'
import { UserProfile } from '../models/UserProfile';
import { UserAlert } from '../models/UserAlert'
import { useAuth } from '../auth/AuthContext'

import "react-datepicker/dist/react-datepicker.css";
import PrivacyPolicy from '../components/PrivacyPolicy';

function UserInformation(props) {

  const [startDate, setStartDate] = useState();
  const [agree, setAgree] = useState(false);
  const [notAgree, setNotAgree] = useState('');
  const [isSigning, setIsSigning] = useState(false);
  const [show, setShow] = useState(false);
  const [policy, setPolicy] = useState(false);
  const [success, setSuccess] = useState(false);

  const { currentUser, logout } = useAuth();
  const { profile, updateProfile } = UserProfile();
  const { alert, setAlert, ERROR } = UserAlert();
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    updateProfile({
      userId: currentUser.uid,
      userAvatar: currentUser.photoURL
    })
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!agree) {
      return setNotAgree('Please accept the terms of service and privacy policy.')
    }
    setIsSigning(true);



    await addUserProfile(currentUser.uid, profile).then((_) => {
      setSuccess(true)
    }).catch((_) => {
      setAlert({ type: ERROR, message: 'Something went wrong, please try again.' })
      setShow(true);
    });
    setIsSigning(false);
  }

  return (
    <div className='relative h-screen w-full bg-[#FEC51C]'>
      <Modal show={success} />
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
                        if (e != null) {
                          updateProfile({ birthdate: e })
                        }

                      }}
                      onChange={(e) => {
                        setStartDate(e)
                        updateProfile({ birthdate: e })
                      }}
                      className='z-10 w-full px-2 border-2 text-[#1F2F3D] border-[#1F2F3D] h-8 rounded-lg' selected={startDate} />
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
                      setPolicy(true)
                    }} className='text-[#1B75BC] cursor-pointer'>Privacy Policy</span> of this website.</p>
                  </div>
                  <p className={`${(notAgree != null && !agree) ? 'opacity-100' : 'opacity-0'} px-1 py-2 h-8 text-xs font-bold text-[#E8090C]`}>{notAgree}</p>
                </div>
                <button type='submit' disabled={isSigning} className={`${isSigning ? 'bg-[#1F2F3D]/90' : 'bg-[#1F2F3D]'} mt-6 w-72 h-9 self-center rounded-lg`}>
                  {
                    isSigning ? (<div className='flex justify-center items-center gap-4'>
                      <CircularProgress color='info' size={20} className='' />
                      <p className='text-white text-sm font-bold'>Creating account, please wait...</p>
                    </div>) : (<div className='flex justify-center items-center'>
                      <p className='text-white text-sm font-bold'>Sign Up</p>
                    </div>)
                  }
                </button>
              </form>
              <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                onClick={() => { setPolicy(false) }}
                open={policy}>
                <PrivacyPolicy />
              </Backdrop>
            </div>
          </div>
        </div>
        <div className='w-[35%] flex flex-col items-end'>
          <div onClick={() => {

            logout()
            navigate(0);
          }} className='h-20 cursor-pointer text-md font-bold font-arimo p-10'>
            Back
          </div>
          <div className='flex flex-col w-full font-arimo italic px-16 font-bold text-[#1F2F3D] text-[26px]'>
            <div className='flex justify-start '>
              <h1 className=''>Tinood nga Serbisyo, </h1>
            </div>
            <div className='flex justify-end'>
              <h1 className=''>Tuhod sa Kinahanglanon!</h1>
            </div>
          </div>
        </div>
        {show && <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} open={show} autoHideDuration={alert.duration}
          onClose={() => {
            setShow(false);
            navigate('/signup')
          }}>
          <Alert severity={alert.type}>{alert.message}</Alert>
        </Snackbar>}
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