import React from 'react'
import Left from './home/Leftpart/Left'
import Right from './home/Rightpart/Right'

const App = () => {
  return (
    <div className='flex h-screen'>
      <Left/>
      <Right/>
    </div>
  )
}

export default App