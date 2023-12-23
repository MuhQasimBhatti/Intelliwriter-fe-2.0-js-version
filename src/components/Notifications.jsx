import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import Image from "next/image";

const Notifications = ({ notifications, toggleNotifications }) => {
  return (
    <div className="notifications-dropdown bg-[#22243B] text-white shadow-md w-[300px] md:w-[400px] rounded-md p-2 absolute right-0 top-12 z-50">
      <ul>
        <span className="flex py-2 justify-between items-center">
          <button
            className="rounded-md p-2 bg-[#101027d0]"
            onClick={toggleNotifications}
          >
            <FaChevronLeft />
          </button>
          <h3 className="text-lg">Notifications</h3>
          <button className="rounded-md p-2 bg-[#101027d0] text-xl">
            <HiDotsVertical />
          </button>
        </span>
        {notifications.map((notification) => (
          <li
            key={notification.id}
            className="my-1 p-4 rounded-lg flex w-full bg-[#101027] text-xs md:text-sm"
          >
            <div className="bg-white rounded-full">
              <Image
                src={notification.profileImage}
                alt=" "
                width={50}
                height={50}
              />
            </div>

            <div className="px-2 py-1 md:py-0">
              <h4 className="text-base md:text-lg">{notification.userName}</h4>
              <p>{notification.message}</p>
            </div>

            <div className="absolute right-5">
              <p>{notification.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
