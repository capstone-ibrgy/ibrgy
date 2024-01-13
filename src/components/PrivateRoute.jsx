import React from "react"
import { useAuth } from "../auth/AuthContext"
import UserSelector from "./UserSelector";
import { useLocation, Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
    const { currentUser } = useAuth();
    const { pathname } = useLocation();

    if (currentUser != null) {
        return (pathname === '/') ? <UserSelector currentUser={currentUser} /> : <Navigate to='/' />
    }

    return children
}