import React, { useEffect, useState } from 'react'
import { useAuth } from '../auth/AuthContext'
import UserDashboard from '../screens/user/UserDashboard';
import Citizens from './Citizens';
import Services from './Services';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Profile from '../screens/user/Profile';
import Notifications from '../screens/user/Notifications';

function Dashboard(props) {

    const { currentUser, logout } = useAuth();

    const screens = [
        { screen: "Dashboard", component: <UserDashboard profile={props.profile} /> },
        { screen: "Citizen's Charts", component: <Citizens /> },
        { screen: "Services", component: <Services /> },
        { screen: "About Us", component: <AboutUs /> },
        { screen: "Contact Us", component: <Contact /> },
        { screen: "Profile", component: <Profile /> },
        { screen: "Notifications", component: <Notifications /> }
    ];

    return (
        <>
            <div className='mt-16 flex flex-col w-full py-6 font-arimo text-[#1F2F3D]'>
                <div className='w-[85%] h-full self-center'>
                    <h1 className='text-sm font-bold' >{'Home > '}
                        <span className='cursor-pointer hover:text-[#1B75BC]'>{screens[props.screen].screen}</span></h1>
                    {screens[props.screen].component}
                </div>
            </div>
        </>
    );
}

export default Dashboard