import React from "react";
import brand1 from "../../assets/adani.png"; // Replace with your actual image paths
import brand2 from "../../assets/brand1.png";
import brand3 from "../../assets/brand11.png";
import brand4 from "../../assets/brand2.jpg";
import brand5 from "../../assets/brand8.jpg";
import brand6 from "../../assets/brand8.webp";
import brand7 from "../../assets/walmart.png";
import brand8 from "../../assets/sail.png";
import brand9 from "../../assets/brand7.jpg";
import brand10 from "../../assets/nalco.png";

const brands = [
  { image: brand1 },
  { image: brand2 },
  { image: brand3 },
  { image: brand4 },
  { image: brand5 },
  { image: brand6 },
  { image: brand7 },
  { image: brand8 },
  { image: brand9 },
  { image: brand10 },
];

const BrandsSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#1E201E] to-white pt-24 pb-10 overflow-hidden">
      <div className="container mx-auto px-8 max-w-7xl text-left mb-14">
        <h2 className="text-4xl font-bold text-white">Our Brands</h2>
      </div>

      {/* First row: left to right */}
      <div className="relative overflow-hidden mb-10">
        <div className="marquee-row flex space-x-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex-none w-52 h-32 bg-white rounded-lg shadow-md flex items-center justify-center p-4"
            >
              <img
                src={brand.image}
                alt={`Brand ${index + 1}`}
                className="max-w-full max-h-full"
              />
            </div>
          ))}
          {/* Duplicate the brands for seamless scrolling effect */}
          {brands.map((brand, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex-none w-52 h-32 bg-white rounded-lg shadow-md flex items-center justify-center p-4"
            >
              <img
                src={brand.image}
                alt={`Brand ${index + 1}`}
                className="max-w-full max-h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Second row: right to left */}
      <div className="relative overflow-hidden">
        <div className="marquee-row-reverse flex space-x-6">
          {brands.map((brand, index) => (
            <div
              key={`reverse-${index}`}
              className="flex-none w-52 h-32 bg-white rounded-lg shadow-md flex items-center justify-center p-4"
            >
              <img
                src={brand.image}
                alt={`Brand ${index + 1}`}
                className="max-w-full max-h-full"
              />
            </div>
          ))}
          {/* Duplicate the brands for seamless scrolling effect */}
          {brands.map((brand, index) => (
            <div
              key={`reverse-duplicate-${index}`}
              className="flex-none w-52 h-32 bg-white rounded-lg shadow-md flex items-center justify-center p-4"
            >
              <img
                src={brand.image}
                alt={`Brand ${index + 1}`}
                className="max-w-full max-h-full"
              />
            </div>
          ))}
        </div>
        l̥
      </div>
    </div>
  );
};

export default BrandsSection;
