import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import HeroImage from '../assets/hero-image.jpg'

const Hero = () => {
  return (
    <div className=' text-white text-center py-16'>
        <motion.img 
          src={HeroImage} 
          alt="" 
          className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.h1 
          className='text-4xl font-bold'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Aditya Sahu</span>
            , Aspiring Software Developer
        </motion.h1>
        <motion.p 
          className='mt-4 text-lg text-gray-300'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
        C++ & Python Enthusiast | DSA Learner | Front-End Web Developer
        </motion.p>
        <motion.div 
          className='mt-8 space-x-4'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
        <Link to="/contact">
            <button
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</button></Link>
            <a href="https://drive.google.com/drive/folders/1vwMv4Ufp9fEJHuFEKQ5ByT_g4KgovEun">
            <button
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button></a>
        </motion.div>
        <motion.p 
          className='mt-4 text-lg text-gray-300 px-8 md:px-24 lg:px-48 xl:px-96'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        > 
        Welcome to my portfolio website. I am a passionate software developer with a focus on building modern and responsive web applications. With a strong foundation in frontend technology, I strive to create seamless and efficient user experiences.
        </motion.p>
    </div>
  )
}

export default Hero