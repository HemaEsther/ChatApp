import React from 'react'
import Chatuser from './Chatuser'
import Messages from './Messages'
import Logout from '../Leftpart/Logout'
import Typesend from './Typesend'

const Right = () => {
  return (
    <div className='w-[70%] bg bg-slate-900 text-gray-300 '>
        <Chatuser/>
        <div 
        className='flex-1 overflow-y-auto messages-container'
        style={{ maxHeight: 'calc(92vh - 8vh)' }}>
        <Messages/>
        </div>
        <Typesend/>
    </div>
  )
}

export default Right