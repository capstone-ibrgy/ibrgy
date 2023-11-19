import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'
import bg from '../assets/images/background.svg'
import google from '../assets/images/google.png'
import fb from '../assets/images/fb.png'

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const navigate = useNavigate();
    const { login, loginGoogle } = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError('');

        try {
            await login(email, password);
        } catch (e) {
            setError('Invalid email or password.')
        }

    }

    const handleGoogleLogin = async () => {
        await loginGoogle();
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
                    <div className='flex flex-col items-center pt-14'>
                        <h1 className='font-arimo font-bold text-[#1F2F3D] text-[26px]'>ENTER ACCOUNT</h1>
                        <div className='z-10 flex flex-col w-[500px] items-center'>
                            <form onSubmit={handleSubmit} className='flex flex-col z-10 w-[350px] py-4 font-arimo text-[#1F2F3D]'>
                                <label className='py-1 text-sm font-bold'>Email Address</label>
                                <input type='text' value={email} className='px-2 border-2 text-[#1F2F3D] border-[#1F2F3D] h-9 rounded-lg' name='username'
                                    pattern="([A-Za-z0-9][._]?)+[A-Za-z0-9]@[A-Za-z0-9]+(\.?[A-Za-z0-9]){2}\.(com?|net|org)+(\.[A-Za-z0-9]{2,4})?"
                                    title='Please enter a valid email'
                                    required={true}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }} />
                                <label className='mt-2 py-1 text-sm font-bold'>Password</label>
                                <input type='password' value={password} className='px-2 border-2 text-[#1F2F3D] border-[#1F2F3D] h-9 rounded-lg' name='username'
                                    required={true}
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }} />
                                <div className='pt-3 flex flex-row justify-between'>
                                    <div className='flex flex-row gap-2'>
                                        <input type='checkbox'></input>
                                        <p className='text-sm font-bold'>Remember me?</p>
                                    </div>
                                    <p className='text-sm font-bold text-[#1B75BC]'>Forgot Password?</p>
                                </div>
                                <p className={`${error ? 'opacity-100' : 'opacity-0'} p-2 h-4 text-xs font-bold text-[#E8090C]`}>{error}</p>
                                <button type='submit' className='mt-5 flex w-full h-9 bg-[#1F2F3D] rounded-lg justify-center items-center'>
                                    <p className='text-white text-sm font-bold'>Log In</p>
                                </button>
                            </form>
                            <div className='mt-4 w-full flex flex-row items-center'>
                                <div className='flex-1 h-[2px] bg-[#1F2F3D]'></div>
                                <p className='px-2 font-arimo text-[#1F2F3D] text-sm font-bold opacity-50'>OR</p>
                                <div className='flex-1 h-[2px] bg-[#1F2F3D]'></div>
                            </div>
                            <div className='mt-6 w-full flex flex-row items-center font-arimo font-bold text-[#1F2F3D]'>
                                <div onClick={() => { handleGoogleLogin() }} className='cursor-pointer flex flex-row flex-1 h-[40px] border-2 border-[#1F2F3D] rounded-lg items-center justify-center gap-x-2'>
                                    <img src={google} className='w-5 h-5' />
                                    <p className=' text-sm'>Log in with Google</p>
                                </div>
                                <div className='w-10'></div>
                                <div className='flex flex-row flex-1 h-[40px] border-2 border-[#1F2F3D] rounded-lg items-center justify-center gap-x-2'>
                                    <img src={fb} className='w-5 h-5' />
                                    <p className='text-sm'>Log in with Facebook</p>
                                </div>
                            </div>
                            <p className='mt-4 font-arimo text-sm font-bold text-[#1F2F3D]'>Don't have an account? <span onClick={() => {
                                navigate('/signup')
                            }} className='text-[#1B75BC] cursor-pointer'>Sign up</span></p>
                        </div>
                    </div>
                </div>

            </div>

            <img src={bg} className='absolute bottom-0 w-full' />
        </div>
    )
}

export default Login