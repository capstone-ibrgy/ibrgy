import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/images/background.svg";
import google from "../assets/images/google.png";
import fb from "../assets/images/fb.png";

function Signup() {
  return (
    <div className="relative h-screen w-full bg-[#FEC51C]">
      <div className="flex flex-row">
        <div></div>
        <div className="w-[35%] flex flex-col">
          <Link to="/">
            <div className="h-20 text-md font-bold font-arimo p-10">Back</div>
          </Link>
          <div className="flex flex-col w-full font-arimo italic px-16 font-bold text-[#1F2F3D] text-[26px]">
            <div className="flex justify-start ">
              <h1 className="">Tinood nga Serbisyo, </h1>
            </div>
            <div className="flex justify-end">
              <h1 className="">Tuhod sa Kinahanglanon!</h1>
            </div>
          </div>
        </div>
      </div>
      <img src={bg} className="absolute bottom-0" />
    </div>
  );
}

export default Signup;
