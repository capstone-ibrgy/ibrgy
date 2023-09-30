import React, {useState} from 'react'
import burger from '../assets/images/Community Logo (11).png'
import dash from '../assets/images/s.png'
import about from '../assets/images/d.png'
import flag from '../assets/images/Community Logo (13).png'
import hands from '../assets/images/f.png'
import call from '../assets/images/g.png'

const Sidebar = () => {

    const [side, setSide] = useState(false)

    const handleSide = () =>{
        setSide(!side)
    }

  return (
    <div className='w-full h-screen'>
        <div className={!side ? 'w-[20%] h-screen bg-[#1F2F3D]' : 'w-[4%] h-screen bg-[#1F2F3D] ease-out duration-500'}>
            <div className='h-[20%] w-full relative'>
                <div className='bottom-8 right-5 absolute'>
                    <img 
                    onClick={handleSide}
                    className='object-scale-down h-5 w-5 cursor-pointer' src={burger} alt="" />
                </div>
            </div>
            <div className='h-[80%] w-full'>
                <ul>
                    <li className="p-4 border-b-2 border-white"> 
                        <div className='flex flex-row'>
                            <img className={!side ? 'object-scale-down h-5 w-5 mx-auto' : 'object-scale-down h-5 w-5 ml-1'} src={dash} alt="" />
                            <div className={!side ? 'text-white font-bold w-[220px]' : 'hidden'}>
                                DASHBOARD
                            </div>
                        </div>
                    </li>
                    <li className="p-4 border-b-2 border-white"> 
                        <div className='flex flex-row'>
                            <img className={!side ? 'object-scale-down h-5 w-5 mx-auto' : 'object-scale-down h-5 w-5 ml-1'} src={about} alt="" />
                            <div className={!side ? 'text-white font-bold w-[220px]' : 'hidden'}>
                                ABOUT US
                            </div>
                        </div>
                    </li>
                    <li className="p-4 border-b-2 border-white"> 
                        <div className='flex flex-row'>
                            <img className={!side ? 'object-scale-down h-5 w-5 mx-auto' : 'object-scale-down h-5 w-5 ml-1'} src={flag} alt="" />
                            <div className={!side ? 'text-white font-bold w-[220px]' : 'hidden'}>
                                CITIZEN'S CHARTER
                            </div>
                        </div>
                    </li>
                    <li className="p-4 border-b-2 border-white"> 
                        <div className='flex flex-row'>
                            <img className={!side ? 'object-scale-down h-5 w-5 mx-auto' : 'object-scale-down h-5 w-5 ml-1'} src={hands} alt="" />
                            <div className={!side ? 'text-white font-bold w-[220px]' : 'hidden'}>
                                SERVICES
                            </div>
                        </div>
                    </li>
                    <li className="p-4 border-b-2 border-white"> 
                        <div className='flex flex-row'>
                            <img className={!side ? 'object-scale-down h-5 w-5 mx-auto' : 'object-scale-down h-5 w-5 ml-1'} src={call} alt="" />
                            <div className={!side ? 'text-white font-bold w-[220px]' : 'hidden'}>
                                CONTACT US
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            
        </div>
    </div>
  )
}

export default Sidebar