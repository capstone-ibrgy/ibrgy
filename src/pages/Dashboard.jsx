import React from 'react'
import { useAuth } from '../auth/AuthContext'

function Dashboard() {

    const { currentUser, logout } = useAuth();

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={() => {
                logout();
            }}>Logout</button>
        </div>
    )
}

export default Dashboard