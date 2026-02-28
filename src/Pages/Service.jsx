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
  return (
    <div className="w-full min-h-screen bg-gray-100 py-16 px-4">
      {/* Main Container - THIS WAS MISSING */}
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-red-600">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of professional services to help your business grow and succeed.
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 group border-b-4 border-transparent hover:border-red-600"
            >
              <div className="text-gray-400 mb-4 group-hover:text-red-600 transition-colors duration-300 transform group-hover:-translate-y-1">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                {service.name}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <a href="#" className="mt-4 text-red-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More →
              </a>
            </div>
          ))}
        </div>

        {/* Social Media Links - NOW INSIDE CONTAINER */}
        <div className="flex justify-center mt-12 space-x-6">
          <a href="#" className="text-gray-600 hover:text-red-600 transition-colors duration-300">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-red-600 transition-colors duration-300">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-red-600 transition-colors duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-red-600 transition-colors duration-300">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Service;