import React, { useState } from 'react'
import Cedula from '../screens/user/Cedula'
import Clearance from '../screens/user/Clearance'
import Residency from '../screens/user/Residency'
import Indigency from '../screens/user/Indigency'
import UserServices from '../screens/user/UserServices'

const Services = (props) => {
  
  const [screen, setScreen] = useState(0)

  const handleScreen = () =>{
    setScreen(props.setScreen)
  }

  const screens = [
    {screen: "UserServices", component: <UserServices/>},
    {screen: "Cedula", component: <Cedula/>},
    {screen: "Clearance", component: <Clearance/>},
    {screen: "Residency", component: <Residency/>},
    {screen: "Indigency", component: <Indigency/>}
  ]

  return (
    <div setScreen={setScreen}>
      {screens[screen].component}
    </div>
  )
}

export default Services