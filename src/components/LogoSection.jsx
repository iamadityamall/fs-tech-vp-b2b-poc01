import React from "react";
import adaniLogo from "../../src/assets/adani.png"; // Replace with actual image paths
import indianOilLogo from "../../src/assets/indianoil.png";
import nalcoLogo from "../../src/assets/nalco.png";
import nhaiLogo from "../../src/assets/nhai.png";
import drReddyLogo from "../../src/assets/drreddy.png";
import sailLogo from "../../src/assets/sail.png";
import vizagLogo from "../../src/assets/vizag.png";
import walmartLogo from "../../src/assets/walmart.png";

const logos = [
  { src: adaniLogo, alt: "Adani" },
  { src: indianOilLogo, alt: "Indian Oil" },
  { src: nalcoLogo, alt: "NALCO" },
  { src: nhaiLogo, alt: "NHAI" },
  { src: drReddyLogo, alt: "Dr. Reddy's" },
  { src: sailLogo, alt: "SAIL" },
  { src: vizagLogo, alt: "Vizag Steel" },
  { src: walmartLogo, alt: "Walmart" },
];

const LogoSection = () => {
  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full flex justify-center mb-[-40px]">
      {/* Container with rounded corners */}
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-7xl border border-blue-300">
        <div className="flex justify-around items-center gap-4">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-10 w-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
