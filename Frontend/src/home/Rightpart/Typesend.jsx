import React from 'react'
import { IoMdSend } from "react-icons/io";

const Typesend = () => {
  return (
    <div className='flex space-x-1 h-[8vh] bg-gray-800'>
        <div className='w-[70%] mx-4'>
        <input type="text" placeholder="Type here" className="border border-gray-700 mt-1 rounded-xl outline-none px-4 py-3 w-full" />
        </div>
        <button>
        <IoMdSend className='text-3xl' />
        </button>
    </div>
  )
}

export default Typesend