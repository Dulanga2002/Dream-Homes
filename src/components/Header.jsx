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
        <motion.h2 
          initial={{ opacity: 0, x: -100, rotateY: -90 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "backOut" }}
          whileHover={{ scale: 1.05, rotateX: 5 }}
          className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20 transition-transform duration-300 cursor-pointer">
          Explore homes that fit your dreams
        </motion.h2>
        <div className="space-x-6 mt-16 ">
          <a href="#Projects" className="border border-white px-8 py-3 rounded hover:bg-white hover:text-black transition-colors">Projects</a>
          <a href="#Contact" className="border border-white px-8 py-3 rounded bg-blue-500 hover:bg-blue-600 transition-colors">Contact Us</a>
        </div>
      </motion.div>
    </div>
  );
}

export default Header;
