import React from "react";

function AdminNotifications({ notif }) {
  return (
    <div className="w-full h-full">
      <h1 className="text-3xl font-bold my-2">Notifications</h1>
      <div className="flex flex-col w-full items-center gap-3">
        {notif.map((item) => {
          return (
            <div className="flex flex-row w-[90%] h-16 bg-[#1F2F3D] rounded-[20px] text-white items-center">
              <div className="w-20 h-full bg-[#FEC51C] flex items-center justify-center rounded-[20px] ">
                <NotificationsIcon
                  className="rotate-[30deg]"
                  fontSize="large"
                  color="inherit"
                />
              </div>
              <div className="text-lg flex-1 px-4">{item["message"]}</div>
              <p className="px-4 font-light italic">
                {format(item["dateCreated"], "MMMM dd")} at{" "}
                {format(item["dateCreated"], "p")}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AdminNotifications;
