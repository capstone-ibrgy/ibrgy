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
import Notifications from '../screens/user/Notifications'
import UploadModal from '../components/UploadModal';
import Profile from '../screens/user/Profile';
import { Alert, Snackbar } from '@mui/material';
import { UserAlert } from '../models/UserAlert';

function Dashboard(props) {

    const { currentUser, logout } = useAuth();
    const [height, setHeight] = useState(400)

    const [showUpload, setShowUpload] = useState(false);
    const [progress, setProgress] = useState(0);
    const { alert, setAlert } = UserAlert();

    useEffect(() => {
        function handleResize() {
            setHeight(Math.round(window.innerHeight * 0.7))
        }

        const eventL = window.addEventListener('resize', handleResize)

        return eventL
    }, [height])

    const screens = [
        {
            screen: "Dashboard", component: <UserDashboard
                setScreen={props.setScreen}
                profile={props.profile}
                height={height} />
        },
        { screen: "Citizen's Charts", component: <Citizens height={height} /> },
        {
            screen: "Services", component: <Services
                profile={props.profile}
                height={height}
                setScreen={props.setScreen} />
        },
        { screen: "About Us", component: <AboutUs height={height} /> },
        { screen: "Contact Us", component: <Contact height={height} /> },
        {
            screen: "Services > Cedula", component: <Cedula
                height={height}
                profile={props.profile}
                setProgress={setProgress}
                setShowUpload={setShowUpload} />
        },
        {
            screen: "Services > Barangay Clearance", component: <Clearance
                height={height}
                profile={props.profile}
                setProgress={setProgress}
                setShowUpload={setShowUpload} />
        },
        {
            screen: "Services > Certificate of Residency", component: <Residency
                height={height}
                profile={props.profile}
                setProgress={setProgress}
                setShowUpload={setShowUpload} />
        },
        {
            screen: "Services > Certificate of Indigency", component: <Indigency
                height={height}
                profile={props.profile}
                setProgress={setProgress}
                setShowUpload={setShowUpload} />
        },
        {
            screen: "Home > Profile > My Profile", component: <Profile
                height={height}
                user={props.profile}
                setProgress={setProgress}
                setShowUpload={setShowUpload}
                setAlert={setAlert}
            />
        },
        {
            screen: "Home > Profile > Notifications", component: <Notifications
                height={height}
                profile={props.profile}
                setProgress={setProgress}
                setShowUpload={setShowUpload} />
        },

    ];

    return (
        <>
            <UploadModal show={showUpload} progress={progress} />
            <div className='mt-16 flex flex-col w-full py-6 font-arimo text-[#1F2F3D]'>
                <div className='w-[85%] h-full self-center'>
                    <h1 className='text-sm font-bold' >{'Home > '}
                        <span className='cursor-pointer hover:text-[#1B75BC]'>{screens[props.screen].screen}</span></h1>
                    {screens[props.screen].component}
                </div>
            </div>
            {alert.show && <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={alert.show}
                autoHideDuration={alert.duration}
                onClose={() => { setAlert({ show: false }) }}
            >
                <Alert severity={alert.type}>{alert.message}</Alert>
            </Snackbar>}
        </>
    );
}

export default Dashboard