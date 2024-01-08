import React, { useEffect, useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { format } from "date-fns";
import profileIcon from "../../assets/images/Community Logo (6).png"

const Notifications = ({ notifs }) => {
    const status = ["requested", "Ready for Pick-up"];

    return (
        <div className="w-full h-full overflow-hidden">
            <h1 className="text-3xl font-bold my-3">Notifications</h1>
            <div className="flex flex-col w-full items-center gap-2 my-2 overflow-auto">
                {notifs['notifs'].map((item) => {
                    return (
                        <div
                            key={item.createdAt}
                            className="flex flex-row w-[90%] h-20 bg-[#1F2F3D] rounded-[20px] text-white items-center"
                        >
                            <div className="w-20 h-full flex items-center justify-center ">
                                <img className="rounded-full w-[62px] h-[62px] object-cover" src={item['from'].userAvatar || profileIcon} alt="" />
                            </div>
                            <div className="text-lg flex-1 px-4">
                                <span className="font-bold">{`${item['from'].firstname} ${item['from'].mi} ${item['from'].lastname}`}</span>
                                {` ${status[item['status']]} `}
                                <span className="font-bold italic">{`${item.message}`}</span>
                            </div>
                            <p className="px-4 font-light italic">
                                {format(item["createdAt"].toDate(), "MMMM dd")} at{" "}
                                {format(item["createdAt"].toDate(), "p")}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Notifications;