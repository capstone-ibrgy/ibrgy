import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { Upcoming, Error } from "@mui/icons-material";
import edit from "../assets/images/Community Logo (19).png";
import doc from "../assets/images/Community Logo (5).png";
import add from "../assets/images/22.png";

const Requests = ({ setScreen, forms, fetchState, documents }) => {

  const handleClick = (index) => {
    setScreen(index);
  };

  const stateBuilder = (state) => {
    if (state == 2) return 0;

    const states = {
      "-1": {
        icon: <Error />,
        text: "Something went wrong.",
      },
      "0": {
        icon: <CircularProgress />,
        text: "Loading entries...",
      },
    };

    return <>{states[`${state}`].icon}</>;
  };

  return (
    <div className="flex flex-col w-full h-full">
      <h1 className="text-3xl font-bold font-arimo mt-2 mb-4">
        Documents Offered
      </h1>
      <div className={`w-full overflow-auto`}>
        <div className="flex flex-col items-center gap-6">
          {
            documents["documents"].map((item, i) => {
              return (
                <div
                  key={item}
                  onClick={() => {
                    handleClick(i + 6);
                  }}
                  className="flex flex-col w-[90%] rounded-[20px] cursor-pointer  hover:ring ring-[#FEC51C]"
                >
                  <div className="h-20 w-full">
                    <div className="relative flex flex-row h-full rounded-[20px]">
                      <div className="flex flex-row flex-1 bg-[#1F2F3D] rounded-[20px] border-r items-center gap-6 px-8">
                        <img src={doc} className="w-16 h-16" />
                        <h1 className="text-white text-2xl font-bold">
                          {item.name}
                        </h1>
                      </div>
                      <div className="flex justify-center items-center z-10 h-full right-0 absolute w-20 bg-[#FEC51C] rounded-[20px] drop-shadow-lg">
                        <h1 className="text-[#1F2F3D] text-xl font-bold">
                          {documents['fetchState'] != 1
                            ? stateBuilder(`${documents['fetchState']}`)
                            : !forms['requests'][item.id]
                              ? 0
                              : forms['requests'][item.id].length}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Requests;
