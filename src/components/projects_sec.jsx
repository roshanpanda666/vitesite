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
const projects_sec = () => {
  return (
    <>
      <div className="shadow-[0px_8px_156px_33px_#4299e1"></div>
      <div className="bg-[rgb(16,26,35)] w-full h-full flex justify-center">


        <div className="lg:w-[90%] w-[100%] ">
          <div className="w-[100%] blur-3xl shadow-[0px_8px_156px_33px_#4299e1] flex justify-center items-center flex-row"></div>

          {/* write your code down here */}

          <div className="flex items-center justify-center flex-col">
            <div className=" w-[100%] lg:w-[50dvw] h-[50vh]  flex items-center lg:justify-center flex-col">
              <div className=" h-[10%] w-full flex items-center justify-center lg:justify-start text-white text-5xl font-bold flex-col">
                <div className="absolute flex lg:item-start filter drop-shadow-[0_5px_10px_rgb(0,191,255)]">
                PROJECTS
                </div>
                
                
              </div>
              <div className=" h-[40%] w-full flex justify-center items-center text-center text-gray-300 mt-10">
              Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
              </div>
            </div>

            <div className=" w-[100%] lg:w-[70dvw] flex items-center justify-center lg:justify-center item  lg:space-x-40 lg:flex-row flex-col space-x-0 lg:space-y-0  lg:-ml-0 -ml-14">


            {/* copy the about section of sunil */}
            {/* with tilt npm package and yes make that responsive */}
            <a href="https://next-movie-app-of-roshan.vercel.app/">

            <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
            <motion.div className="w-80 lg:w-80 bg-transparent text-white border-2 border-cyan-300 to-sky-200 rounded-lg flex flex-col justify-center items-center hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
            initial={{
              opacity:0
            }}
            transition={{
              duration:1
            }}
            whileInView={{
              opacity:1
            }}
            >
              <div className="text-4xl">
              <img src="project3.png" alt="i"/>
              </div>

            </motion.div>
            </Tilt>

            </a>

            <a href="https://spaced-rho.vercel.app/">

            <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
            <motion.div className="w-80 lg:w-80 bg-transparent text-white border-2 border-cyan-300 to-sky-200 rounded-lg flex flex-col justify-center items-center hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
             initial={{
              opacity:0
            }}
            transition={{
              duration:1
            }}
            whileInView={{
              opacity:1
            }}
            >
              <div className="text-4xl">
              <img src="project1.png" alt="i" className="rounded-md"/>
              </div>

            </motion.div>
            </Tilt>

            </a>

            <a href="https://metat.vercel.app/">

            <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
            <motion.div className=" w-80 lg:w-80 bg-transparent text-white border-2 border-cyan-300 to-sky-200 rounded-lg flex flex-col justify-center items-center hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
             initial={{
              opacity:0
            }}
            transition={{
              duration:1
            }}
            whileInView={{
              opacity:1
            }}
            >
              <div className="text-4xl">
              <img src="project2.png" alt="i" className="rounded-md"/>
              </div>

            </motion.div>
            </Tilt>

            </a>
            
            
            </div>
          </div>

          

        </div>
      </div>
    </>
  );
};

export default projects_sec;