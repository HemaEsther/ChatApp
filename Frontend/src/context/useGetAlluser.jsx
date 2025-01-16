import React, { useEffect, useState } from 'react'
import Cookies from "js-cookie";
import axios from "axios";
function useGetAlluser() {
  const [allUsers,setallUsers] = useState([])
  const [loading,setloading] = useState(false);
  useEffect(()=>{
    const getUsers = async()=>{
      setloading(true);
        try {
        const token = Cookies.get("jwt-token");
        const response = await axios.get("/api/user/allusers",{
          withCredentials:"include",
          headers:{
            Authorization: `Bearer ${token}`
          }
        })
        setallUsers(response.data);
        } catch (error) {
            console.log("Error in useGetAlluser: "+error);
        }finally {
          setloading(false); // Ensure loading is reset
        }
    }
    getUsers()
  },[])
  return [allUsers,loading]
}

export default useGetAlluser