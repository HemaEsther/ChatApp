import React from 'react';
import useConversation from '../../zustand/useConversation.js';
import { useSocketContext } from '../../context/SocketContext.jsx';

function User({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const { socket, onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);

  // Generate an avatar using UI Avatars
  const getAvatar = (name) => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&size=128`;
  };

  return (
    <div
      className={`hover:bg-slate-700 duration-300 ${isSelected ? 'bg-slate-700' : ''}`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className="flex space-x-4 px-6 py-3 hover:bg-slate-700 duration-300 cursor-pointer">
        <div className={`avatar ${isOnline ? 'online' : ''}`}>
          <div className="w-12 rounded-full">
            <img src={getAvatar(user.fullname)} alt="User Avatar" />
          </div>
        </div>
        <div>
          <h1 className="font-semibold">{user.fullname}</h1>
          <span className="text-sm text-gray-500">{user.email}</span>
        </div>
      </div>
    </div>
  );
}

export default User;
