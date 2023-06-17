import React from "react";
import { motion } from "framer-motion";
const AboutComp = () => {
  return (
    <>
      <div className="shadow-[0px_8px_156px_33px_#4299e1"></div>
      <div className="bg-[rgb(16,26,35)] w-full flex justify-center">


        <div className="lg:w-[90%] w-[100%] ">
          <div className="w-[100%] shadow-[0px_8px_156px_33px_#4299e1] flex justify-center items-center flex-row"></div>

          {/* write your code down here */}

          <div className="flex items-center justify-center flex-col">
            <div className=" w-[100%] lg:w-[50dvw] h-[50vh]  flex items-center lg:justify-center flex-col">
              <div className=" h-[10%] w-full flex items-center justify-center lg:justify-start text-white text-5xl font-bold flex-col">
                <div className="absolute flex lg:item-start">
                OVERVIEW
                </div>
                
                
              </div>
              <div className=" h-[40%] w-full flex justify-center items-center text-center lg:text-start text-white mt-10">
              Hello! I'm a skilled web developer and a passionate student
              with a strong focus on creating efficient and scalable solutions
              to solve real-world problems. My expertise lies in various areas 
              of web development, including JavaScript, ReactJS, NextJS, 
              Tailwind CSS, Framer Motion, Node.js, and aI technology. 
              Let's work together to bring your ideas to life!
              </div>
            </div>

            <div className=" w-[100%] lg:w-[50dvw] flex items-center lg:justify-center">

            {/* copy the about section of sunil */}
            {/* with tilt npm package and yes make that responsive */}
            </div>
          </div>

          

        </div>
      </div>
    </>
  );
};

export default AboutComp;
