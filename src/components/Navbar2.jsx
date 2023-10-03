import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import profile from "../assets/images/Community Logo (6).png"
import arrow from "../assets/images/Arrow 1.png"

import { useAuth } from "../auth/AuthContext"

function Navbar2() {

    const { logout } = useAuth();
  return (
    <div className="bg-[#FEC51C] w-full rounded-b-[30px] h-16 px-7 fixed top-0 grid-cols-3 items-center">
        <div className="flex h-full justify-between items-center pl-12">
            <Link to="/">
            <img src={logo} className="h-[45px] w-[145px] cursor-pointer" />
            </Link>
            <div></div>
            <div className="flex items-center text-white bg-[#1f2f3d7f] font-arimo cursor-pointer gap-12 h-full p-8">
                <div className="w-[48px] h-[48px]">
                    <img src={profile} alt="" />
                </div>
                <p className="font-arimo">Precious_Hope</p>
                <div onClick={ () => { logout()}} className="h-auto w-[20px]">
                    <img src={arrow} alt="" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar2;
