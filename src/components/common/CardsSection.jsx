import React from "react";
import warehouseImage from "../../assets/warehouse.jpg"; // Replace with your actual image paths
import manufacturingImage from "../../assets/manufacturing.jpg";
import exportImage from "../../assets/export.avif";
import financeImage from "../../assets/finance.jpg";
import aiImage from "../../assets/ai.avif";

const cards = [
  {
    title: "Aggregator",
    image: warehouseImage,
    description: "Aggregating various products across the supply chain.",
  },
  {
    title: "Manufacturer",
    image: manufacturingImage,
    description:
      "30+ world-class manufacturing & processing plants in Steel, Aluminium, Energy, Chemicals, Agri & more.",
  },
  {
    title: "Importer & Exporter",
    image: exportImage,
    description: "Handling import and export logistics efficiently.",
  },
  {
    title: "NBFC Financier",
    image: financeImage,
    description: "Providing financing solutions for your business needs.",
  },
  {
    title: "SaaS & AI",
    image: aiImage,
    description: "Leveraging SaaS and AI for better business decisions.",
  },
];

const CardSection = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto w-[100vw] max-w-[100vw] grid grid-cols-1 md:grid-cols-5 h-[50vh]">
        {cards.map((card, index) => (
          <div key={index} className="relative group overflow-hidden shadow-md">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            {/* Darker background on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-end p-6 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
              <h3 className="text-lg font-bold text-white">{card.title}</h3>
              <p className="text-sm text-white mt-2">{card.description}</p>
            </div>
            {/* Title only when not hovered */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4 transition-opacity duration-500 group-hover:opacity-0">
              <h3 className="text-lg font-bold text-white">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
