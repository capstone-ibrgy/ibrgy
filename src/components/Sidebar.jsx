import React, {useState} from 'react'
import burger from '../assets/images/Community Logo (11).png'
import dash from '../assets/images/s.png'
import dash2 from '../assets/images/6.png'
import about from '../assets/images/d.png'
import about2 from '../assets/images/7.png'
import flag from '../assets/images/Community Logo (13).png'
import flag2 from '../assets/images/Community Logo (10).png'
import hands from '../assets/images/f.png'
import hands2 from '../assets/images/8.png'
import call from '../assets/images/g.png'
import call2 from '../assets/images/10.png'
import triangle from '../assets/images/triangle.png'

const Sidebar = () => {

    const [side, setSide] = useState(false)
    const [highlight, setHighlight] = useState(true)
    const [highlight2, setHighlight2] = useState(false)
    const [highlight3, setHighlight3] = useState(false)
    const [highlight4, setHighlight4] = useState(false)
    const [highlight5, setHighlight5] = useState(false)

    const handleSide = () =>{
        setSide(!side)
    }

    const handleHighlight = () => {
        setHighlight(true)
        setHighlight2(false)
        setHighlight3(false)
        setHighlight4(false)
        setHighlight5(false)
    }
    const handleHighlight2 = () => {
        setHighlight(false)
        setHighlight2(true)
        setHighlight3(false)
        setHighlight4(false)
        setHighlight5(false)
    }
    const handleHighlight3 = () => {
        setHighlight(false)
        setHighlight2(false)
        setHighlight3(true)
        setHighlight4(false)
        setHighlight5(false)
    }
    const handleHighlight4 = () => {
        setHighlight(false)
        setHighlight2(false)
        setHighlight3(false)
        setHighlight4(true)
        setHighlight5(false)
    }
    const handleHighlight5 = () => {
        setHighlight(false)
        setHighlight2(false)
        setHighlight3(false)
        setHighlight4(false)
        setHighlight5(true)
    }

  return (
    <div className={!side ? 'w-[20%] h-screen bg-[#1F2F3D] ' : 'w-[4%] h-screen bg-[#1F2F3D] ease-out duration-500'}>
        <div className='h-[20%] w-full relative'>
            <div className='bottom-8 right-5 absolute'>
                <img 
                onClick={handleSide}
                className='object-scale-down h-5 w-5 cursor-pointer' src={burger} alt="" />
            </div>
        </div>
        <div className='h-[80%] w-full'>
            <ul>
                <li
                onClick={handleHighlight}
                className={`p-4 border-b-2 ${!highlight ? 'border-white cursor-pointer' : 'border-yellow-400 bg-yellow-400 cursor-default'}`}> 
                    <div className='flex flex-row'>
                        <img className={!side ? 'object-scale-down h-5 w-5 mx-auto' : 'object-scale-down h-5 w-5 ml-1'} src={!highlight ? dash : dash2} alt="" />
                        <div className={!side ? `font-bold w-[220px] font-arimo ${!highlight ? 'text-white' : 'text-[#1F2F3D]'}` : 'hidden'}>
                            DASHBOARD
                        </div>
                        <div className={!side ? `${!highlight ? 'hidden' : 'fixed object-scale-down h-[50px] w-[50px] left-[257px] top-[141.5px]'}` : 'hidden'}>
                            <img src={triangle} alt="" />
                        </div> 
                    </div>
                </li>
                <li
                onClick={handleHighlight2}
                className={`p-4 border-b-2 ${!highlight2 ? 'border-white cursor-pointer' : 'border-yellow-400 bg-yellow-400 cursor-default'}`}> 
                    <div className='flex flex-row'>
                        <img className={!side ? 'object-scale-down h-5 w-5 mx-auto' : 'object-scale-down h-5 w-5 ml-1'} src={!highlight2 ? about : about2} alt="" />
                        <div className={!side ? `font-bold w-[220px] font-arimo ${!highlight2 ? 'text-white' : 'text-[#1F2F3D]'}` : 'hidden'}>
                            ABOUT US
                        </div>
                        <div className={!side ? `${!highlight2 ? 'hidden' : 'fixed object-scale-down h-[50px] w-[50px] left-[257px] top-[199px]'}` : 'hidden'}>
                            <img src={triangle} alt="" />
                        </div>
                    </div>
                </li>
                <li
                onClick={handleHighlight3}
                className={`p-4 border-b-2 ${!highlight3 ? 'border-white cursor-pointer' : 'border-yellow-400 bg-yellow-400 cursor-default'}`}> 
                    <div className='flex flex-row'>
                        <img className={!side ? 'object-scale-down h-5 w-5 mx-auto' : 'object-scale-down h-5 w-5 ml-1'} src={!highlight3 ? flag : flag2} alt="" />
                        <div className={!side ? `font-bold w-[220px] font-arimo ${!highlight3 ? 'text-white' : 'text-[#1F2F3D]'}` : 'hidden'}>
                            CITIZEN'S CHARTER
                        </div>
                        <div className={!side ? `${!highlight3 ? 'hidden' : 'fixed object-scale-down h-[50px] w-[50px] left-[257px] top-[256.5px]'}` : 'hidden'}>
                            <img src={triangle} alt="" />
                        </div>
                    </div>
                </li>
                <li
                onClick={handleHighlight4}
                className={`p-4 border-b-2 ${!highlight4 ? 'border-white cursor-pointer' : 'border-yellow-400 bg-yellow-400 cursor-default'}`}> 
                    <div className='flex flex-row'>
                        <img className={!side ? 'object-scale-down h-5 w-5 mx-auto' : 'object-scale-down h-5 w-5 ml-1'} src={!highlight4 ? hands : hands2} alt="" />
                        <div className={!side ? `font-bold w-[220px] font-arimo ${!highlight4 ? 'text-white' : 'text-[#1F2F3D]'}` : 'hidden'}>
                            SERVICES
                        </div>
                        <div className={!side ? `${!highlight4 ? 'hidden' : 'fixed object-scale-down h-[50px] w-[50px] left-[257px] top-[314px]'}` : 'hidden'}>
                            <img src={triangle} alt="" />
                        </div>
                    </div>
                </li>
                <li
                onClick={handleHighlight5}
                className={`p-4 border-b-2 ${!highlight5 ? 'border-white cursor-pointer' : 'border-yellow-400 bg-yellow-400 cursor-default'}`}> 
                    <div className='flex flex-row'>
                        <img className={!side ? 'object-scale-down h-5 w-5 mx-auto' : 'object-scale-down h-5 w-5 ml-1'} src={!highlight5 ? call : call2} alt="" />
                        <div className={!side ? `font-bold w-[220px] font-arimo ${!highlight5 ? 'text-white' : 'text-[#1F2F3D]'}` : 'hidden'}>
                            CONTACT US
                        </div>
                        <div className={!side ? `${!highlight5 ? 'hidden' : 'fixed object-scale-down h-[50px] w-[50px] left-[257px] top-[371.5px]'}` : 'hidden'}>
                            <img src={triangle} alt="" />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        
    </div>
  )
}

export default Sidebar