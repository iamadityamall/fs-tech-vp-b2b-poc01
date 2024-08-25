import React, { useState } from "react";
import { FaShoppingCart, FaCreditCard, FaTruck, FaStar } from "react-icons/fa";
import backgroundImage from "../../assets/background_plain.jpg"; // Replace with your actual background image path
import LogoSection from "../LogoSection";
// Import the LogoSection component

const buyerServices = [
  {
    icon: <FaShoppingCart />,
    title: "Get Lowest Price",
    description: "Get rates at least 1% lower than the existing market rates",
  },
  {
    icon: <FaCreditCard />,
    title: "Get Credit",
    description: "Do not worry about working capital. Grow with our credit",
  },
  {
    icon: <FaTruck />,
    title: "Pan India & Global",
    description:
      "World-class fulfillment for domestic and international markets",
  },
  {
    icon: <FaStar />,
    title: "Multi Brand SKUs",
    description: "One stop shop for 3L+ SKU from multiple brands",
  },
];

const supplierServices = [
  {
    icon: <FaShoppingCart />,
    title: "Grow Your Business",
    description: "Get access to a global buyer base and grow 3x and more",
  },
  {
    icon: <FaCreditCard />,
    title: "Advance Payments",
    description: "Get your payments upfront and let us worry about the credit",
  },
  {
    icon: <FaTruck />,
    title: "High Order Volumes",
    description: "Get bigger order volumes from our large global buyer base",
  },
  {
    icon: <FaStar />,
    title: "Fulfillment Services",
    description: "End-to-end managed logistics while you focus on business",
  },
];

const ChooseUsSection = () => {
  const [isBuyerActive, setIsBuyerActive] = useState(true);

  const services = isBuyerActive ? buyerServices : supplierServices;
  const title = isBuyerActive
    ? "Why Buyers Choose Us"
    : "Why Suppliers Choose Us";

  return (
    <div
      className="relative bg-cover bg-center pt-24 pb-16"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-8 max-w-7xl text-left">
        <h2 className="text-3xl font-bold text-white mb-6">{title}</h2>

        {/* Toggle Button */}
        <div className="flex items-center mb-8">
          <div className="flex bg-black rounded-full overflow-hidden">
            <button
              className={`px-8 py-2 text-lg font-semibold transition-colors duration-200 ${
                isBuyerActive
                  ? "bg-gradient-to-r from-teal-400 to-blue-500 text-white"
                  : "bg-black text-white"
              } rounded-full`}
              onClick={() => setIsBuyerActive(true)}
            >
              Buyer
            </button>
            <button
              className={`px-8 py-2 text-lg font-semibold transition-colors duration-200 ${
                !isBuyerActive
                  ? "bg-gradient-to-r from-teal-400 to-blue-500 text-white"
                  : "bg-black text-white"
              } rounded-full`}
              onClick={() => setIsBuyerActive(false)}
            >
              Supplier
            </button>
          </div>
        </div>

        {/* Service Cards */}
        <div className="flex justify-start gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex-1 bg-white bg-opacity-10 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-white">
                <div className="text-blue-500 text-2xl">{service.icon}</div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-white">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-start gap-6 pt-10">
          <h3 className="text-xl font-bold mb-4 text-center text-white">
            1 Million+ SMEs & Corporates Served
          </h3>
        </div>
      </div>

      {/* Include LogoSection component */}
      <LogoSection />
    </div>
  );
};

export default ChooseUsSection;
