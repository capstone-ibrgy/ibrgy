import React, { useState } from 'react'
import { useAuth } from '../auth/AuthContext'
import AdminNavbar2 from '../components/AdminNavbar2'
import AdminSidebar from '../components/AdminSidebar'
import Dashboard2 from '../pages/Dashboard2'

const AdminLandingpage = (props) => {

  const [screen, setScreen] = useState(0);

  return <>
    <div className='relative overflow-hidden w-full flex flex-col bg-white'>
      <AdminNavbar2  setScreen={setScreen} className='' />  {/* removed "profile={props.profile} useAuth={useAuth}" */}
      <div className='h-screen flex flex-row'>
        <AdminSidebar setScreen={setScreen} className='flex-1' />
        <Dashboard2 screen={screen} setScreen={setScreen}  /> {/* removed "profile={props.profile}" */}
      </div>
    </div>
  </>
}

export default AdminLandingpage