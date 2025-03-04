import React from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Aditya. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="https://www.instagram.com/aditya._.245/" className="text-gray-400 hover:text-white" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://x.com/e_boyadi" className="text-gray-400 hover:text-white" target="_blank">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/aditya-kumar-sahu-329084330/" className="text-gray-400 hover:text-white" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://github.com/CoderNoob69" className="text-gray-400 hover:text-white" target="_blank">
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
