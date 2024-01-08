import React from 'react'
import Navbar2 from '../../components/Navbar2'
import Sidebar from '../../components/Sidebar'
import NotificationsIcon from "@mui/icons-material/Notifications";
import { format } from "date-fns";

const Notifications = ({ notifs }) => {

  const status = ["Requested", "Ready for Pick-up", "", "Request Denied"];

  return (
    <div className="w-full h-full overflow-hidden">
      <h1 className="text-3xl font-bold my-4">Notifications</h1>
      <div className="flex flex-col w-full items-center gap-3 py-2 overflow-auto">
        {notifs['notifs'].map((item) => {
          return (
            <div
              key={item.name}
              className="flex flex-row w-[90%] h-16 bg-[#1F2F3D] rounded-[20px] text-white items-center"
            >
              <div className="w-20 h-full bg-[#FEC51C] flex items-center justify-center rounded-[20px] ">
                < NotificationsIcon
                  className="rotate-[30deg]"
                  fontSize="large"
                  color="inherit"
                />
              </div>
              <div className="text-lg flex-1 px-4">
                <span className="font-bold">{status[item.status]}</span>
                {`: ${item["message"]}`}
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
}

export default Notifications