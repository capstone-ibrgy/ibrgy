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
    const [highlight31, setHighlight31] = useState(props.data31)
    const [highlight32, setHighlight32] = useState(props.data32)
    const [highlight33, setHighlight33] = useState(props.data33)
    const [highlight34, setHighlight34] = useState(props.data34)

    const handleSide = () =>{
        setSide(!side)
    }

    const handleHighlight = () => {
        navigate('/landingpage')
    }
    const handleHighlight2 = () => {
        navigate('/citizens-charter')
    }
    const handleHighlight3 = () => {
        navigate('/services')
    }
    const handleHighlight4 = () => {
        navigate('/about-us')
    }
    const handleHighlight5 = () => {
        navigate('/contact-us')
    }
    const handleHighlight31 = () => {
        navigate('/services/community-tax-certificate')
    }
    const handleHighlight32 = () => {
        navigate('/services/barangay-clearance')
    }
    const handleHighlight33 = () => {
        navigate('/services/certificate-of-residency')
    }
    const handleHighlight34 = () => {
        navigate('/services/certificate-of-indigency')
    }

  return (
    <div className={!side ? 'w-[20%] h-auto bg-[#1F2F3D]' : 'w-[4%] h-auto bg-[#1F2F3D] ease-out duration-500'}>
        <div className='h-[20%] w-full relative '>
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
                        <img className={!side ? 'object-scale-down h-2 w-2 lg:h-5 lg:w-5 md:h-4 md:w-4 sm:h-3 sm:w-3 mx-auto' : 'object-scale-down h-2 w-2 lg:h-5 lg:w-5 md:h-4 md:w-4 sm:h-3 sm:w-3 ml-0 md:ml-1'} src={!highlight2 ? flag : flag2} alt="" />
                        <div className={!side ? `font-bold w-[220px] text-xs md:text-sm lg:text-base font-arimo ${!highlight2 ? 'text-white' : 'text-[#1F2F3D]'}` : 'hidden'}>
                            CITIZEN'S CHARTER
                        </div>
                    </div>
                </li>
                <li
                onClick={handleHighlight3}
                className={`px-1 py-4 sm:px-2 lg:px-4 md:px-3 border-b-2 ${!highlight3 ? 'border-white cursor-pointer' : 'border-[#FEC51C] bg-[#FEC51C] cursor-default'}`}> 
                    <div className='flex flex-row'>
                        <img className={!side ? 'object-scale-down h-2 w-2 lg:h-5 lg:w-5 md:h-4 md:w-4 sm:h-3 sm:w-3 mx-auto' : 'object-scale-down h-2 w-2 lg:h-5 lg:w-5 md:h-4 md:w-4 sm:h-3 sm:w-3 ml-0 md:ml-1'} src={!highlight3 ? hands : hands2} alt="" />
                        <div className={!side ? `font-bold w-[220px] text-xs md:text-sm lg:text-base font-arimo ${!highlight3 ? 'text-white' : 'text-[#1F2F3D]'}` : 'hidden'}>
                            SERVICES
                        </div>
                    </div>
                </li>
                <ul className={!open ? 'hidden' : `${!side ? 'border-b-2 border-white' : 'hidden'} `}>
                    <li
                    onClick={handleHighlight31}
                    className={`px-1 py-4 sm:px-2 lg:px-4 md:px-3  ${!highlight31 ? 'cursor-pointer bg-[#192732]' : 'bg-[#d7aa23] cursor-default'}`}> 
                        <div className='flex flex-row'>
                            <img className='object-scale-down h-2 w-2 md:h-4 md:w-4 sm:h-3 sm:w-3 mx-auto' src={!highlight31 ? arrow : arrow2} alt="" />
                            <div className={!side ? `w-[220px] font-bold text-xs md:text-sm font-arimo ${!highlight31 ? 'text-white' : 'text-[#1F2F3D]'}` : 'hidden'}>
                                Community Tax Certificate (Cedula)
                            </div>
                        </div>
                    </li>
                    <li 
                    onClick={handleHighlight32}
                    className={`px-1 py-4 sm:px-2 lg:px-4 md:px-3  ${!highlight32 ? 'cursor-pointer bg-[#192732]' : 'bg-[#d7aa23] cursor-default'}`}>
                        <div className='flex flex-row'>
                            <img className='object-scale-down h-2 w-2 md:h-4 md:w-4 sm:h-3 sm:w-3 mx-auto' src={!highlight32 ? arrow : arrow2} alt="" />
                            <div className={!side ? `w-[220px] font-bold text-xs md:text-sm font-arimo ${!highlight32 ? 'text-white' : 'text-[#1F2F3D]'}` : 'hidden'}>
                                Barangay Clearance
                            </div>
                        </div>
                    </li>
                    <li 
                    onClick={handleHighlight33}
                    className={`px-1 py-4 sm:px-2 lg:px-4 md:px-3  ${!highlight33 ? 'cursor-pointer bg-[#192732]' : 'bg-[#d7aa23] cursor-default'}`}>
                        <div className='flex flex-row'>
                            <img className='object-scale-down h-2 w-2 md:h-4 md:w-4 sm:h-3 sm:w-3 mx-auto' src={!highlight33 ? arrow : arrow2} alt="" />
                            <div className={!side ? `w-[220px] font-bold text-xs md:text-sm font-arimo ${!highlight33 ? 'text-white' : 'text-[#1F2F3D]'}` : 'hidden'}>
                                Certificate of Residency
                            </div>
                        </div>
                    </li>
                    <li 
                    onClick={handleHighlight34}
                    className={`px-1 py-4 sm:px-2 lg:px-4 md:px-3  ${!highlight34 ? 'cursor-pointer bg-[#192732]' : 'bg-[#d7aa23] cursor-default'}`}>
                        <div className='flex flex-row'>
                            <img className='object-scale-down h-2 w-2 md:h-4 md:w-4 sm:h-3 sm:w-3 mx-auto' src={!highlight34 ? arrow : arrow2} alt="" />
                            <div className={!side ? `w-[220px] font-bold text-xs md:text-sm font-arimo ${!highlight34 ? 'text-white' : 'text-[#1F2F3D]'}` : 'hidden'}>
                                Certificate of Indigency
                            </div>
                        </div>
                    </li>
                </ul>
                <li
                onClick={handleHighlight4}
                className={`px-1 py-4 sm:px-2 lg:px-4 md:px-3 border-b-2 ${!highlight4 ? 'border-white cursor-pointer' : 'border-[#FEC51C] bg-[#FEC51C] cursor-default'}`}> 
                    <div className='flex flex-row'>
                        <img className={!side ? 'object-scale-down h-2 w-2 lg:h-5 lg:w-5 md:h-4 md:w-4 sm:h-3 sm:w-3 mx-auto' : 'object-scale-down h-2 w-2 lg:h-5 lg:w-5 md:h-4 md:w-4 sm:h-3 sm:w-3 ml-0 md:ml-1'} src={!highlight4 ? about : about2} alt="" />
                        <div className={!side ? `font-bold w-[220px] text-xs md:text-sm lg:text-base font-arimo ${!highlight4 ? 'text-white' : 'text-[#1F2F3D]'}` : 'hidden'}>
                            ABOUT US
                        </div>
                    </div>
                </li>  
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