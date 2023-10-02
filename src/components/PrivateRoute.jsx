import React from "react"
import { useAuth } from "../auth/AuthContext"
import Homepage from "../pages/Homepage";
import Dashboard from "../pages/Dashboard";
import { checkUserProfile } from '../api/services'
import Landingpage from "../pages/Landingpage";

export default function PrivateRoute({ children }) {
    const { currentUser } = useAuth();

    if (currentUser) {

        checkUserProfile('LyoBUK72FFnuovUBds04');
        // if () {

        // }
        return <Landingpage />;
    }

    return children;
}