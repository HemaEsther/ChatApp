import React from 'react'
import Message from './Message'

const Messages = () => {
  return (
    <div className='flex-1 overflow-y-auto messages-container'
    style={{ minHeight: 'calc(92vh - 8vh)' }}>
        <Message/>
    </div>
  )
}

export default Messages