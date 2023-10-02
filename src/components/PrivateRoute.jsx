import React from "react"
import { useAuth } from "../auth/AuthContext"
import Homepage from "../pages/Homepage";
import Dashboard from "../pages/Dashboard";
import { checkUserProfile } from '../api/services'

export default function PrivateRoute({ children }) {
    const { currentUser } = useAuth();

    if (currentUser) {

        checkUserProfile('LyoBUK72FFnuovUBds04');
        // if () {

        // }
        return <Dashboard />;
    }

    return children;
}