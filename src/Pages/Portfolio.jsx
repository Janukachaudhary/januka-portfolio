import React from 'react'
import aaa from "../assets/images/aaa.webp";
import bbb from "../assets/images/bbb.webp";
import ccc from "../assets/images/ccc.jpg";
import ddd from "../assets/images/ddd.png";
import eee from "../assets/images/eee.webp";
import fff from "../assets/images/fff.png";

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const closeModel = () => setSelectedImage(null);
  const Januka = [aaa, bbb, ccc, ddd, eee, fff]
  return (
    <>
      <div className="h-full grid grid-cols-3 gap-5">
         {Januka.map((b)=>(
      <div 
      className="bg-gray-300 rounded-lg shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-300" 
      onClick={() => setSelectedImage(b)}
      >
        <img src={b} alt="firstimg" className="h-full w-full object-cover" />
      </div>
      ))}
      </div>
      {selectedImage && (
        <div 
        className='fixed inset-0 backdrop-blur-sm bg-opacity-60 flex item-center justify-center z-50' 
        onClick={closeModel}
        >
          <div 
          className='relative'
          onClick={(e) => e.stopPropagation()}
          >
            <button
            onClick={closeModel}
            className='absolute  -right-2 bg-white rounded-full shadow-lg text-gray-700 hover:bg-red-500 hover:text-white  text-2xl w-10  h-10 flex items-center justify-center'
            >
              x
            </button>
            <img src={selectedImage}
            className='w-[80vw] h-[80vh] rounded-lg object-contain' 
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Portfolio;
