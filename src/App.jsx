import React from 'react'

import Hero from './components/heroComp'
import Navbar from './components/navbarComp'

const App = () => {
  return (
    <div>
      <div className='flex items-center justify-center'>
    <div className='border-2 border-red-500 h-[70vh] lg:h-[100vh] w-[90%] absolute text-white md:mt-[70vh] lg:mt-[100vh] mt-[70vh] overflow-auto'>
      {/* components here */}
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
    </div>
      <div className='h-[700px] bg-gray-900 lg:h-auto '>
      <img src="background.jpg" alt="" className='h-[700px] object-cover  lg:object-fill lg:h-auto'
      
      />
    </div>
    </div>
  )
}

export default App
