import React from "react";
import Navbar from "./navbar";
import { motion } from "framer-motion";
 

function Header() {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <Navbar />
      <motion.div 
      initial={{opacity:0,y:100}}
      transition={{duration:1.5}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      className="container  text-center mx-auto text-white py-4 px-6 md:px20 lg:px-32">
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-bold pt-20 tracking-wide leading-tight">
          Explore homes that fit your <span className="font-serif italic font-light">dreams</span>
        </h2>
        <div className="space-x-6 mt-16 ">
          <a href="#Projects" className="border border-white px-8 py-3 rounded hover:bg-white hover:text-black transition-colors">Projects</a>
          <a href="#Contact" className="px-8 py-3 rounded bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 hover:scale-105 font-semibold">Contact Us</a>
        </div>
      </motion.div>
    </div>
  );
}

export default Header;
