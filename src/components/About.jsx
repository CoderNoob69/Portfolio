import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import cpp from "../assets/cpp.png";
import python from "../assets/python.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import sql from "../assets/sql.png";
import Projects from "./Projects";


const About = () => {
  return (
    <div>
      
      <motion.div
        className="flex flex-col m-auto py-10 lg:px-40 md:px-20 px-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="py-5 font-bold text-5xl text-white text-center">
          Technical Skills
        </h1>
        <motion.div
          className="flex overflow-x-scroll pb-10 hide-scroll-bar scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div
            className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <motion.div
              className="inline-block px-3 py-5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white bg-opacity-30 backdrop-blur-lg hover:bg-opacity-50 hover:shadow-2xl transition-transform duration-300 ease-in-out flex flex-col items-center justify-center">
                <img src={html} alt="html" className="w-32 h-32" />
                <p className="text-center text-white mt-2">HTML</p>
              </div>
            </motion.div>
            <motion.div
              className="inline-block px-3 py-5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white bg-opacity-30 backdrop-blur-lg hover:bg-opacity-50 hover:shadow-2xl transition-transform duration-300 ease-in-out flex flex-col items-center justify-center">
                <img src={css} alt="css" className="w-32 h-32" />
                <p className="text-center text-white mt-2">CSS</p>
              </div>
            </motion.div>
            <motion.div
              className="inline-block px-3 py-5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white bg-opacity-30 backdrop-blur-lg hover:bg-opacity-50 hover:shadow-2xl transition-transform duration-300 ease-in-out flex flex-col items-center justify-center">
                <img src={js} alt="js" className="w-32 h-32" />
                <p className="text-center text-white mt-2">JavaScript</p>
              </div>
            </motion.div>
            <motion.div
              className="inline-block px-3 py-5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white bg-opacity-30 backdrop-blur-lg hover:bg-opacity-50 hover:shadow-2xl transition-transform duration-300 ease-in-out flex flex-col items-center justify-center">
                <img src={react} alt="react" className="w-32 h-32" />
                <p className="text-center text-white mt-2">React</p>
              </div>
            </motion.div>
            <motion.div
              className="inline-block px-3 py-5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white bg-opacity-30 backdrop-blur-lg hover:bg-opacity-50 hover:shadow-2xl transition-transform duration-300 ease-in-out flex flex-col items-center justify-center">
                <img src={cpp} alt="cpp" className="w-32 h-32" />
                <p className="text-center text-white mt-2">C++</p>
              </div>
            </motion.div>
            <motion.div
              className="inline-block px-3 py-5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white bg-opacity-30 backdrop-blur-lg hover:bg-opacity-50 hover:shadow-2xl transition-transform duration-300 ease-in-out flex flex-col items-center justify-center">
                <img src={python} alt="python" className="w-32 h-32" />
                <p className="text-center text-white mt-2">Python</p>
              </div>
            </motion.div>
            <motion.div
              className="inline-block px-3 py-5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white bg-opacity-30 backdrop-blur-lg hover:bg-opacity-50 hover:shadow-2xl transition-transform duration-300 ease-in-out flex flex-col items-center justify-center">
                <img src={sql} alt="sql" className="w-32 h-32" />
                <p className="text-center text-white mt-2">MySQL</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col m-auto py-10 lg:px-80 md:px-20 px-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="py-5 font-bold text-5xl text-white text-center mb-10">
          Soft Skills
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-space-around">
          <motion.div className="flip-card" whileHover={{ scale: 1.1 }}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className="soft-skill-text">Communication</p>
              </div>
              <div className="flip-card-back">
                <p className="soft-skill-text">Empathy</p>
              </div>
            </div>
          </motion.div>
          <motion.div className="flip-card" whileHover={{ scale: 1.1 }}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className="soft-skill-text">Teamwork</p>
              </div>
              <div className="flip-card-back">
                <p className="soft-skill-text">Critical Thinking</p>
              </div>
            </div>
          </motion.div>
          <motion.div className="flip-card" whileHover={{ scale: 1.1 }}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className="soft-skill-text">Problem Solving</p>
              </div>
              <div className="flip-card-back">
                <p className="soft-skill-text">Quick Learner</p>
              </div>
            </div>
          </motion.div>
          <motion.div className="flip-card" whileHover={{ scale: 1.1 }}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className="soft-skill-text">Adaptability</p>
              </div>
              <div className="flip-card-back">
                <p className="soft-skill-text">Patience</p>
              </div>
            </div>
          </motion.div>
          <motion.div className="flip-card" whileHover={{ scale: 1.1 }}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className="soft-skill-text">Creativity</p>
              </div>
              <div className="flip-card-back">
                <p className="soft-skill-text">Time Management</p>
              </div>
            </div>
          </motion.div>
          <motion.div className="flip-card" whileHover={{ scale: 1.1 }}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className="soft-skill-text">Leadership</p>
              </div>
              <div className="flip-card-back">
                <p className="soft-skill-text">Agile Developer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <Projects />
      <motion.p 
        className='mt-4 text-2xl text-gray-300 px-8 md:px-24 lg:px-48 xl:px-60 text-center'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        > 
          I am a computer science student at the National Institute of Technology, Raipur. I am passionate about software development and have a keen interest in building modern and responsive web applications. I have a strong foundation in frontend technology and strive to create seamless and efficient user experiences. I am a quick learner and always eager to learn new technologies.
      </motion.p>
    </div>
  );
};

export default About;
