import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import profile from "../assets/images/Community Logo (6).png"
import arrow from "../assets/images/Arrow 1.png"
import arrow2 from "../assets/images/Arrow down 3.png"
import profile2 from "../assets/images/16.png"
import notifs from "../assets/images/17.png"
import logout from "../assets/images/18.png"

const Navbar2 = (props) => {

    const navigate = useNavigate()

    const [drop, setDrop] = useState(props.drop)
    const [highlight, setHighlight] = useState(props.high)
    const [highlight2, setHighlight2] = useState(props.high2)
    const [highlight3, setHighlight3] = useState(props.high3)

    const handleDrop = () => {
        setDrop(!drop)
    }

    const handleHighlight = () => {
        navigate('/profile')
    }

    const handleHighlight2 = () => {
        navigate('/notifications')
    }

    const handleHighlight3 = () => {
        navigate('/')
    }

    //Add onClick function on each "li"

  return (
    <div className="bg-[#FEC51C] w-full rounded-b-[30px] h-16 px-7 fixed top-0 grid-cols-3 items-center">
        <div className="flex h-full justify-between items-center pl-12">
            <img src={logo} className="h-[45px] w-[145px]" />
            <div></div>
            <div className='flex flex-col items-center text-white bg-[#1f2f3d7f] font-arimo py-2 h-16'>
                <div className="flex flex-row items-center gap-12 px-4">
                    <div className="w-[48px] h-[48px]">
                        <img src={profile} alt="" />
                    </div>
                    <p className="font-arimo">Precious_Hope</p>
                    <div 
                    onClick={handleDrop}
                    className="h-auto w-[20px]">
                        <img 
                        src={!drop ? arrow : arrow2} alt=""
                        className="cursor-pointer" />
                    </div>
                </div>
                <div className={!drop ? 'hidden' : 'font-arimo bg-[#1f2f3d7f] w-full mt-2'}>
                    <ul>
                        <li
                        onClick={handleHighlight}>
                            <div className={`flex flex-row items-center ${!highlight ? 'hover:bg-[#00000024] cursor-pointer' : 'bg-[#1F2F3D]'}`}>
                                <img className="object-scale-down h-5 w-5 m-2 ml-7" src={profile2} alt="" />
                                <div>My Profile</div>
                            </div>
                        </li>
                        <li
                        onClick={handleHighlight2}>
                            <div className={`flex flex-row items-center ${!highlight2 ? 'hover:bg-[#00000024] cursor-pointer' : 'bg-[#1F2F3D]'}`}>
                                <img className="object-scale-down h-5 w-5 m-2 ml-7" src={notifs} alt="" />
                                <div>Notifications</div>
                            </div>
                        </li>
                        <li
                        onClick={handleHighlight3}>
                            <div className='flex flex-row items-center hover:bg-[#00000024] cursor-pointer'>
                                <img className="object-scale-down h-5 w-5 m-2 ml-7" src={logout} alt="" />
                                <div>Log Out</div>
                            </div>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    </div>
  );
}

export default Navbar2;
