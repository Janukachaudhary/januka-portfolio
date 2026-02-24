import React from 'react'
import myImg from "../assets/images/robo.jpg";
import myVideo from "../assets/Videos/video2.mp4";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="*:w-full h-157.5 flex flex-row items-center justify-between bg-gray-200 relative px-6
    overflow-hidden">
        {/* {left} */}
        <div>
            <h1 className="font-bold">JANUKA CHAUDHARY</h1>
            <p className="py-9 text-justify pr-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsam nesciunt voluptatum, sunt repellat nam harum eligendi ut ratione eius
                 officiis animi tempore saepe dolores cum, voluptatem distinctio praesentium sapiente?
           
            <Typewriter words
            ={[
                "I am a Web Developer.",
                "I build modern React websites.",
                "I love clean UI & UX."
            ]}
            cursor
            cursorStyle="|"
            loop={true}
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={999}

            />
         </p>

            <button 
            onClick={() => navigate("/contact")}
            className="bg-red-600 text-white font-semibold px-4 py-2 rounded-[30%]">Hire Me</button>
        </div>
        {/* {Right} */}
        <div className="w-1/2 flex justify-center">
        <video 
        src={myVideo} 
        autoPlay
        loop
        muted
        className="shadow-2xl rounded-[30%] w-full h-auto object-cover"/>
          
        </div>
    </div>
  );
};

export default Home;
