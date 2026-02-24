import React from 'react'
import robo from"../images/robo.jpg";
import { NavLink } from "react-router-dom";
import { IoMdCloudDownload } from "react-icons/io";
import { ImOffice } from 'react-icons/im';
import myCV from "../Downloadss/CV.pdf";

const linkClasses = ({ isActive }) =>`
 flex items-center gap-4 px-6 py-3 rounded-lg transition-all duration-300 ${
        isActive
        ? "bg-white/30 shadow-lg scale-105"
        : "hover:bg-white/20 hover:scale-105"
    }`;
   
const SideBar = () => {
  return (
    <div className="w-80 h-screen text-white flex flex-col justify-between px-6 py-10 shadow-2xl
    bg-linear-to-b from-gray-900 via-gray-800 to-gray-700">
        <div className="text-center">
            <h2 className="text-xl font-bold">JANUKA CHAUDHARY</h2>
            <p>WEB DEVELOPER</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <img src={robo}
             alt="myimage" className='h-35 w-35 rounded-full object-cover mt-4 ' />
        </div>

       <nav className='flex flex-col gap-1 mt-4'>
        <NavLink to="/" className={linkClasses}>Home</NavLink>
        <NavLink to="/service" className={linkClasses}>Service</NavLink>
        <NavLink to="/portfolio" className={linkClasses}>Portfolio</NavLink>
        <NavLink to="/contact" className={linkClasses}>Contact</NavLink>
       </nav>
         

         <div className='text-center mt-4'>
          <a href={myCV}
          download="CV"
          className=' flex flex-row items-center px-15 bg-white text-black rounded-full py-2.5 font-bold w-full'>
            DOWNLOAD CV <IoMdCloudDownload />
            </a>
         </div>
    </div>
  );
}

export default SideBar;
