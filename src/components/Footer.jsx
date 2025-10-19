import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div
      className="pt-12 px-6 md:px-24 lg:px-40 bg-gray-900 w-full overflow-hidden transition-all duration-300"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="w-full md:w-1/3 mb-10 md:mb-0">
          <img src={assets.logo_dark} alt="Company Logo" className="w-32 mb-4" />
          <p className="text-gray-300 text-sm leading-relaxed">
            Discover the latest trends and insights in real estate. We provide expert guidance and personalized solutions to help you find your dream property with ease and confidence.
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-10 md:mb-0">
          <h3 className="text-white text-xl font-semibold mb-5 tracking-tight">Company</h3>
          <ul className="flex flex-col gap-3 text-gray-300 text-sm">
            <a href="#Header" className="hover:text-blue-400 transition-colors duration-200">
              Home
            </a>
            <a href="#About" className="hover:text-blue-400 transition-colors duration-200">
              About Us
            </a>
            <a href="#Contact" className="hover:text-blue-400 transition-colors duration-200">
              Contact Us
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">
              Privacy Policy
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-xl font-semibold mb-5 tracking-tight">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-gray-300 text-sm mb-5 max-w-96">
            Stay updated with the latest news, exclusive offers, and expert tips delivered straight to your inbox.
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-lg bg-gray-800 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto transition-all duration-200"
            />
            <button className="p-3 px-6 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600 mt-12 py-6 text-center text-gray-400 text-sm">
        Copyright 2025 © Real Estate. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;