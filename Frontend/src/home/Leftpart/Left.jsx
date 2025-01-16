import React from 'react'
import Search from './Search'
import Users from './Users'
import Logout from './Logout'

const Left = () => {
  return (
    <div className='w-[30%] bg-black text-slate-200'>
    <Search/>
    <div 
        className='flex-1 overflow-y-auto messages-container'
        style={{ minHeight: 'calc(84vh - 10vh)' }}>
        <Users/>
        </div>
    <Logout/>
    </div>
  )
}

export default Left