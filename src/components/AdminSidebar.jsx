import React, { useState } from "react";
import burger from "../assets/images/Community Logo (11).png";
import home from "../assets/images/s.png";
import home2 from "../assets/images/6.png";
import request from "../assets/images/21.png";
import request2 from "../assets/images/20.png";
import flag from "../assets/images/Community Logo (13).png";
import flag2 from "../assets/images/Community Logo (10).png";
import hands from "../assets/images/f.png";
import hands2 from "../assets/images/8.png";
import triangle from "../assets/images/triangle.png";
import arrow from "../assets/images/Arrow right.png";
import arrow2 from "../assets/images/Arrow right 3.png";

const AdminSidebar = ({ setScreen, screen, documents }) => {
  const [side, setSide] = useState(true);
  const [index, setIndex] = useState(0);
  const [onService, setOnService] = useState(false);

  const items = [
    { label: "Dashboard", icon: home, selected: home2 },
    { label: "The Barangay", icon: flag, selected: flag2 },
    { label: "Services", icon: hands, selected: hands2 },
    { label: "Requests", icon: request, selected: request2 },
  ];

  const services = [
    "Community Tax Certificate (Cedula)",
    "Barangay Clearance",
    "Certificate of Residency",
    "Certificate of Indigency",
  ];

  const handleSide = () => {
    setSide(!side);
  };

  const handleClick = (index) => {
    setIndex(index);

    if (index === 3 || index > 3) {
      setOnService(true);
    } else {
      setOnService(false);
    }

    setScreen(index);
  };

  const select = (i, index) => {
    return i === 3 && index > 3;
  };

  return (
    <div
      className={`${
        side ? "w-[25%]" : "w-[4%] "
      } flex flex-col pt-16 h-full bg-[#1F2F3D] ease-in-out duration-500`}
    >
      <div
        className={`flex ${
          side ? "p-5 justify-end" : "py-5 justify-center"
        } w-full `}
      >
        <img
          onClick={handleSide}
          src={burger}
          className="self-end w-5 h-5 cursor-pointer"
        />
      </div>

      <div className="flex flex-col font-arimo font-bold items-center">
        {items.map((items, i) => {
          return (
            <>
              <div
                onClick={() => {
                  handleClick(i);
                }}
                key={items}
                className={`relative flex flex-row items-center h-14 px-4 w-full text-white border-b gap-3 
                            ${
                              (i === screen || select(i, screen)) &&
                              "bg-[#FEC51C] border-[#1F2F3D]"
                            } 
                            ${i === screen - 1 && "border-[#1F2F3D]"}`}
              >
                <img
                  className="w-5 h-5"
                  src={
                    i === screen || select(i, screen)
                      ? items.selected
                      : items.icon
                  }
                  alt={items.icon}
                />
                {side && (
                  <h1
                    className={`${
                      (i === screen || select(i, screen)) && "text-[#1F2F3D]"
                    }`}
                  >
                    {items.label}
                  </h1>
                )}
                {((side && screen === i) || select(i, screen)) && (
                  <img
                    src={triangle}
                    className="absolute object-cover h-full right-0"
                  />
                )}
              </div>
              {side && onService && i === 3 && (
                <div className="flex flex-col border-b h-[250px] transition-all ease-in-out duration-500 overflow-auto">
                  {documents["documents"].map((item, i) => {
                    return (
                      <div
                        key={item.id}
                        onClick={() => {
                          handleClick(i + 6);
                        }}
                        className={`${
                          i + 6 === screen
                            ? "bg-[#FEC51C]/80 text-[#1F2F3D]"
                            : "text-white"
                        } relative w-full px-6 py-3 flex flex-row items-center gap-3 cursor-pointer`}
                      >
                        <img
                          className="w-4 h-4"
                          src={i + 6 === screen ? arrow2 : arrow}
                          alt="icon"
                        />
                        <p className="text-sm">{item.name}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default AdminSidebar;
