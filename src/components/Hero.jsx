import { motion } from 'framer-motion'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  return (
    <div>
      <div className='flex justify-center items-center h-[50vh] lg:h-[90vh] flex-col'>
          <motion.div className=' text-[2.5rem] lg:text-[6rem] text-black font-bold'
          initial={{
            opacity: 0,
            
          }}
          transition={{
            type:'spring',
            stiffness:40
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
        <motion.div className=' mt-10 text-3xl lg:text-6xl text-black'
        initial={{
            y:10
        }}
        transition={{
            duration:3
        }}
        animate={{

            y:[20,0,20,20,0,20,0,20,0,20,0,20,0,20]
        }}
        
        >
          <i class="fa-solid fa-arrow-down"></i>
          </motion.div>
        </div>
        
    </div>
  )
}

export default Hero
