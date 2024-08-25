// src/components/SteelPage.jsx
import React from "react";
import { FaChartBar, FaWhatsapp } from "react-icons/fa"; // Import relevant icons
import Footer from "./Footer";

const SteelPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-8 max-w-7xl py-8 mt-32">
        {/* Section Title */}
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            Mild Steel Most Viewed Prices
          </h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-200">
            View Prices
          </button>
        </div>

        {/* Price Table */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
          <table className="min-w-full text-left text-gray-700">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4">Products</th>
                <th className="py-3 px-4">Brand</th>
                <th className="py-3 px-4">Location</th>
                <th className="py-3 px-4">Prices</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  product: "Secondary TMT Fe 550",
                  brand: "MOIRA",
                  location: "EX - Wada",
                  price: "₹46,400/ MT",
                  change: "0%",
                  time: "22 hours ago",
                },
                {
                  product: "Secondary TMT Fe 500",
                  brand: "GAJKESARI",
                  location: "EX - Jalna",
                  price: "₹45,500/ MT",
                  change: "0%",
                  time: "22 hours ago",
                },
                {
                  product: "Secondary TMT Fe 550",
                  brand: "MOIRA",
                  location: "EX - Wada",
                  price: "₹46,400/ MT",
                  change: "0%",
                  time: "22 hours ago",
                },
                {
                  product: "Secondary TMT Fe 500",
                  brand: "GAJKESARI",
                  location: "EX - Jalna",
                  price: "₹45,500/ MT",
                  change: "0%",
                  time: "22 hours ago",
                },
                {
                  product: "Secondary TMT Fe 550",
                  brand: "MOIRA",
                  location: "EX - Wada",
                  price: "₹46,400/ MT",
                  change: "0%",
                  time: "22 hours ago",
                },
                {
                  product: "Secondary TMT Fe 500",
                  brand: "GAJKESARI",
                  location: "EX - Jalna",
                  price: "₹45,500/ MT",
                  change: "0%",
                  time: "22 hours ago",
                },
                {
                  product: "Secondary TMT Fe 550",
                  brand: "MOIRA",
                  location: "EX - Wada",
                  price: "₹46,400/ MT",
                  change: "0%",
                  time: "22 hours ago",
                },
                {
                  product: "Secondary TMT Fe 500",
                  brand: "GAJKESARI",
                  location: "EX - Jalna",
                  price: "₹45,500/ MT",
                  change: "0%",
                  time: "22 hours ago",
                },
                // Add more items as needed
              ].map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 px-4">{item.product}</td>
                  <td className="py-3 px-4">{item.brand}</td>
                  <td className="py-3 px-4">{item.location}</td>
                  <td className="py-3 px-4">
                    {item.price ? (
                      <>
                        <span>{item.price}</span>
                        <span className="text-xs text-gray-500 ml-2">
                          {item.change}
                        </span>
                        <span className="text-xs text-gray-500 block">
                          {item.time}
                        </span>
                      </>
                    ) : (
                      <button className="text-yellow-500 flex items-center">
                        <span>Login To View</span>
                      </button>
                    )}
                  </td>
                  <td className="py-3 px-4 flex items-center space-x-2">
                    <button className="bg-red-500 text-white px-2 py-1 rounded">
                      Sell
                    </button>
                    <button className="bg-green-500 text-white px-2 py-1 rounded">
                      Buy
                    </button>
                    <FaChartBar className="text-blue-500 cursor-pointer" />
                    <FaWhatsapp className="text-green-500 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default SteelPage;
