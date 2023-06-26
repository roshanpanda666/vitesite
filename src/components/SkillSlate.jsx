import React from 'react'
import { motion } from 'framer-motion'
const SkillSlate = (props) => {
  return (
    <>
        <div>
        <motion.img src="Regular_hexagon.svg.png" alt="" className='lg:h-60 h-40'

        initial={{
            x:50,
            y:-50
        }}
        transition={{
            type:'spring',
            damping:7,
            mass:.90
        }}
        whileInView={{
            x:1,
            y:1,
            
        }}
        
        />

        <div className='absolute'>
            <motion.img src="Tailwind_CSS_Logo.svg.png" alt="" className='absolute lg:-mt-56 -mt-36 lg:h-52 h-32 cursor-move'
             drag="x"
             dragConstraints={{ left: 10, right: 10 }}
            initial={{
                opacity : 0,

            }}
            transition={{
                type:'spring',
                stiffness:10
            }}
            whileInView={{
                opacity : 1,
                X : 1
            }}
            />
            <motion.img src="Regular_hexagon.svg.png" alt="" className='lg:h-60 h-40 lg:-mt-64 -mt-44 ml-8'
            initial={{
                opacity : 0,

            }}
            transition={{
                type:'spring',
                stiffness:10
            }}
            whileInView={{
                opacity : 1,
                X : 1
            }}
            />
        </div>
        </div>
      
    </>
  )
}

export default SkillSlate
