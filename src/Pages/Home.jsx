import React from 'react'
import myVideo from "../assets/Videos/video2.mp4";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between bg-gray-200 relative px-6 py-12 md:px-16 md:py-0 overflow-hidden">
        
        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center z-10 order-2 md:order-1 mt-8 md:mt-0">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-2">
                JANUKA CHAUDHARY
            </h1>
            
            {/* Wrapped Typewriter in a container to control height */}
            <div className="h-12 mb-6"> 
                <span className="text-xl md:text-2xl text-red-600 font-semibold">
                    <Typewriter 
                        words={[
                            "I am a Frontend Developer.",
                            "I build modern React websites.",
                            "I do Video Editing.", 
                            "I love clean UI & UX."
                        ]}
                        cursor
                        cursorStyle="|"
                        loop={true}
                        typeSpeed={60}
                        deleteSpeed={50}
                        delaySpeed={999}
                    />
                </span>
            </div>

            <p className="text-gray-600 text-lg text-left mb-8 pr-0 md:pr-10 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsam nesciunt voluptatum, sunt repellat nam harum eligendi ut ratione eius officiis animi tempore saepe dolores cum, voluptatem distinctio praesentium sapiente?
            </p>

            <div>
                <button 
                    onClick={() => navigate("/contact")}
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-fit"
                >
                    Hire Me
                </button>
            </div>
        </div>

        {/* Right Side - Video */}
        <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2 mb-8 md:mb-0">
            <div className="relative w-full max-w-md md:max-w-lg">
                {/* Decorative background shape behind video */}
                <div className="absolute inset-0 bg-red-600 rounded-[30%] transform translate-x-3 translate-y-3 -z-10"></div>
                
                <video 
                    src={myVideo} 
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="shadow-2xl rounded-[30%] w-full h-auto object-cover border-4 border-white"
                />
            </div>
        </div>
    </div>
  );
};

export default Home;