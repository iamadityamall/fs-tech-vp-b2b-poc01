// src/components/ServicesSection.jsx
import React from "react";
import {
  FaShoppingCart,
  FaChartLine,
  FaBolt,
  FaCreditCard,
  FaLightbulb,
  FaArrowRight,
} from "react-icons/fa"; // Import relevant icons
import { COLORS } from "../../Constants"; // Import colors or gradients from constants

const services = [
  {
    icon: <FaShoppingCart className="text-blue-500 text-3xl mb-4" />,
    title: "Buy & Sell With Us",
    description:
      "One stop solution for your raw material sourcing and selling needs",
    link: "/services/buy-sell",
  },
  {
    icon: <FaChartLine className="text-blue-500 text-3xl mb-4" />,
    title: "Raw Materials Prices",
    description: "Get live prices for the raw materials you deal in",
    link: "/services/raw-material-prices",
  },
  {
    icon: <FaBolt className="text-blue-500 text-3xl mb-4" />,
    title: "Raw Materials News",
    description: "Get daily raw material news & insights live from the ground",
    link: "/services/raw-material-news",
  },
  {
    icon: <FaCreditCard className="text-blue-500 text-3xl mb-4" />,
    title: "Grow With Credit",
    description: "Get access to credit for manufacturers and contractors",
    link: "/services/grow-with-credit",
  },
  {
    icon: <FaLightbulb className="text-blue-500 text-3xl mb-4" />,
    title: "Industry Digital First",
    description:
      "Transparency on your orders, live tracking & more with our app and web",
    link: "/services/industry-digital-first",
  },
];

const ServicesSection = () => {
  return (
    <div className="bg-white pb-10">
      <div className="container mx-auto px-8 max-w-7xl rounded-lg">
        <h2 className="font-bold text-black mb-4  text-5xl">Our Services</h2>
        <p className="text-gray-600 mb-8  text-xl">
          Delivering value to our ecosystem of buyers, suppliers and channel
          partners.
        </p>
        <div className="flex justify-between items-stretch gap-6 p-6 rounded-lg  border border-blue-300">
          {services.map((service, index) => (
            <diva
              key={index}
              className="group flex-1 bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-start border border-gray-200"
            >
              {service.icon}
              <h3 className="text-md font-semibold text-black mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 flex-grow">
                {service.description}
              </p>
              <div className="mt-auto">
                {/* Ensures the link stays at the bottom */}
                <a
                  href={service.link}
                  className="text-blue-600 hover:text-blue-800 transition duration-200 flex items-center"
                >
                  Know More <FaArrowRight className="ml-2" />
                </a>
              </div>
            </diva>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
