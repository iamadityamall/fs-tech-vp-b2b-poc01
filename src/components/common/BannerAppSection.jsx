import React from "react";
import { GRADIENTS } from "../../Constants"; // Import the gradient from constants
import appLogo from "../../assets/logo.avif"; // Replace with your actual logo path
import appStoreBadge from "../../assets/appstore.png"; // Replace with actual App Store badge image path
import playStoreBadge from "../../assets/playstore.png"; // Replace with actual Play Store badge image path
import mobile from "../../assets/mobile.png"; // Replace with your actual mobile preview image path

const BannerAppSection = () => {
  return (
    <div
      className="bg-cover bg-center py-16"
      style={{
        backgroundSize: "cover", // Ensures the image covers the entire section
        backgroundPosition: "center", // Centers the image
        // Uncomment if you have a background image
        // backgroundImage: `url(${appBackground})`,
      }}
    >
      <div
        className={`container mx-auto px-8 max-w-7xl flex items-center justify-between ${GRADIENTS.tealToBlue} p-8 rounded-lg shadow-lg`}
      >
        {/* Left Section */}
        <div className="text-white space-y-6 w-1/2">
          <div className="flex items-center space-x-4">
            <img
              src={appLogo}
              alt="App Logo"
              className="w-16 h-16 rounded-lg"
            />
            <div>
              <h2 className="text-2xl font-bold">
                COMPANY: B2B Raw Materials Prices
              </h2>
              <p className="text-lg">
                Unlock a Whole New World of Raw Materials
              </p>
            </div>
          </div>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <span className="text-green-400">✔</span>
              <span>View Live Prices and Instant News</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-400">✔</span>
              <span>Get Quotations For Your Products</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-400">✔</span>
              <span>Manage All Your Orders from One Place</span>
            </li>
          </ul>
          <div className="flex space-x-4 mt-4">
            {/* App Store Button */}
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={appStoreBadge} alt="App Store" className="w-32" />
            </a>
            {/* Google Play Store Button */}
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={playStoreBadge} alt="Play Store" className="w-32" />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-end items-center">
          <img
            src={mobile}
            alt="App Preview"
            className="max-w-sm rounded-md shadow-lg h-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerAppSection;
