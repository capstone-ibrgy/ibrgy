import React, { useEffect, useState } from "react"
import { useAuth } from "../auth/AuthContext"
import { useLocation, Navigate } from "react-router-dom";
import Landingpage from "../pages/Landingpage";
import { UserAlert } from '../models/UserAlert'
import { UserProfile } from '../models/UserProfile';
import { getUser } from '../api/services'
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Loader from '../components/Loader'
import UserInformation from "../pages/UserInformation";
import AdminLandingpage from "../pages/AdminLandingpage";

export default function PrivateRoute({ children }) {
    const { currentUser } = useAuth();
    const { pathname } = useLocation();

    const [isLoading, setLoading] = useState(true);
    const [show, setShow] = useState(false);
    const [valid, setValid] = useState(false);
    const { alert, setAlert, ERROR } = UserAlert();
    const { profile, updateProfile } = UserProfile();

    const getUserProfile = async () => {


    };

    if (currentUser != null) {

        if (profile.userId == null && profile.userId != currentUser.uid) {
            getUser(currentUser.uid).then((value) => {

                if (value.data() != null) {
                    const userProfile = value.data().profile
                    updateProfile(userProfile)
                    setValid(true);
                }

                setLoading(false)

            }).catch((e) => {
                setAlert({ type: ERROR, message: 'Something went wrong, please login again.' })
                setShow(true);
            });
        } else {
            setValid(false);
        }

        return (pathname === '/') ? (
            <div className="relative w-full h-screen">
                {isLoading ? <Loader message='Loading, please wait...' /> :
                    (!valid) ? <UserInformation /> :
                        profile.admin ?
                            <AdminLandingpage profile={profile} currentUser={currentUser} /> :
                            <Landingpage profile={profile} currentUser={currentUser} />
                }
                {show &&
                    <Snackbar
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        open={show} autoHideDuration={alert.duration}
                        onClose={() => {
                            setShow(false);
                            logout();
                        }}>
                        <Alert severity={alert.type}>{alert.message}</Alert>
                    </Snackbar>}
            </div>
        ) : <Navigate to='/' />
    }

    return children
}