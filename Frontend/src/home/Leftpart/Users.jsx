import React from 'react'
import User from './User'
import useGetAlluser from '../../context/useGetAlluser'

const Users = () => {
  const [allUsers,loading] = useGetAlluser();
  return (
    <div>
        <h1 className='px-8 py-2 text-white font-semibold bg-slate-800 rounded-md'>Start chatting</h1>
        <div className='flex-1 overflow-y-auto messages-container'
        style={{ maxHeight: 'calc(84vh - 10vh)' }}
        >
        {allUsers.map((user,index) => (
          <User key={index} user = {user} />
        ))}
        </div>
    </div>
  )
}

export default Users