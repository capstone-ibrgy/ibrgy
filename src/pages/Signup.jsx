import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext';
import { CircularProgress } from '@mui/material';
import bg from '../assets/images/background.svg'
import google from '../assets/images/google.png'
import fb from '../assets/images/fb.png'

function Signup() {

  class TextField {
    constructor(name, obscured) {

      const [value, setValue] = useState('');
      const [error, setError] = useState(null);

      this.name = name;
      this.value = value;
      this.setValue = setValue;
      this.obscured = obscured;
      this.error = error;
      this.setError = setError;
    }
  }

  const email = new TextField('Email Address', false, null);
  const password = new TextField('Password', true, null);
  const cpassword = new TextField('Confirm Password', true, null);
  const [isSigning, setIsSigning] = useState(false);
  const [submit, setSubmit] = useState(false);

  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault()

    setSubmit(true);
    handleInputValidation();
  }

  const handleInputValidation = async () => {

    const _email = email.value.trim();
    const _password = password.value.trim();
    const _cpassword = cpassword.value.trim();

    if (!_email) {
      return email.setError('Email address is required')
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(_email)) {
      return email.setError('Invalid email address')
    }

    if (!_password) {
      return password.setError('Password is required')
    } else if (_password.length < 6) {
      return password.setError('Password must be at least 6 characters')
    }

    if (!_cpassword) {
      return cpassword.setError('Please confirm your password')
    } else if (_password != _cpassword) {
      return cpassword.setError('Password does not match')
    }

    setIsSigning(true);
    await signup(_email, _password);
    setIsSigning(false);

    navigate('/userinfo');

  }

  return (
    <div className='relative h-screen w-full bg-[#FEC51C]'>
      <div className="flex flex-row">
        <div className='w-[35%] flex flex-col'>
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
        <div className='bg-white w-[65%] h-screen rounded-l-[24px]'>
          <div className='flex flex-col items-center pt-12'>
            <h1 className='font-arimo font-bold text-[#1F2F3D] text-[26px]'>CREATE ACCOUNT</h1>
            <div className='z-10 flex flex-col w-[500px] items-center'>
              <form onSubmit={handleSubmit} className='flex flex-col z-10 w-[350px] py-2 font-arimo text-[#1F2F3D]'>
                <CustomInput textField={email} submit={submit} />
                <CustomInput textField={password} submit={submit} />
                <CustomInput textField={cpassword} submit={submit} />
                <button type='submit' className={`${isSigning ? 'bg-[#1F2F3D]/90' : 'bg-[#1F2F3D]'} mt-6 w-full h-9  rounded-lg`}>
                  {
                    isSigning ? (<div className='flex justify-center items-center gap-4'>
                      <CircularProgress color='info' size={20} className='' />
                      <p className='text-white text-sm font-bold'>Creating account, please wait...</p>
                    </div>) : (<div className='flex justify-center items-center'>
                      <p className='text-white text-sm font-bold'>Create Account</p>
                    </div>)
                  }
                </button>

              </form>
              <p className='mt-4 font-arimo text-sm font-bold text-[#1F2F3D]'>Already have an account? <span onClick={() => { navigate('/login') }} className='text-[#1B75BC] cursor-pointer'>Log in</span></p>
              <div className='mt-4 w-full flex flex-row items-center'>
                <div className='flex-1 h-[2px] bg-[#1F2F3D]'></div>
                <p className='px-2 font-arimo text-[#1F2F3D] text-sm font-bold opacity-50'>OR</p>
                <div className='flex-1 h-[2px] bg-[#1F2F3D]'></div>
              </div>
              <div className='mt-6 w-full flex flex-row items-center font-arimo font-bold text-[#1F2F3D]'>
                <div className='flex flex-row flex-1 h-[40px] border-2 border-[#1F2F3D] rounded-lg items-center justify-center gap-x-2'>
                  <img src={google} className='w-5 h-5' />
                  <p className=' text-sm'>Log in with Google</p>
                </div>
                <div className='w-10'></div>
                <div className='flex flex-row flex-1 h-[40px] border-2 border-[#1F2F3D] rounded-lg items-center justify-center gap-x-2'>
                  <img src={fb} className='w-5 h-5' />
                  <p className='text-sm'>Log in with Facebook</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <img src={bg} className='absolute bottom-0 w-full' />
    </div>
  )
}

function CustomInput({ textField, submit }) {

  return (
    <div className='w-full flex flex-col'>
      <label className='py-1 text-sm font-bold'>{textField.name}</label>
      <input type={textField.obscured ? "password" : "text"} value={textField.value} className='px-2 border-2 text-[#1F2F3D] border-[#1F2F3D] h-9 rounded-lg'

        onChange={(e) => {
          var value = e.target.value;

          if (submit) {
            if (!value) {
              textField.setError('Required field')
            } else {
              textField.setError(null);
            }
          }

          textField.setValue(e.target.value)
        }} />
      {textField.error != null && <p className='px-2 text-xs font-bold text-[#E8090C]'>{textField.error}</p>}
    </div>
  );
}

export default Signup
