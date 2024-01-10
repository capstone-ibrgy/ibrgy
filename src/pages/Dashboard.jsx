import React, { useEffect, useReducer, useState } from 'react'
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
import Profile from '../screens/user/Profile';
import { Alert, Snackbar } from '@mui/material';
import { UserAlert } from '../models/UserAlert';
import RequestForms from '../screens/user/RequestForms';
import { getRequestForms, onSnapshot } from '../api/services';

function Dashboard({ screen, setScreen, documents, profile, notifs, reads }) {

    const [height, setHeight] = useState(400)
    const { alert, setAlert } = UserAlert();
    const [entries, setEntries] = useState([])
    const [fetchState, setFetchState] = useState(0)
    const [rawRequests, setRawRequests] = useState([])

    const screens = [
        {
            screen: "Dashboard", component: <UserDashboard
                documents={documents}
                setScreen={setScreen}
                profile={profile}
                fetchState={fetchState}
                entries={entries}
            />
        },
        { screen: "Citizen's Charts", component: <Citizens height={height} /> },
        {
            screen: "Services", component: <Services
                profile={profile}
                setScreen={setScreen}
                documents={documents}
            />
        },
        { screen: "About Us", component: <AboutUs /> },
        { screen: "Contact Us", component: <Contact /> },
        {
            screen: "Home > Profile > My Profile", component: <Profile
                user={profile}
                setAlert={setAlert}
                rawRequests={rawRequests}
            />
        },
        {
            screen: "Home > Profile > Notifications", component: <Notifications
                reads={reads}
                notifs={notifs}
                profile={profile}
            />
        },

    ];

    const FormSelector = (form) => {
        if (form.id == 'cedula') return <Cedula
            docu={form}
            profile={profile}
            setAlert={setAlert}
        />
        else if (form.id == 'clearance') return <Clearance
            docu={form}
            profile={profile}
            setAlert={setAlert}
        />
        else if (form.id == 'indigency') return <Indigency
            docu={form}
            profile={profile}
            setAlert={setAlert}
        />
        else if (form.id == 'residency') return <Residency
            docu={form}
            profile={profile}
            setAlert={setAlert}
        />

        return <RequestForms
            documents={form}
            profile={profile}
            setAlert={setAlert}
        />
    }

    useEffect(() => {

        const query = getRequestForms(profile.userId)

        try {
            const unsub = onSnapshot(query, snapshot => {
                if (!snapshot) {
                    setFetchState(-1)
                    return
                }

                if (snapshot.empty) {
                    setFetchState(2)
                    return
                }

                const forms = snapshot.docs.map(doc => ({ data: doc.data() }));

                const group = forms.reduce((group, form) => {
                    const { pick_up } = form.data.form;
                    group[pick_up['seconds']] = group[pick_up['seconds']] ?? [];
                    group[pick_up['seconds']].push(form);
                    return group;
                }, {});

                setRawRequests(forms)
                setEntries(group)
                setFetchState(1)
            })

            return () => {
                unsub()
            }

        } catch {
            setFetchState(-1)
        }

    }, []);

    return (
        <>
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