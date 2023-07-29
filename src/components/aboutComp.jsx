import React from "react";
import { motion } from "framer-motion";
import { Tilt } from 'react-tilt'

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}
const AboutComp = () => {
  return (
    <>
      <div className="shadow-[0px_8px_156px_33px_#4299e1"></div>
      <div className="bg-[rgb(16,26,35)] w-full flex justify-center">


        <div className="lg:w-[90%] w-[100%] ">
          <div className="w-[100%] blur-3xl shadow-[0px_8px_156px_33px_#4299e1] flex justify-center items-center flex-row"></div>

          {/* write your code down here */}

          <div className="flex items-center justify-center flex-col">
            <div className=" w-[100%] lg:w-[50dvw] h-[50vh]  flex items-center lg:justify-center flex-col">
              <div className=" h-[10%] w-full flex items-center justify-center lg:justify-start text-white text-5xl font-bold flex-col">
                <div className="absolute flex lg:item-start filter drop-shadow-[0_5px_10px_rgb(0,191,255)]">
                OVERVIEW
                </div>
                
                
              </div>
              <div className=" h-[40%] w-full flex justify-center items-center text-center text-gray-300 mt-10">
              Hello! I'm a skilled web developer and a passionate student
              with a strong focus on creating efficient and scalable solutions
              to solve real-world problems. My expertise lies in various areas 
              of web development, including JavaScript, ReactJS, NextJS, 
              Tailwind CSS, Framer Motion, Node.js, and aI technology. 
              Let's work together to bring your ideas to life!
              </div>
            </div>

            <div className=" w-[100%] lg:w-[70dvw] flex items-center lg:justify-center space-x-10 lg:flex-row flex-col lg:space-y-0 space-y-6 ">


            {/* copy the about section of sunil */}
            {/* with tilt npm package and yes make that responsive */}
            <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
            <motion.div className="h-60 w-52 bg-gradient-to-b from-sky-400 to-sky-200 rounded-lg flex flex-col justify-center items-center hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
            initial={{
              x:50
            }}
            transition={{
              duration:1
            }}
            whileInView={{
              x:0
            }}
            >
              <div className="text-4xl ">
              <i class="fa-solid fa-computer"></i>
              </div>

              <div className="text-black font-bold text-2xl mt-10">
                Web developer
              </div>

            </motion.div>
            </Tilt>
            <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
            <motion.div className="h-60 w-52 bg-gradient-to-b from-sky-400 to-sky-200 rounded-lg flex flex-col justify-center items-center hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
            initial={{
              x:50
            }}
            transition={{
              delay:0.3,
              duration:1
            }}
            whileInView={{
              x:0
            }}
            >
              <div className="text-3xl">
              <i class="fa-solid fa-microchip"></i>
              </div>
              <div className="font-bold text-2xl mt-10">
                Tech enthusiast
              </div>
            </motion.div>
            </Tilt>
            <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
            <motion.div className="h-60 w-52 bg-gradient-to-b from-sky-400 to-sky-200 rounded-lg flex flex-col justify-center items-center hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
            initial={{
              x:50
            }}
            transition={{
              duration:1,
              delay:0.5
            }}
            whileInView={{
              x:0
            }}
            >
              <div className="text-3xl">
              <i class="fa-solid fa-pen"></i>
              </div>
              <div className="font-bold text-2xl mt-10">
                Web Designer
              </div>
            </motion.div>
            </Tilt>
            <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
            <motion.div className="h-60 w-52 bg-gradient-to-b from-sky-400 to-sky-200 rounded-lg flex flex-col justify-center items-center hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
            initial={{
              x:50
            }}
            transition={{
              duration:1,
              delay:0.7
            }}
            whileInView={{
              x:0
            }}
            >
              <div className="text-3xl">
              <i class="fa-solid fa-user"></i>
              </div>
              <div className="font-bold text-2xl mt-10">
                Learner
              </div>

            </motion.div>
            </Tilt>
            </div>
          </div>

          

        </div>
      </div>
    </>
  );
};

export default AboutComp;
