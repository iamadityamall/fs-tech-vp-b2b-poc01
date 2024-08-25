// src/components/common/LoginModal.jsx
import React from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

const LoginModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null; // Don't render the modal if it's not visible

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      {/* Increase the width by changing max-w-2xl to max-w-3xl or larger */}
      <div className="bg-white rounded-lg overflow-hidden w-full max-w-3xl p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <FaTimes size={24} />
        </button>

        {/* Modal Content */}
        <div className="flex">
          {/* Left Side Content */}
          <div className="w-1/2 p-4">
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWJzdHJhY3R8ZW58MHx8MHx8fDA%3D"
              alt="Promo"
              className="rounded-lg mb-4"
            />{" "}
            {/* Replace with actual image path */}
            {/* <div className="text-center">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">
                India’s Largest B2B Raw Material Procurement & Credit Platform
              </h2>
              <p className="text-gray-600">
                4 Lakh+ Product Prices | 5 Lakh+ Orders Delivered
              </p>
              <div className="mt-4">
                <p className="text-gray-600">
                  Average Store Rating{" "}
                  <span className="font-bold text-yellow-500">4.9 ⭐</span>
                </p>
                <p className="text-gray-600">
                  Startup of the year 2023 -{" "}
                  <span className="font-bold">The Economic Times</span>
                </p>
              </div>
            </div> */}
          </div>

          {/* Right Side Content */}
          <div className="w-1/2 p-4 border-l">
            <h2 className="text-2xl font-bold text-teal-500 mb-4">
              Login Now to Get Free Access to 4,00,000+ Prices
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">
                  Mobile Number
                </label>
                <div className="flex">
                  <select className="border border-gray-300 rounded-l px-3 py-2 focus:outline-none">
                    <option value="+91">IN +91</option>
                    {/* Add other country codes here */}
                  </select>
                  <input
                    type="text"
                    placeholder="Enter mobile"
                    className="border border-gray-300 rounded-r px-3 py-2 focus:outline-none w-full"
                  />
                </div>
              </div>
              <div className="mb-4 flex items-center">
                <input type="checkbox" id="whatsapp" className="mr-2" />
                <label
                  htmlFor="whatsapp"
                  className="text-gray-700 flex items-center"
                >
                  Also Get Alerts on{" "}
                  <FaWhatsapp className="text-green-500 ml-1" />
                </label>
              </div>
              <button
                type="button"
                className="bg-blue-500 text-white py-2 px-4 rounded-md w-full hover:bg-blue-600"
              >
                Get OTP
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
