import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import useConversation from '../zustand/useConversation.js'
import sound from "../assets/mixkit-correct-answer-tone-2870.wav"

const useGetSocketMessage = () => {
    const {socket} = useSocketContext();
    const {messages,setMessage} = useConversation();

    useEffect(()=>{
        socket.on('newMessage',(newMessage)=>{
            const notification = new Audio(sound);
            notification.play();
            setMessage([...messages,newMessage]);
        });
        return ()=>{
            socket.off("newMessage");
        };
    },[socket,messages,setMessage])
};

export default useGetSocketMessage;

