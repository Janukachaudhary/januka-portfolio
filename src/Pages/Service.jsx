import {
  BiSolidUserVoice,
  BiCodeAlt,
  BiPaint,
  BiCamera,
  BiMobileAlt,
  BiBullseye,
  BiSearchAlt2,
  BiBookAlt,
  BiBarChartAlt2,
} from "react-icons/bi";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
const Service = () => {
  const services = [
    {
      icon: <BiSolidUserVoice size={40} />,
      name: "UI/UX Design",
      description:
        "Creating intuitive and visually appealing user interfaces with seamless user experiences.",
    },
    {
      icon: <BiCodeAlt size={40} />,
      name: "Web Development",
      description:
        "Building fast, responsive, and scalable websites tailored to your business needs.",
    },
    {
      icon: <BiPaint size={40} />,
      name: "Graphic Design",
      description:
        "Designing eye-catching graphics, branding materials, and visual content that stand out.",
    },
    {
      icon: <BiCamera size={40} />,
      name: "Photography/Videography",
      description:
        "Capturing high-quality photos and videos to elevate your brand’s visual identity.",
    },
    {
      icon: <BiMobileAlt size={40} />,
      name: "Mobile App Development",
      description:
        "Developing user-friendly mobile applications for both iOS and Android platforms.",
    },
    {
      icon: <BiBullseye size={40} />,
      name: "Digital Marketing",
      description:
        "Driving growth through targeted digital strategies, social media campaigns.",
    },
    {
      icon: <BiSearchAlt2 size={40} />,
      name: "SEO Optimization",
      description:
        "Improving search engine rankings to increase visibility and attract organic traffic.",
    },
    {
      icon: <BiBookAlt size={40} />,
      name: "Content Writing",
      description:
        "Crafting engaging, informative, and SEO-friendly content for websites, blogs.",
    },
    {
      icon: <BiBarChartAlt2 size={40} />,
      name: "Analytics/Reporting",
      description:
        "Providing detailed insights and performance reports to guide data-driven decisions.",
    },
  ];
  return(
    <>  
    <div className="h-full grid grid-cols-3 gap-5"> 
       <div className="col-span-3 text-center font-bold text-3xl">Our Services</div>
      {services.map((service)=> (
        <div 
        key={service.name}
        className="bg-gray-300 rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 ">
          <div className="text-gray-400 mb-4">{service.icon}</div>
          <h3 className="text-xl font-bold mb-2">{service.name}</h3>
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
    </>
  )
}
export default Service;