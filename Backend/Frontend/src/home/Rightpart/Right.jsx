import React, { useEffect } from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import Logout from "../Leftpart/Logout";
import Typesend from "./Typesend";
import useConversation from "../../zustand/useConversation.js";
import { useAuth } from "../../context/Authprovider.jsx";
import bg from "../../assets/bg.jpg";
import { CiMenuFries } from "react-icons/ci";

const Right = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="w-full bg-black text-gray-300 ">
      <div>
        {!selectedConversation ? (
          <NoChatSelected />
        ) : (
          <>
            <Chatuser />
            <div
              className="flex-1 overflow-y-auto messages-container"
              style={{
                maxHeight: "calc(92vh - 8vh)",
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
              }}
            >
              <Messages />
            </div>
            <Typesend />
          </>
        )}
      </div>
    </div>
  );
};

export default Right;

const NoChatSelected = () => {
  const [authUser] = useAuth();
  return (
    <>
    <div className="relative">
    <label htmlFor="my-drawer-2" 
    className="btn btn-ghost drawer-button lg:hidden absolute left-5">
      <CiMenuFries className="text-white text-xl" />
    </label>
    </div>
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-center md:text-xl">
          Hi 👋
          <span className="font-semibold text-xl md:text-3xl">
            {authUser.user.fullname}
          </span>
          <br />
          Please start conversation by selecting anyone to
          your contacts
        </h1>
      </div>
    </>
  );
};
