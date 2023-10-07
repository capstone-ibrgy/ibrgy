import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
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
import arrow from '../assets/images/Arrow right.png'
import arrow2 from '../assets/images/Arrow right 3.png'

const Sidebar = (props) => {

    const navigate = useNavigate();

    const [side, setSide] = useState(false)
    const [open, setOpen] = useState(props.open)
    const [highlight, setHighlight] = useState(props.data)
    const [highlight2, setHighlight2] = useState(props.data2)
    const [highlight3, setHighlight3] = useState(props.data3)
    const [highlight4, setHighlight4] = useState(props.data4)
    const [highlight5, setHighlight5] = useState(props.data5)
    const [highlight41, setHighlight41] = useState(props.data41)
    const [highlight42, setHighlight42] = useState(props.data42)
    const [highlight43, setHighlight43] = useState(props.data43)
    const [highlight44, setHighlight44] = useState(props.data44)

    const handleSide = () =>{
        setSide(!side)
    }

    const handleHighlight = () => {
        navigate('/landingpage')
    }
    const handleHighlight2 = () => {
        navigate('/about-us')
    }
    const handleHighlight3 = () => {
        navigate('/citizens-charter')
    }
    const handleHighlight4 = () => {
        navigate('/services')
    }
    const handleHighlight5 = () => {
        navigate('/contact-us')
    }
    const handleHighlight41 = () => {
        navigate('/services/community-tax-certificate')
    }
    const handleHighlight42 = () => {
        navigate('/services/barangay-clearance')
    }
    const handleHighlight43 = () => {
        navigate('/services/certificate-of-residency')
    }
    const handleHighlight44 = () => {
        navigate('/services/certificate-of-indigency')
    }

  return (
    <div className={!side ? 'w-[20%] h-screen bg-[#1F2F3D]' : 'w-[4%] h-screen bg-[#1F2F3D] ease-out duration-500'}>
        <div className='h-[20%] w-full relative'>
            <div className='bottom-8 xl:right-5 right-2 absolute'>
                <img 
                onClick={handleSide}
                className='object-scale-down h-3 w-3 lg:h-5 lg:w-5 md:h-4 md:w-4 cursor-pointer' src={burger} alt="" />
            </div>
        </div>
        <div className='h-[80%] w-full'>
            <ul>
                <li
                onClick={handleHighlight}
                className={`px-1 py-4 sm:px-2 lg:px-4 md:px-3 border-b-2 ${!highlight ? 'border-white cursor-pointer' : 'border-[#FEC51C] bg-[#FEC51C] cursor-default'}`}> 
                    <div className='flex flex-row'>
                        <img className={!side ? 'object-scale-down mx-auto h-2 w-2 lg:h-5 lg:w-5 md:h-4 md:w-4 sm:h-3 sm:w-3' : 'object-scale-down h-2 w-2 lg:h-5 lg:w-5 md:h-4 md:w-4 sm:h-3 sm:w-3 ml-0 md:ml-1'} src={!highlight ? dash : dash2} alt="" />
                        <div className={!side ? `font-bold w-[220px] text-xs md:text-sm lg:text-base font-arimo ${!highlight ? 'text-white' : 'text-[#1F2F3D]'}` : 'hidden'}>
                            DASHBOARD
                        </div>
                    </div>
                </li>
                <li
                onClick={handleHighlight2}
                className={`px-1 py-4 sm:px-2 lg:px-4 md:px-3 border-b-2 ${!highlight2 ? 'border-white cursor-pointer' : 'border-[#FEC51C] bg-[#FEC51C] cursor-default'}`}> 
                    <div className='flex flex-row'>
                        <img className={!side ? 'object-scale-down h-2 w-2 lg:h-5 lg:w-5 md:h-4 md:w-4 sm:h-3 sm:w-3 mx-auto' : 'object-scale-down h-2 w-2 lg:h-5 lg:w-5 md:h-4 md:w-4 sm:h-3 sm:w-3 ml-0 md:ml-1'} src={!highlight2 ? about : about2} alt="" />
                        <div className={!side ? `font-bold w-[220px] text-xs md:text-sm lg:text-base font-arimo ${!highlight2 ? 'text-white' : 'text-[#1F2F3D]'}` : 'hidden'}>
                            ABOUT US
                        </div>
                    </div>
                </li>
                <li
                onClick={handleHighlight3}
                className={`px-1 py-4 sm:px-2 lg:px-4 md:px-3 border-b-2 ${!highlight3 ? 'border-white cursor-pointer' : 'border-[#FEC51C] bg-[#FEC51C] cursor-default'}`}> 
                    <div className='flex flex-row'>
                        <img className={!side ? 'object-scale-down h-2 w-2 lg:h-5 lg:w-5 md:h-4 md:w-4 sm:h-3 sm:w-3 mx-auto' : 'object-scale-down h-2 w-2 lg:h-5 lg:w-5 md:h-4 md:w-4 sm:h-3 sm:w-3 ml-0 md:ml-1'} src={!highlight3 ? flag : flag2} alt="" />
                        <div className={!side ? `font-bold w-[220px] text-xs md:text-sm lg:text-base font-arimo ${!highlight3 ? 'text-white' : 'text-[#1F2F3D]'}` : 'hidden'}>
                            CITIZEN'S CHARTER
                        </div>
                    </div>
                </li>
                <li
                onClick={handleHighlight4}
                className={`px-1 py-4 sm:px-2 lg:px-4 md:px-3 border-b-2 ${!highlight4 ? 'border-white cursor-pointer' : 'border-[#FEC51C] bg-[#FEC51C] cursor-default'}`}> 
                    <div className='flex flex-row'>
                        <img className={!side ? 'object-scale-down h-2 w-2 lg:h-5 lg:w-5 md:h-4 md:w-4 sm:h-3 sm:w-3 mx-auto' : 'object-scale-down h-2 w-2 lg:h-5 lg:w-5 md:h-4 md:w-4 sm:h-3 sm:w-3 ml-0 md:ml-1'} src={!highlight4 ? hands : hands2} alt="" />
                        <div className={!side ? `font-bold w-[220px] text-xs md:text-sm lg:text-base font-arimo ${!highlight4 ? 'text-white' : 'text-[#1F2F3D]'}` : 'hidden'}>
                            SERVICES
                        </div>
                    </div>
                </li>
                <ul className={!open ? 'hidden' : `${!side ? 'border-b-2 border-white' : 'hidden'} `}>
                    <li
                    onClick={handleHighlight41}
                    className={`px-1 py-4 sm:px-2 lg:px-4 md:px-3  ${!highlight41 ? 'cursor-pointer bg-[#192732]' : 'bg-[#d7aa23] cursor-default'}`}> 
                        <div className='flex flex-row'>
                            <img className='object-scale-down h-2 w-2 md:h-4 md:w-4 sm:h-3 sm:w-3 mx-auto' src={!highlight41 ? arrow : arrow2} alt="" />
                            <div className={!side ? `w-[220px] font-bold text-xs md:text-sm font-arimo ${!highlight41 ? 'text-white' : 'text-[#1F2F3D]'}` : 'hidden'}>
                                Community Tax Certificate (Cedula)
                            </div>
                        </div>
                    </li>
                    <li 
                    onClick={handleHighlight42}
                    className={`px-1 py-4 sm:px-2 lg:px-4 md:px-3  ${!highlight42 ? 'cursor-pointer bg-[#192732]' : 'bg-[#d7aa23] cursor-default'}`}>
                        <div className='flex flex-row'>
                            <img className='object-scale-down h-2 w-2 md:h-4 md:w-4 sm:h-3 sm:w-3 mx-auto' src={!highlight42 ? arrow : arrow2} alt="" />
                            <div className={!side ? `w-[220px] font-bold text-xs md:text-sm font-arimo ${!highlight42 ? 'text-white' : 'text-[#1F2F3D]'}` : 'hidden'}>
                                Barangay Clearance
                            </div>
                        </div>
                    </li>
                    <li 
                    onClick={handleHighlight43}
                    className={`px-1 py-4 sm:px-2 lg:px-4 md:px-3  ${!highlight43 ? 'cursor-pointer bg-[#192732]' : 'bg-[#d7aa23] cursor-default'}`}>
                        <div className='flex flex-row'>
                            <img className='object-scale-down h-2 w-2 md:h-4 md:w-4 sm:h-3 sm:w-3 mx-auto' src={!highlight43 ? arrow : arrow2} alt="" />
                            <div className={!side ? `w-[220px] font-bold text-xs md:text-sm font-arimo ${!highlight43 ? 'text-white' : 'text-[#1F2F3D]'}` : 'hidden'}>
                                Certificate of Residency
                            </div>
                        </div>
                    </li>
                    <li 
                    onClick={handleHighlight44}
                    className={`px-1 py-4 sm:px-2 lg:px-4 md:px-3  ${!highlight44 ? 'cursor-pointer bg-[#192732]' : 'bg-[#d7aa23] cursor-default'}`}>
                        <div className='flex flex-row'>
                            <img className='object-scale-down h-2 w-2 md:h-4 md:w-4 sm:h-3 sm:w-3 mx-auto' src={!highlight44 ? arrow : arrow2} alt="" />
                            <div className={!side ? `w-[220px] font-bold text-xs md:text-sm font-arimo ${!highlight44 ? 'text-white' : 'text-[#1F2F3D]'}` : 'hidden'}>
                                Certificate of Indigency
                            </div>
                        </div>
                    </li>
                </ul>    
                <li
                onClick={handleHighlight5}
                className={`px-1 py-4 sm:px-2 lg:px-4 md:px-3 border-b-2 ${!highlight5 ? 'border-white cursor-pointer' : 'border-[#FEC51C] bg-[#FEC51C] cursor-default'}`}> 
                    <div className='flex flex-row'>
                        <img className={!side ? 'object-scale-down h-2 w-2 lg:h-5 lg:w-5 md:h-4 md:w-4 sm:h-3 sm:w-3 mx-auto' : 'object-scale-down h-2 w-2 lg:h-5 lg:w-5 md:h-4 md:w-4 sm:h-3 sm:w-3 ml-0 md:ml-1'} src={!highlight5 ? call : call2} alt="" />
                        <div className={!side ? ` font-bold w-[220px] text-xs md:text-sm lg:text-base font-arimo ${!highlight5 ? 'text-white' : 'text-[#1F2F3D]'}` : 'hidden'}>
                            CONTACT US
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        
    </div>
  )
}

export default Sidebar