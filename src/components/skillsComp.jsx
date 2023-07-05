import React from 'react'
import { motion } from 'framer-motion'
const Skills = () => {
  return (
    <>
      <div className=' flex justify-center items-center bg-[rgb(14,25,33)] flex-col'>
        <div className="w-[100%] blur-3xl shadow-[0px_8px_156px_33px_#4299e1] flex justify-center items-center flex-row"></div>
        <div className='font-bold text-5xl text-white mt-10'>
            Skills
        </div>
        <div className='mt-7 flex lg:flex-col flex-row lg:gap-8 gap-10'>
            <div className='flex lg:flex-row flex-col lg:gap-x-5 '>
            <div>
        <motion.img src="Regular_hexagon.svg.png" alt="" className='lg:h-60 h-40'

        initial={{
            x:10,
            y:-30
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
            <motion.img src="tailwind.png" alt="" className='absolute lg:-mt-48 lg:ml-14 -mt-32 ml-8 lg:h-32 h-24 cursor-move'
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
            }}
            />
            <motion.img src="Regular_hexagon.svg.png" alt="" className='lg:h-60 h-40 lg:-mt-64 -mt-44 lg:ml-8 ml-2'
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
      
            <div>
        <motion.img src="Regular_hexagon.svg.png" alt="" className='lg:h-60 h-40'

        initial={{
            x:10,
            y:-30
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
        <motion.img src="react.png" alt="" className='absolute lg:-mt-48 lg:ml-14 -mt-32 ml-8 lg:h-32 h-24 cursor-move'
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

            <motion.img src="Regular_hexagon.svg.png" alt="" className='lg:h-60 h-40 lg:-mt-64 -mt-44 lg:ml-8 ml-2'
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
            
        <div>
        <motion.img src="Regular_hexagon.svg.png" alt="" className='lg:h-60 h-40'

        initial={{
            x:10,
            y:-30
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
            <motion.img src="framermotion.png" alt="" className='absolute lg:-mt-48 lg:ml-14 -mt-32 ml-8 lg:h-32 h-24 cursor-move'
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
            <motion.img src="Regular_hexagon.svg.png" alt="" className='lg:h-60 h-40 lg:-mt-64 -mt-44 lg:ml-8 ml-2'
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
      
        <div>
        <motion.img src="Regular_hexagon.svg.png" alt="" className='lg:h-60 h-40'

        initial={{
            x:10,
            y:-30
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
            <motion.img src="mongodb.png" alt="" className='absolute lg:-mt-48 lg:ml-14 -mt-32 ml-8 lg:h-32 h-24 cursor-move'
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
            <motion.img src="Regular_hexagon.svg.png" alt="" className='lg:h-60 h-40 lg:-mt-64 -mt-44 lg:ml-8 ml-2'
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
      
            </div>
            <div className='flex lg:flex-row flex-col gap-x-5 lg:ml-32 lg:-mt-6'>
            <div>
        <motion.img src="Regular_hexagon.svg.png" alt="" className='lg:h-60 h-40'

        initial={{
            x:10,
            y:-30
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
            <motion.img src="html.png" alt="" className='absolute lg:-mt-48 lg:ml-14 -mt-32 ml-8 lg:h-32 h-24 cursor-move'
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
            <motion.img src="Regular_hexagon.svg.png" alt="" className='lg:h-60 h-40 lg:-mt-64 -mt-44 lg:ml-8 ml-3'
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
      
        <div>
        <motion.img src="Regular_hexagon.svg.png" alt="" className='lg:h-60 h-40'

        initial={{
            x:10,
            y:-30
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
            <motion.img src="nextjs.png" alt="" className='absolute lg:-mt-48 lg:ml-14 -mt-32 ml-8 lg:h-32 h-24 cursor-move'
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
            <motion.img src="Regular_hexagon.svg.png" alt="" className='lg:h-60 h-40 lg:-mt-64 -mt-44 lg:ml-8 ml-3'
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
      
        <div>
        <motion.img src="Regular_hexagon.svg.png" alt="" className='lg:h-60 h-40'

        initial={{
            x:10,
            y:-30
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
            <motion.img src="figma.png" alt="" className='absolute lg:-mt-48 lg:ml-14 -mt-32 ml-8 lg:h-32 h-24 cursor-move'
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
            <motion.img src="Regular_hexagon.svg.png" alt="" className='lg:h-60 h-40 lg:-mt-64 -mt-44 lg:ml-8 ml-3'
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
      
        <div>
        <motion.img src="Regular_hexagon.svg.png" alt="" className='lg:h-60 h-40'

        initial={{
            x:10,
            y:-30
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
            <motion.img src="git.png" alt="" className='absolute lg:-mt-48 lg:ml-14 -mt-32 ml-8 lg:h-32 h-24 cursor-move'
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
            <motion.img src="Regular_hexagon.svg.png" alt="" className='lg:h-60 h-40 lg:-mt-64 -mt-44 lg:ml-8 ml-3'
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
      
            </div>
            
            
        </div>
      </div>
    </>
  )
}

export default Skills
