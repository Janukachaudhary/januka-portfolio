import React from 'react'
import robo from "../images/robo.jpg";
import { NavLink } from "react-router-dom";

const linkClasses = ({ isActive }) => `
 flex items-center gap-4 px-6 py-3 rounded-lg transition-all duration-300 ${
    isActive
      ? "bg-white/30 text-black shadow-lg scale-105"
      : "text-white hover:bg-white/20 hover:text-black hover:scale-105"
 }`;

const SideBar = () => {
  return (
    <div className="w-80 h-screen flex flex-col justify-between px-6 py-10
      bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700
      shadow-2xl backdrop-blur-lg">
      
      {/* Profile Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-1 text-white">JANUKA CHAUDHARY</h2>
        <p className="text-gray-300 text-sm">Frontend Developer</p>
      </div>

      {/* Profile Image */}
      <div className='flex flex-col justify-center items-center mt-4'>
        <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white-600 shadow-lg">
          <img src={robo} alt="myimage" className='w-full h-full object-cover' />
        </div>
      </div>

      {/* Navigation Links */}
      <nav className='flex flex-col gap-2 mt-6'>
        <NavLink to="/" className={linkClasses}>Home</NavLink>
        <NavLink to="/service" className={linkClasses}>Service</NavLink>
        <NavLink to="/portfolio" className={linkClasses}>Portfolio</NavLink>
        <NavLink to="/contact" className={linkClasses}>Contact</NavLink>
      </nav>

      {/* Optional Footer / Download CV Button */}
      <div className="mt-6 text-center">
        <a 
          href="/Januka_Chaudhary_CV.pdf"
          download
          className="flex items-center justify-center gap-2 px-6 py-3 bg-white/20 text-white rounded-full hover:bg-white/40 transition-all duration-300 shadow-md"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}

export default SideBar;