import React, { useState } from 'react';
import Cookies from "js-cookie";
import { createContext } from 'react';
import { useContext } from 'react';


export const AuthContext = createContext();

export const Authprovider = ({children}) => {
  
    const initialUserState = Cookies.get("jwt") || localStorage.getItem("ChatApp");
    
    //parse the user data and storing in state
    const[authUser,setAuthUser] = useState(initialUserState?JSON.parse(initialUserState) : undefined);
  return (
    <AuthContext.Provider value={[authUser,setAuthUser]}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = ()=>useContext(AuthContext);