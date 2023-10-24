import React, { useState } from 'react'
import { useAuth } from '../auth/AuthContext'
import Navbar2 from '../components/Navbar2'
import Sidebar from '../components/Sidebar'
import Dashboard from '../pages/Dashboard'

const Landingpage = (props) => {

  const [screen, setScreen] = useState(0);

  return <>
    <div className='relative overflow-hidden w-full flex flex-col bg-white'>
      <Navbar2 profile={props.profile} useAuth={useAuth} setScreen={setScreen} className='' />
      <div className='h-screen flex flex-row'>
        <Sidebar setScreen={setScreen} className='flex-1' />
        <Dashboard screen={screen} setScreen={setScreen} profile={props.profile} />
      </div>
    </div>
  </>
}

export default Landingpage