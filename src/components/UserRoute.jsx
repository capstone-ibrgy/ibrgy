import React from "react"
import { Route, Navigate } from "react-router-dom"
import { useAuth } from "../auth/AuthContext"
import Homepage from "../pages/Homepage";

export default function UserRoute({ children }) {
    const { currentUser } = useAuth();

    if (!currentUser) {
        return <Homepage />;
    }

    return children;
}