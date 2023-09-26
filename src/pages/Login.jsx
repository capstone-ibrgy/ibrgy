import React, {useState} from 'react'
import bg from '../assets/images/background.svg'
import google from '../assets/images/google.png'
import fb from '../assets/images/fb.png'

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='relative h-screen w-full bg-[#FEC51C]'>
        <div className="flex flex-row">
            <div className='w-[35%] flex flex-col'>
                <div className='h-20'>
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
            <div className='bg-white w-[65%] h-screen rounded-l-[24px]'>
                <div className='flex flex-col items-center pt-14'>
                    <h1 className='font-arimo font-bold text-[#1F2F3D] text-[26px]'>ENTER ACCOUNT</h1>
                    <div className='flex flex-col w-[500px] items-center'>
                        <form className='flex flex-col z-10 w-[350px] py-4 font-arimo text-[#1F2F3D]'>
                            <label className='py-1 text-sm font-bold'>Username / Email</label>
                            <input type='text' value={email} className='px-2 border-2 text-[#1F2F3D] border-[#1F2F3D] h-9 rounded-lg' name='username' 
                            onChange={(e)=>{
                                setEmail(e.target.value)
                            }}/>
                            <label className='mt-2 py-1 text-sm font-bold'>Password</label>
                            <input type='password' value={password} className='px-2 border-2 text-[#1F2F3D] border-[#1F2F3D] h-9 rounded-lg' name='username' 
                            onChange={(e)=>{
                                setPassword(e.target.value)
                            }}/>
                            <div className='py-3 flex flex-row justify-between'>
                                <div className='flex flex-row gap-2'>
                                    <input type='checkbox'></input>
                                    <p className='text-sm font-bold'>Remember me?</p>
                                </div>
                                <p className='text-sm font-bold text-[#1B75BC]'>Forgot Password?</p>
                            </div>
                            <div className='mt-2 flex w-full h-9 bg-[#1F2F3D] rounded-lg justify-center items-center'>
                                <p className='text-white text-sm font-bold'>Log In</p>
                            </div>
                        </form>
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
                        <p className='mt-4 font-arimo text-sm font-bold text-[#1F2F3D]'>Don't have an account? <span className='text-[#1B75BC]'>Sign up</span></p>
                    </div>
                </div>
            </div>            
        </div>
        
        <img src={bg} className='absolute bottom-0'/>
    </div>
  )
}

export default Login