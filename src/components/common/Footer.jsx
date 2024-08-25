import React from "react";
import appStoreBadge from "../../assets/appstoreFiveStar.png"; // Replace with actual App Store badge image path
import playStoreBadge from "../../assets/googleplayfivestar.png"; // Replace with actual Play Store badge image path
import companyLogo from "../../assets/logo.avif";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"; // Import social media icons

// Import constants
import {
  GRADIENT_BACKGROUND,
  FOOTER_TEXT_COLOR,
  APP_STORE_URL,
  PLAY_STORE_URL,
  COMPANY_INFO,
  SOCIAL_LINKS,
  FOOTER_CATEGORIES,
  FOOTER_LINKS,
} from "../../Constants";

const Footer = () => {
  return (
    <div className={`${GRADIENT_BACKGROUND} pt-16 w-[100vw] overflow-hidden`}>
      <div className="container mx-auto px-8 max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
        {/* Fulfillment Categories */}
        <div className="col-span-4 mb-6">
          <h3 className="font-bold mb-4">FULFILLMENT CATEGORIES</h3>
          <ul className="text-sm space-x-2 flex flex-wrap">
            {FOOTER_CATEGORIES.map((category, index) => (
              <li key={index}>
                <a href="#" className="hover:underline">
                  {category}

                  {index < FOOTER_CATEGORIES.length - 1 && (
                    <span className="ml-2">|</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Info */}
        <div className="col-span-1">
          <img
            src={companyLogo}
            alt="Company Logo"
            className="mb-4 h-14 rounded-full"
          />
          <p className="font-bold">{COMPANY_INFO.name}</p>
          <p>{COMPANY_INFO.description}</p>
          <p className="mt-4 font-bold">Registered Office</p>
          <p className="text-sm whitespace-pre-wrap">{COMPANY_INFO.address}</p>
          <p className="text-sm">
            CIN: {COMPANY_INFO.cin}
            <br />
            Telephone No: {COMPANY_INFO.phone}
            <br />
            Email Id: {COMPANY_INFO.email}
          </p>
        </div>

        {/* Mobile Apps and Follow Us */}
        <div className="col-span-1">
          <h3 className="font-bold mb-4">MOBILE APPS</h3>
          <div className="flex items-center space-x-4 mb-4">
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
              <img src={appStoreBadge} alt="App Store" className="w-32" />
            </a>
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
              <img src={playStoreBadge} alt="Play Store" className="w-32" />
            </a>
          </div>
          <h3 className="font-bold mb-4">FOLLOW US</h3>
          <div className="flex space-x-4">
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                className={`text-white hover:text-blue-500 transition duration-200`}
                size={24}
              />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className={`text-white hover:text-blue-500 transition duration-200`}
                size={24}
              />
            </a>
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                className={`text-white hover:text-blue-500 transition duration-200`}
                size={24}
              />
            </a>
            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube
                className={`text-white hover:text-blue-500 transition duration-200`}
                size={24}
              />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(FOOTER_LINKS).map(([section, links], index) => (
            <div key={index}>
              <h3 className="font-bold mb-4">{section.toUpperCase()}</h3>
              <ul className="space-y-1">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:underline text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        className={`bg-black py-2 mt-10 text-center ${FOOTER_TEXT_COLOR} text-[12px]`}
      >
        ©2024 Company Tech Pvt. Ltd, All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
