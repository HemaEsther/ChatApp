import React, { forwardRef } from "react";

const Message = forwardRef(({ message }, ref) => {
  const authUser = JSON.parse(localStorage.getItem("ChatApp"));
  const itsMe = String(message.senderId) === String(authUser.user._id);

  const chatName = itsMe ? "chat-end" : "chat-start";
  const chatColor = itsMe ? "bg-blue-500" : "bg-gray-500";

  const createdAt = new Date(message.createdAt)
  const formattedTime = createdAt.toLocaleTimeString([],{
    hour: '2-digit',
    minute: '2-digit'
  })
  return (
    <div className="p-4" ref={ref}>
      <div className={`chat ${chatName}`}>
        <div className={`chat-bubble text-white ${chatColor}`}>
          {message.message}
        </div>
        <div className="chat-footer">{formattedTime}</div>
      </div>
    </div>
  );
});

export default Message;
