import React from 'react'

import Hero from './components/heroComp'
import Navbar from './components/navbarComp'
import AboutComp from './components/aboutComp'
import Skills from './components/skillsComp'
import Prompteng from './components/prompteng'
import Projects_sec from './components/projects_sec'

const App = () => {
  return (
    <div>
      <div className='flex items-center justify-center'>
    <div className=' h-[70vh] lg:h-[100vh] w-[90%] absolute text-white md:mt-[70vh] lg:mt-[100vh] mt-[70vh] overflow-auto'>
      {/* hero components here */}
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
    </div>
      <div className='h-[700px] bg-gray-900 lg:h-auto '>
      <img src="background.jpg" alt="" className='h-[700px] object-cover  lg:object-fill lg:h-auto'
      
      />
    </div>
    {/* about component here */}
    <AboutComp></AboutComp>
    <Skills></Skills>
    <Prompteng></Prompteng>
    <Projects_sec></Projects_sec>
    </div>
  )
}

export default App
