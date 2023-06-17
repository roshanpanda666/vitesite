import React from 'react'
import {Typewriter } from 'react-simple-typewriter'
const Navbar = () => {
  return (
    <div>
      <div className='text-white flex mt-5 '>
        <div className='flex'>
            <div className='text-black text-[1.2rem] font-bold'>
                SABYASACHI
            </div>

            <span className='text-blue-500 font-bold text-[1.2rem]'>
            <Typewriter
            words={['|PORTFOLIO']}
            loop={1}
            cursor
            cursorStyle='_'
          />
            </span>
            
        </div>

        
        
      </div>
      <div className='flex justify-end -mt-7'>
        <div className='text-blue-500 text-3xl lg:hidden block'>
        <i class="fa-solid fa-bars"></i>
        </div>
      
                <div className='absolute lg:block hidden font-bold text-black text-[1.2rem] z-50'>
                    <div className='flex gap-5'>

                    <div className='hover:text-blue-500 duration-500 hover:border-b-4 hover:border-b-blue-500'>ABOUT</div> 
                    <div className='hover:text-blue-500 duration-500 hover:border-b-4 hover:border-b-blue-500'>SKILL</div>
                    <div className='hover:text-blue-500 duration-500 hover:border-b-4 hover:border-b-blue-500'>PROJECT </div>
                    <div className='hover:text-blue-500 duration-500 hover:border-b-4 hover:border-b-blue-500'>CONTACT </div>

                    </div>
                   

                </div>


        </div>

        
        
    </div>
  )
}

export default Navbar
