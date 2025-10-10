import React from 'react'
import { toast } from 'react-toastify';
import {motion} from 'framer-motion'


function Contact() {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bd2c1aa7-f6c8-4e19-9ba1-8df57d6cd431");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message || "Something went wrong");
      setResult("");
    }
  };
  return (
    <motion.div 
     initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden bg-gradient-to-br from-blue-50 to-white' id='Contact'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center hover:scale-105 transition-transform duration-300 cursor-pointer'>Contact <span className='underline underline-offset-4 decoration-1
         under font-light text-blue-600'>With Us</span> </h1>

         <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto hover:text-gray-700 transition-colors duration-300'>Real Stories from Who Found Home with Us</p>

         <form  onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8 bg-white rounded-2xl shadow-xl p-8 border border-gray-100'>
            <div className='flex flex-wrap -mx-3'>
                <div className='w-full md:w-1/2 text-left px-3 mb-6'>
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>Your Name</label>
                    <input className='w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-all duration-300' type="text" name='Name' placeholder='Enter your full name' required />
                </div>
                <div className='w-full md:w-1/2 text-left px-3 mb-6'>
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>Your Email</label>
                    <input className='w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-all duration-300' type="email" name='Email' placeholder='Enter your email address' required />
                </div>
            </div>
            <div className='mb-6 text-left'>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Message</label>
                <textarea className='w-full border border-gray-300 rounded-lg py-3 px-4 h-48 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-all duration-300' rows="5"
                name="Message" placeholder="Tell us about your dream home..." required ></textarea>
            </div>
            <button className='bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-12 mb-10 rounded-lg hover:from-blue-700 hover:to-blue-800 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl font-semibold'>{result ? result : "Send Message"}</button>
         </form>
    </motion.div>
  )
}

export default Contact
