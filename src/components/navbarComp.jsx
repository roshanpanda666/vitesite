import React, { useState } from 'react'
import {Typewriter } from 'react-simple-typewriter'
const Navbar = () => {
  const scrooloverview=()=>{
        
    window.scrollTo({top:1000,left:0,behavior:'smooth'})
  
}

const scrooloverskill=()=>{
        
  window.scrollTo({top:2000,left:0,behavior:'smooth'})

}

const scrooloversproject=()=>{
        
  window.scrollTo({top:3800,left:0,behavior:'smooth'})

}
  const[noshow,show]=useState(false)

  function buttonhandle(){
    show(!noshow)
  }
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
        <div className='flex flex-col justify-center items-end'>
        <div onClick={buttonhandle}>
          <div className={`${noshow?'fa-solid fa-bars' :'fa-solid fa-x'}`}>
          </div>

        
 
        </div>
       
        <div className={`${noshow?'hidden':'block'}`}>
            <div className='border-2 border-blue-500 h-36 w-64 fixed -ml-72' onClick={buttonhandle}>
            <div className='flex gap-[1px] flex-col text-center text-[1rem]'>

              <div className='duration-500 hover:border-b-4 hover:border-b-blue-500 text-black cursor-pointer'onClick={scrooloverview}>ABOUT</div> 
              <div className='duration-500 hover:border-b-4 hover:border-b-blue-500 text-black cursor-pointer'onClick={scrooloverskill}>SKILL</div>
              <div className='duration-500 hover:border-b-4 hover:border-b-blue-500 text-black cursor-pointer'onClick={scrooloversproject}>PROJECT </div>
              <div className='duration-500 hover:border-b-4 hover:border-b-blue-500 text-black cursor-pointer'>CONTACT </div>

            </div>  
            </div>
        </div>
        
        </div>
        </div>
      
                <div className='absolute lg:block hidden font-bold text-black text-[1.2rem] z-50'>
                    <div className='flex gap-5'>

                    <div className='hover:text-blue-500 duration-500 hover:border-b-4 hover:border-b-blue-500 cursor-pointer'onClick={scrooloverview}>ABOUT</div> 
                    <div className='hover:text-blue-500 duration-500 hover:border-b-4 hover:border-b-blue-500 cursor-pointer' onClick={scrooloverskill}>SKILL</div>
                    <div className='hover:text-blue-500 duration-500 hover:border-b-4 hover:border-b-blue-500 cursor-pointer' onClick={scrooloversproject}>PROJECT </div>
                    <div className='hover:text-blue-500 duration-500 hover:border-b-4 hover:border-b-blue-500 cursor-pointer'>CONTACT </div>

                    </div>
                   

                </div>


        </div>

        
        
    </div>
  )
}

export default Navbar
