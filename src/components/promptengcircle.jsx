import React from 'react'
import { motion } from "framer-motion";
const Promptengcircle = (props) => {

  return (
    <>
      <div className='flex justify-center flex-col'>
        
        <motion.div className='border-4 border-double border-cyan-500 rounded-full h-32 w-32 ' 
        initial={{
            rotate:0
        }}
        transition={{
            type:'spring',
            stiffness:20,
            
        }}
        whileInView={{
            rotateY:370
        }}
        >
            
        <div className='w-full'>
            
        </div>
            <div className='mt-0 text-center rounded-full '>
            <img src={props.thegif} alt="" />
        </div>
        
        </motion.div>
      
      </div>
    </>
  )
}

export default Promptengcircle
