import React, { useEffect, useReducer, useState } from 'react'
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
import { getDocuments, onSnapshot } from '../api/services';
import RequestForms from '../screens/user/RequestForms';

function Dashboard({ screen, setScreen, documents, profile }) {

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
                setScreen={setScreen}
                profile={profile}
                height={height} />
        },
        { screen: "Citizen's Charts", component: <Citizens height={height} /> },
        {
            screen: "Services", component: <Services
                profile={profile}
                height={height}
                setScreen={setScreen} />
        },
        { screen: "About Us", component: <AboutUs height={height} /> },
        { screen: "Contact Us", component: <Contact height={height} /> },
        {
            screen: "Home > Profile > My Profile", component: <Profile
                height={height}
                user={profile}
                setProgress={setProgress}
                setShowUpload={setShowUpload}
                setAlert={setAlert}
            />
        },
        {
            screen: "Home > Profile > Notifications", component: <Notifications
                height={height}
                profile={profile}
                setProgress={setProgress}
                setShowUpload={setShowUpload} />
        },

    ];

    const FormSelector = (form) => {
        if (form.id == 'cedula') return <Cedula profile={profile} setProgress={setProgress} setShowUpload={setShowUpload} />
        else if (form.id == 'clearance') return <Clearance profile={profile} setProgress={setProgress} setShowUpload={setShowUpload} />
        else if (form.id == 'indigency') return <Indigency profile={profile} setProgress={setProgress} setShowUpload={setShowUpload} />
        else if (form.id == 'residency') return <Residency profile={profile} setProgress={setProgress} setShowUpload={setShowUpload} />

        console.log(form)
        return <RequestForms documents={form} profile={profile} setProgress={setProgress} setShowUpload={setShowUpload} />
    }

    return (
        <>
            <UploadModal show={showUpload} progress={progress} />
            <div className='mt-16 flex flex-col w-full py-6 font-arimo text-[#1F2F3D]'>
                <div className='w-[85%] h-full self-center'>
                    <h1 className='text-sm font-bold' >{'Home > '}
                        <span className='cursor-pointer hover:text-[#1B75BC]'>
                            {(screen < 7) ? screens[screen].screen :
                                `Services > ${documents['documents'][screen - 8].name}`}
                        </span></h1>
                    {screen > 7 ? FormSelector(documents['documents'][screen - 8]) : screens[screen].component}
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