import React, { useEffect, useState } from 'react'
import { useAuth } from '../auth/AuthContext'
import UserDashboard from '../screens/user/UserDashboard';
import Citizens from '../screens/user/Citizens';

function Dashboard(props) {

    const { currentUser, logout } = useAuth();
    const [screen, setScreen] = useState('Dashboard');

    const screens = [<UserDashboard profile={props.profile} />, <Citizens />];

    return (
        <>
            <div className='mt-16 flex flex-col w-full py-6 font-arimo text-[#1F2F3D]'>
                <div className='w-[85%] h-full self-center'>
                    <h1 className='text-sm font-bold' >{'Home > '}
                        <span className='cursor-pointer hover:text-[#1B75BC]'>{screen}</span></h1>
                    {screens[props.screen]}
                </div>
            </div>
        </>
    );
}

export default Dashboard