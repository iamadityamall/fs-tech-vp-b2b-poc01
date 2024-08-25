// src/components/ExploreCategories.jsx
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import steelImage from "../../assets/stainless-steel.jpg"; // Replace with your actual image paths
import nonFerrousImage from "../../assets/non-ferrous.jpg";
import polymersImage from "../../assets/polimers.jpg";
import chemicalsImage from "../../assets/chemicals.jpg";
import energyImage from "../../assets/energy.webp";
import constructionImage from "../../assets/building.jpg";
import { GRADIENTS } from "../../Constants"; // Import the gradients

const categories = [
  {
    title: "Steel",
    description: "TMT, Angles, Plates, CRC, and more",
    image: steelImage,
    link: "/steel",
  },
  {
    title: "Non Ferrous",
    description: "Aluminium Ingot, Wire Rods, and more",
    image: nonFerrousImage,
    link: "/steel",
  },
  {
    title: "Polymers",
    description: "PVC, PPHP, PPCP, LLDPE, and more",
    image: polymersImage,
    link: "/steel",
  },
  {
    title: "Chemicals",
    description: "Methanol, Acetic Acid, Acetone, Ethanol, and more",
    image: chemicalsImage,
    link: "/steel",
  },
  {
    title: "Energy",
    description: "Bitumen, Emulsion, Base Oil, and more",
    image: energyImage,
    link: "/steel",
  },
  {
    title: "Construction",
    description: "AAC Blocks, Red Bricks, Mortar, and more",
    image: constructionImage,
    link: "/steel",
  },
];

const ExploreCategories = () => {
  return (
    <div
      className="py-32"
      style={{ background: GRADIENTS.verticalSkyBlueToWhite }} // Use gradient variable
    >
      <div className="container mx-auto px-8 max-w-7xl">
        <h2 className="text-5xl font-bold text-white mb-4">
          Explore Our Categories
        </h2>
        <p className="text-black mb-12 text-lg">
          Tap to access expertise across supply chains. Get Quotations, Prices,
          and Latest News Instantly.
        </p>
        <div className="flex justify-between items-stretch gap-6">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.link}
              className="group block bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 border border-sky-300 flex flex-col justify-between"
              style={{ height: "300px", minWidth: "180px", width: "100%" }} // Reduced card height
            >
              <div className="mb-4">
                {/* Title and Description */}
                <h3 className="text-md font-semibold text-black mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
              <div className="overflow-hidden flex justify-center items-center mb-2">
                {/* Circular Image */}
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-16 w-16 rounded-full transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex justify-between items-center mt-4">
                {/* View All Link */}
                <span className="text-gray-600 hover:text-blue-600 transition duration-200">
                  View All
                </span>
                <FaArrowRight className="text-blue-600" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreCategories;
