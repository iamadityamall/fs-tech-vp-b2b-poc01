import React from "react";
import {
  FaSearch,
  FaTint,
  FaFlask,
  FaTachometerAlt,
  FaShippingFast,
  FaRupeeSign,
  FaBuilding,
  FaTruck,
  FaGlobe,
} from "react-icons/fa"; // Import relevant icons or use image imports
import backgroundImage from "../../assets/imageFive.jpg"; // Replace with your actual background image path

const HeroSection = () => {
  const handleTagClick = (tag) => {
    console.log(`Clicked on ${tag}`);
  };

  return (
    <div
      className="relative bg-cover bg-center h-[85vh] flex flex-col justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "fixed",
        // Parallax effect for smooth background scrolling
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-65"></div>

      {/* Container aligned with the navbar */}
      <div className="relative container mx-auto px-8 max-w-7xl text-left text-white space-y-8 py-8">
        {/* Stacked Heading Text */}
        <div className="w-[60vw]">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            India's Largest B2B Raw Materials Procurement & Credit Platform
          </h1>
        </div>

        {/* Search Bar */}
        <div className="relative flex items-center max-w-md mt-6">
          <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md w-full">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search for"
              className="focus:outline-none w-full text-black"
            />
            {/* Search Button Inside Input */}
            <button className="ml-2 bg-gradient-to-r from-teal-400 to-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition duration-200">
              Search
            </button>
          </div>
        </div>

        {/* Clickable Tags */}
        <div className="flex space-x-2 md:space-x-3 mt-6">
          {[
            { icon: <FaTint />, label: "Bitumen" },
            { icon: <FaFlask />, label: "Methanol" },
            { icon: <FaTachometerAlt />, label: "PVC" },
            { icon: <FaShippingFast />, label: "Secondary TMT" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleTagClick(item.label)}
              className="bg-gray-700 bg-opacity-50 text-white px-4 py-2 rounded-full flex items-center text-sm hover:bg-gray-600 transition duration-200"
            >
              <span className="mr-2">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Overlapping Banner Section */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2 w-full max-w-7xl px-4">
        <div className="bg-white py-4 shadow-lg rounded-lg flex justify-between items-center px-6">
          {[
            {
              icon: <FaRupeeSign className="text-yellow-500 text-2xl" />,
              number: "400K+",
              text: "Raw Materials Prices",
            },
            {
              icon: <FaBuilding className="text-red-500 text-2xl" />,
              number: "1 Million+",
              text: "SMEs Empowered",
            },
            {
              icon: <FaTruck className="text-green-500 text-2xl" />,
              number: "500K+",
              text: "Orders Delivered",
            },
            {
              icon: <FaGlobe className="text-blue-500 text-2xl" />,
              number: "30+",
              text: "Countries Served",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center px-4 py-2">
              {/* Icon to the Left */}
              <div className="flex-shrink-0">{item.icon}</div>
              {/* Content to the Right */}
              <div className="ml-4">
                <p className="font-bold text-xl">{item.number}</p>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
