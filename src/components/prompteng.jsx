import React from 'react'
import Promptengcircle from './promptengcircle'

const Prompteng = () => {
  return (
    <div>
        <div className='flex justify-center items-center bg-[rgb(14,25,33)] flex-col'>
            
            <div className='text-center text-white font-bold lg:text-4xl text-3xl filter drop-shadow-[0_5px_10px_rgb(0,191,255)] mt-6 mb-10'>
                PROMPT ENGINEERING
            </div>
            <div className='flex justify-center items-center flex-col'>
                <div className=' lg:w-[55rem] w-[20rem] flex justify-center items-center text-center '>
                    <div className='text-gray-300'>
                        With those skill i am also learning prompt engineering which is evolving rapidly in the world of Ai prompt engineering is a must have skill
                        which i gained by myself i love technologies like CHATGPT,figmaDEVMODE,GOOGLE BARD,,ADOBE FIREFLY,MIDJOURNEY,DAL-E 2 etc and i love working with those type of technologies
                    </div>
                </div>
                <div className='flex justify-center items-center lg:w-[70rem] w-[20rem] mt-10 mb-10 lg:flex-row flex-col gap-8'>
                    <Promptengcircle thegif="chatgpt.png">

                    </Promptengcircle>

                    <Promptengcircle thegif="bard.svg">

                    </Promptengcircle>

                    <Promptengcircle thegif="midjourney.png">

                    </Promptengcircle>

                    <Promptengcircle thegif="copilot.png">

                    </Promptengcircle>
                    
                </div>
                
            </div>
            <hr className='border-none blur-3xl lg:w-[75rem] w-[20rem] shadow-[0px_5px_170px_22px_#63b3ed]'/>
        </div>
        
    </div>
  )
}

export default Prompteng
