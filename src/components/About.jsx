import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden text-center bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passionate About Properties,Dedicated to Your Vision
      </p>

      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          alt=""
          className="w-full sm:w-1/2 max-w-lg "
        />
        <div className="flex flex-col items-center md:items-start mt-10  text-gray-600 ">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800 mr-22 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800 mr-22 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800 mr-22 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800 mr-16 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            We are a leading real estate company with over a decade of experience in transforming dreams into reality. Our expertise spans residential, commercial, and luxury properties, ensuring every client finds their perfect space. With cutting-edge technology and personalized service, we deliver exceptional results that exceed expectations.
          </p>
          
          {/* New Features Section */}
          <div className="w-full mt-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/100 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border border-white/20">
                <div className="text-3xl mb-4">🏠</div>
                <h4 className="font-semibold text-gray-800 mb-2">Premium Properties</h4>
                <p className="text-sm text-gray-600">Curated selection of luxury homes and commercial spaces</p>
              </div>
              <div className="bg-white/100 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border border-white/20">
                <div className="text-3xl mb-4">💰</div>
                <h4 className="font-semibold text-gray-800 mb-2">Best Prices</h4>
                <p className="text-sm text-gray-600">Competitive pricing with transparent dealings</p>
              </div>
              <div className="bg-white/100 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border border-white/20">
                <div className="text-3xl mb-4">🤝</div>
                <h4 className="font-semibold text-gray-800 mb-2">Expert Support</h4>
                <p className="text-sm text-gray-600">24/7 professional guidance and support</p>
              </div>
            </div>
          </div>

          <button className="px-8 py-2 rounded-2xl text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 transition-all duration-300 ease-in-out cursor-pointer shadow-lg hover:shadow-sky-500/30 focus:outline-none focus:ring-2 focus:ring-sky-400">
            Learn more
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
