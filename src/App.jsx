import React from 'react'
import Navbar from './components/navbar'
import { motion } from "framer-motion"
import Hero from './components/hero'

const App = () => {
  return (
    <div>
      <div className='flex items-center justify-center'>
    <div className='border-2 border-red-500 h-full w-[90%] absolute text-white md:mt-[140%] lg:mt-[50%] mt-[220%] overflow-auto'>
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
