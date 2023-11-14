import { motion } from 'framer-motion'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {

  const scrooloverview=()=>{
        
    window.scrollTo({top:1000,left:0,behavior:'smooth'})
  
}
  return (
    <div>
      <div className='flex justify-center items-center h-[50vh] lg:h-[90vh] flex-col z-50'>
        <div className='scale-50 absolute lg:w-[150rem] flex'>
          <div className='flex items-start justify-start lg:-mt-96  '>
          <motion.img src="cloud.png" alt="" className='lg:block hidden'
          initial={{
            x: 150 
          }}
          transition={{
            type:'spring',
            stiffness:20
          }}
          whileInView={{
            x:0
          }}
          />
          </div>
        </div>
        
          <motion.div className=' text-[2.5rem] lg:text-[6rem] text-black font-bold lg:mt-0 mt-40 '
          initial={{
            opacity: 0,
            
          }}
          transition={{
            type:'spring',
            stiffness:10,
          }}
          whileInView={{
            opacity:1,
            
          }}
          >I AM SABYASACHI</motion.div>
          <div className='flex justify-center items-center '>
          <motion.div className=' text-[2.5rem] lg:text-[6rem] text-white font-bold'
          initial={{
            opacity: 0,
            y:-70
          }}
          transition={{
            type:'spring',
            stiffness:100
          }}
          whileInView={{
            opacity:1,
            y:1
          }}
          > A
          
            <Typewriter
            words={[' Developer ',' Designer',' Learner',' Tech Enthusiast']}
            loop={0}
            cursor
            cursorStyle='|'
            
          />
          
          </motion.div>
          
        </div>
        <div className=' flex-col items-end justify-end absolute ml-[50rem] mb-80 scale-50 lg:block hidden'>
          <motion.div
          initial={{
            x:-400,
            y:400
          }}
          transition={{
            type:'spring',
            stiffness:40
          }}
          whileInView={{
            x:0,
            y:0
            
          }}
          >
          <img src="bird.png" alt="" className='scale-50 -rotate-12 lg:block hidden'/>

          </motion.div>
          <motion.img src="cloud.png" alt="" className='lg:block hidden'
          initial={{
            x: -150 
          }}
          transition={{
            type:'spring',
            stiffness:20
          }}
          whileInView={{
            x:0
          }}
          />
          </div>
        <motion.div className=' mt-10 text-3xl lg:text-6xl text-black'
        initial={{
            y:10
        }}
        transition={{
            duration:3
        }}
        whileInView={{
          y: [30, 0, 30],
          transition: {
            duration: 1, // Adjust the duration as needed
            repeat: Infinity, // Set repeat to Infinity for an infinite loop
            repeatType: "mirror", // This will create a smooth back-and-forth animation
          },
        }}
        
        >
          <i class="fa-solid fa-arrow-down" onClick={scrooloverview}></i>
          </motion.div>
        </div>
        
    </div>
  )
}

export default Hero
