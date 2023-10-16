import React from 'react'
import { useAuth } from '../auth/AuthContext'
import Navbar2 from '../components/Navbar2'
import Sidebar from '../components/Sidebar'
import Dashboard from '../pages/Dashboard'

const Landingpage = (props) => {
  const data = true
  const data2 = false
  const data3 = false
  const data4 = false
  const data5 = false

  return <>
    <div className='relative overflow-hidden w-full flex flex-col bg-white'>
      <Navbar2 profile={props.profile} useAuth={useAuth} className='' />
      <div className='h-screen flex flex-row'>
        <Sidebar className='flex-1' data={data} data2={data2} data3={data3} data4={data4} data5={data5} />
        <Dashboard profile={props.profile} />
      </div>
    </div>
  </>
}

export default Landingpage