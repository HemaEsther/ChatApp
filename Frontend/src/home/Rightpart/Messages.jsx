import React, { useEffect, useRef } from "react";
import Message from "./Message.jsx";
import useGetMessage from "../../context/useGetMessage.js";
import Loading from "../../components/Loading.jsx";

function Messages() {
  const { loading, messages } = useGetMessage();

  // Scrolling
  const lastMsgRef = useRef(null);

  useEffect(() => {
    if (lastMsgRef.current) {
      lastMsgRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div
      className="flex-1 overflow-y-auto messages-container"
      style={{ minHeight: "calc(92vh - 8vh)" }}
    >
      {loading ? (
        <Loading />
      ) : (
        messages.length > 0 &&
        messages.map((message, index) => (
          <Message
            key={message._id || `message-${index}`}
            message={message}
            ref={index === messages.length - 1 ? lastMsgRef : null}
          />
        ))
      )}

      {!loading && messages.length === 0 && (
        <div>
          <p className="text-center mt-[20%]">
            Say! Hi to start the conversation
          </p>
        </div>
      )}
      
    </div>
  );
}

export default Messages;
