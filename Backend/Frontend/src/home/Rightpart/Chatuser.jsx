import React from 'react';
import UseConversation from "../../zustand/useConversation.js";
import { useSocketContext } from '../../context/SocketContext.jsx';
import { CiMenuFries } from "react-icons/ci";

const Chatuser = () => {
  const { selectedConversation } = UseConversation(); // Destructure state properly
  const { onlineUsers } = useSocketContext(); // Destructure onlineUsers from socket context

  const getOnlineUserStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };

  const getAvatar = (name) => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&size=128`;
  };

  return (
    <div className="sticky top-0 z-50 flex items-center h-[8%] justify-center gap-4 bg-slate-800">
      {/* Drawer button for mobile view */}
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost drawer-button lg:hidden absolute left-5"
      >
        <CiMenuFries className="text-white text-xl" />
      </label>

      {/* Chat User Info */}
      <div className="flex space-x-3 items-center justify-start h-[8vh] bg-gray-800 hover:bg-gray-700 duration-300 px-6">
        {/* User Avatar */}
        <div className={`avatar ${getOnlineUserStatus(selectedConversation?._id).toLowerCase()} ml-2`}>
          <div className="w-12 rounded-full">
            <img src={getAvatar(selectedConversation?.fullname)} alt="User Avatar" />
          </div>
        </div>

        {/* User Details */}
        <div>
          <h1 className="text-xl text-white">
            {selectedConversation?.fullname || "Unknown User"}
          </h1>
          <span className="text-sm text-gray-400">
            {selectedConversation
              ? getOnlineUserStatus(selectedConversation._id)
              : "Offline"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chatuser;
