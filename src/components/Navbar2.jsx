import React, { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import logo from "../assets/images/logo.png";
import profileIcon from "../assets/images/Community Logo (6).png";
import arrow from "../assets/images/Arrow 1.png";
import arrow2 from "../assets/images/Arrow down 3.png";
import profile2 from "../assets/images/16.png";
import notifs from "../assets/images/17.png";
import logoutIcon from "../assets/images/18.png";

const Navbar2 = ({ profile, documents, setScreen, useAuth }) => {
  const { currentUser, logout } = useAuth();

  const [drop, setDrop] = useState(false);
  const [index, setIndex] = useState(-1);

  const items = [
    { label: "Profile", icon: profile2 },
    { label: "Notifications", icon: notifs },
    { label: "Log Out", icon: logoutIcon },
  ];

  const handleDrop = () => {
    setDrop(!drop);
  };

  const handleClick = (index) => {
    setDrop(!drop);

    let actual_index = index + 5;

    if (actual_index === 7) {
      logout();
      return;
    }

    setIndex(index);
    setScreen(actual_index);
  };

  return (
    <div className="bg-[#FEC51C] w-full fixed top-0 rounded-b-[30px] h-16 px-7 grid-cols-3 items-center z-10">
      <div className="flex h-full justify-between items-center pl-12">
        <img src={logo} className="h-[45px] w-[145px]" />
        <div></div>
        <div className="flex flex-col items-center text-white bg-[#1f2f3d7f] font-arimo py-2 h-16">
          <div className="flex flex-row items-center gap-12 px-4">
            <img className="rounded-full w-[48px] h-[48px] object-cover" src={profile.userAvatar || profileIcon} alt="" />
            <p className="font-arimo">{profile.firstname}</p>
            <div onClick={() => { handleDrop() }} className="h-auto w-[20px]">
              <img
                src={!drop ? arrow : arrow2}
                alt=""
                className="cursor-pointer"
              />
            </div>
          </div>
          <div
            className={
              !drop ? "hidden" : "font-arimo bg-[#1f2f3d7f] w-full mt-2 z-[100]"
            }
          >
            {items.map((items, i) => {
              return (
                <div
                  key={items.label}
                  onClick={() => {
                    handleClick(i);
                  }}
                >
                  <div
                    className={`flex flex-row items-center ${i === index
                      ? "bg-[#1F2F3D]"
                      : "hover:bg-[#00000024] cursor-pointer"
                      }`}
                  >
                    <img
                      className="object-scale-down h-5 w-5 m-2 ml-7"
                      src={items.icon}
                      alt=""
                    />
                    <div>{items.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
