import React, { useEffect, useState } from 'react'
import { useAuth } from '../auth/AuthContext'
import UserDashboard from '../screens/user/UserDashboard';
import Citizens from './Citizens';
import Services from './Services';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Cedula from '../screens/user/Cedula'
import Clearance from '../screens/user/Clearance'
import Residency from '../screens/user/Residency'
import Indigency from '../screens/user/Indigency'

function Dashboard(props) {

    const { currentUser, logout } = useAuth();
    const [height, setHeight] = useState(400)

    useEffect(() => {
        function handleResize() {
            setHeight(Math.round(window.innerHeight * 0.7))
        }

        const eventL = window.addEventListener('resize', handleResize)

        return eventL
    }, [height])

    const screens = [
        { screen: "Dashboard", component: <UserDashboard profile={props.profile} /> },
        { screen: "Citizen's Charts", component: <Citizens /> },
        { screen: "Services", component: <Services height={height} /> },
        { screen: "About Us", component: <AboutUs /> },
        { screen: "Contact Us", component: <Contact /> },
        { screen: "Services > Cedula", component: <Cedula height={height} /> },
        { screen: "Services > Barangay Clearance", component: <Clearance height={height} /> },
        { screen: "Services > Certificate of Residency", component: <Residency height={height} /> },
        { screen: "Services > Certificate of Indigency", component: <Indigency height={height} /> }
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