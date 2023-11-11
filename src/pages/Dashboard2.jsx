import React, { useEffect, useState } from 'react'
import { useAuth } from '../auth/AuthContext'
import AdminDashboard from '../screens/admin/AdminDashboard';
import Barangay from './Barangay';
import AdminServices from './AdminServices';
import Requests from './Requests';
import Cedula from '../screens/admin/Cedula'
import Clearance from '../screens/admin/Clearance'
import Residency from '../screens/admin/Residency'
import Indigency from '../screens/admin/Indigency'
import Profile from '../screens/admin/Profile'
import AddDocuments from '../screens/admin/AddDocuments';

function Dashboard2(props) {

    //const { currentUser, logout } = useAuth();

    const screens = [
        { screen: "Dashboard", component: <AdminDashboard profile={props.profile} /> },
        { screen: "The Barangay", component: <Barangay /> },
        { screen: "Services", component: <AdminServices setScreen={props.setScreen}/> },
        { screen: "Requests", component: <Requests /> },
        { screen: "Requests > Cedula", component: <Cedula /> },
        { screen: "Requests > Barangay Clearance", component: <Clearance /> },
        { screen: "Requests > Certificate of Residency", component: <Residency /> },
        { screen: "Requests > Certificate of Indigency", component: <Indigency /> },
        { screen: "Profile > My Profile", component: <Profile /> },
        { screen: "Services > Add Documents", component: <AddDocuments /> },
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

export default Dashboard2