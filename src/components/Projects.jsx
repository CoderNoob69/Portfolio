import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ticTacToe from "../assets/tictactoe.jpg";
import schoolManagementSystem from "../assets/school-management-system.jpg";
import calculator from "../assets/calculator.jpg";

const projects = [
  {
    id: 1,
    name: "Tic-Tac-Toe",
    technologies: "HTML, CSS and JavaScript",
    image: ticTacToe,
    github: "https://github.com/aditya-190/tic-tac-toe",
  },
  {
    id: 2,
    name: "Calculator",
    technologies: "HTML, CSS and JavaScript",
    image: calculator,
    github: "https://github.com/aditya-190/calculator",
  },
  {
    id: 3,
    name: "School Management System",
    technologies: "Python",
    image: schoolManagementSystem,
    github: "https://github.com/aditya-190/school-management-system",
  },
];

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="text-white py-20" id="project" ref={ref}>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-5xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
              initial={{ y: 50, opacity: 0 }}
              animate={controls}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 50, opacity: 0 },
              }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
            >
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <motion.a
                href={project.github}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                GitHub
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
