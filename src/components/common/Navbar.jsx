// src/components/common/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  FaChartBar,
  FaBolt,
  FaTruck,
  FaInfoCircle,
  FaLock,
  FaSearch,
  FaChevronRight,
} from "react-icons/fa";
import LoginModal from "./LoginModal";
// Example image import; replace with your actual image path
import logo from "../../assets/logo.avif"; // Make sure to have the logo image in the assets folder
import mildSteelImg from "../../assets/mild-steel.webp";
import nonFerrousImg from "../../assets/non-ferrous.jpg";
import polymersImg from "../../assets/polimers.jpg";
import chemicalsImg from "../../assets/chemicals.jpg";
import energyImg from "../../assets/energy.webp";
import stainlessSteelImg from "../../assets/stainless-steel.jpg";
import buildingImg from "../../assets/building.jpg";
import { COLORS } from "../../Constants";

const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [hoverLink, setHoverLink] = useState(null);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);

  const placeholders = [
    "Search for metals",
    "Search for PVC",
    "Search for steel",
    "Search for polymers",
    "Search for Bitumen",
  ];
  const searchRef = useRef(null);

  const categories = [
    {
      name: "Mild Steel",
      image: mildSteelImg,
      subCategories: ["Commodity", "Pipe"],
    },
    { name: "Non Ferrous", image: nonFerrousImg, subCategories: [] },
    {
      name: "Polymers & Packaging",
      image: polymersImg,
      subCategories: [
        "ABS",
        "CPVC",
        "HDPE",
        "LDPE",
        "LLDPE",
        "MDPE",
        "PPCP",
        "PPHP",
      ],
    },
    { name: "Chemicals", image: chemicalsImg, subCategories: [] },
    { name: "Energy & Petroleum", image: energyImg, subCategories: [] },
    { name: "Stainless Steel", image: stainlessSteelImg, subCategories: [] },
    { name: "Building & Construction", image: buildingImg, subCategories: [] },
  ];

  const productData = {
    ABS: {
      cities: ["Ahmedabad", "Delhi", "Mumbai"],
      brands: ["BHANSALI", "LOTTE"],
      grades: ["5000W", "ABSOLAC 920"],
    },
    CPVC: {
      cities: ["Chennai", "Hyderabad", "Kolkata"],
      brands: ["STYRENIX", "TAITA"],
      grades: ["MIF-45", "SD-0150"],
    },
    HDPE: {
      cities: ["Bangalore", "Ghaziabad", "Faridabad"],
      brands: ["Reliance", "Haldia"],
      grades: ["HD5502", "HD6052"],
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowSearchBar(true);
      } else {
        setShowSearchBar(false);
        setShowDropdown(false);
        setShowCategories(false);
        setActiveCategory(null);
        setSelectedProduct(null);
        setHoverLink(null);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowDropdown(false);
      setShowCategories(false);
      setActiveCategory(null);
      setSelectedProduct(null);
      setHoverLink(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleHoverLink = (linkName) => {
    setHoverLink(linkName);
    setShowDropdown(true);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Main Navbar */}
      <nav
        className="py-2"
        style={{
          background: `linear-gradient(to right, ${COLORS.primaryGradientStart}, ${COLORS.primaryGradientEnd})`,
        }}
      >
        <div className="container mx-auto px-3 flex justify-between items-center max-w-7xl">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src={logo}
                alt="Company Logo"
                className="h-10 rounded-full mr-2"
              />
              <h1 className="text-white">Synergy</h1>
            </a>
          </div>

          {/* Search Bar */}
          {showSearchBar && (
            <div
              className="relative flex items-center bg-white rounded-full px-4 py-2 shadow-md w-full max-w-lg"
              ref={searchRef}
              style={{ zIndex: 50 }} // Higher z-index to ensure it's in front
            >
              <FaSearch className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder={placeholders[placeholderIndex]}
                className="focus:outline-none w-full"
                onFocus={() => setShowDropdown(true)}
              />
              {/* Dropdown Menu */}
              {showDropdown && (
                <div className="absolute top-12 left-0 right-0 bg-white shadow-lg rounded-md p-4">
                  <div className="mb-4">
                    <h3 className="text-gray-500 font-semibold mb-2 flex items-center">
                      <FaChartBar className="mr-2" /> Prices
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-100 px-2 py-1 rounded-full text-sm">
                        Bitumen
                      </span>
                      <span className="bg-gray-100 px-2 py-1 rounded-full text-sm">
                        Methanol
                      </span>
                      <span className="bg-gray-100 px-2 py-1 rounded-full text-sm">
                        PVC
                      </span>
                      <span className="bg-gray-100 px-2 py-1 rounded-full text-sm">
                        Secondary TMT
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-500 font-semibold mb-2 flex items-center">
                      <FaBolt className="mr-2" /> News
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-100 px-2 py-1 rounded-full text-sm">
                        Mild Steel
                      </span>
                      <span className="bg-gray-100 px-2 py-1 rounded-full text-sm">
                        Non Ferrous
                      </span>
                      <span className="bg-gray-100 px-2 py-1 rounded-full text-sm">
                        Polymers & Packaging
                      </span>
                      <span className="bg-gray-100 px-2 py-1 rounded-full text-sm">
                        Chemicals
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Main Navigation Links */}
          <div className="flex space-x-4 items-center text-white">
            <a href="#" className="flex items-center hover:text-gray-200">
              <FaChartBar className="mr-2" />
              <span>Prices</span>
            </a>
            <a href="#" className="flex items-center hover:text-gray-200">
              <FaTruck className="mr-2" />
              <span>Orders</span>
            </a>
            <a href="#" className="flex items-center hover:text-gray-200">
              <FaInfoCircle className="mr-2" />
              <span>About Us</span>
            </a>

            {/* Login Button */}
            <button
              onClick={() => setModalVisible(true)}
              className="flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-200 border border-blue-500"
            >
              <FaLock className="mr-2" />
              Login Now
            </button>
          </div>
        </div>
      </nav>

      {/* Sub Navbar */}
      <div className="bg-[#3C3D37] py-2 relative">
        <div className="container mx-auto px-3 flex justify-start items-center space-x-4 text-white text-sm max-w-7xl">
          <div
            className="relative flex items-center space-x-1 cursor-pointer hover:bg-white hover:text-blue-900 p-2 rounded-md"
            onMouseEnter={() => setShowCategories(true)}
            onMouseLeave={() => {
              setShowCategories(false);
              setActiveCategory(null);
              setSelectedProduct(null);
            }}
          >
            <span className="icon-class-name" />
            <span className={`${showCategories ? "text-black" : "text-white"}`}>
              All Categories
            </span>

            {/* Multi-Level Dropdown Menu */}
            {showCategories && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 w-[1000px] p-4 grid grid-cols-5 gap-4">
                {/* Column 1: Categories with Images */}
                <div>
                  <h3 className="text-gray-600 font-bold mb-2 text-sm">
                    Categories
                  </h3>
                  <ul>
                    {categories.map((category) => (
                      <li
                        key={category.name}
                        className={`flex items-center justify-between hover:bg-gray-100 p-2 rounded-md cursor-pointer text-sm ${
                          activeCategory === category.name ? "bg-blue-100" : ""
                        }`}
                        onMouseEnter={() => setActiveCategory(category.name)}
                      >
                        <div className="flex items-center">
                          <img
                            src={category.image}
                            alt={category.name}
                            className="h-6 w-6 mr-2 rounded-full"
                          />
                          <span
                            className={`${
                              activeCategory === category.name
                                ? "text-black"
                                : "text-gray-700"
                            }`}
                          >
                            {category.name}
                          </span>
                        </div>
                        <FaChevronRight />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Remaining Columns */}
                <div>
                  <h3 className="text-gray-600 font-bold mb-2 text-sm">
                    Products
                  </h3>
                  <ul>
                    {(
                      (activeCategory &&
                        categories.find((cat) => cat.name === activeCategory)
                          ?.subCategories) ||
                      []
                    ).map((product) => (
                      <li
                        key={product}
                        className="hover:bg-gray-100 p-2 rounded-md cursor-pointer text-sm"
                        onMouseEnter={() => setSelectedProduct(product)}
                      >
                        {product}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-gray-600 font-bold mb-2 text-sm">City</h3>
                  <ul>
                    {(
                      (selectedProduct &&
                        productData[selectedProduct]?.cities) ||
                      []
                    ).map((city) => (
                      <li
                        key={city}
                        className="hover:bg-gray-100 p-2 rounded-md cursor-pointer text-sm"
                      >
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-gray-600 font-bold mb-2 text-sm">
                    Brands
                  </h3>
                  <ul>
                    {(
                      (selectedProduct &&
                        productData[selectedProduct]?.brands) ||
                      []
                    ).map((brand) => (
                      <li
                        key={brand}
                        className="hover:bg-gray-100 p-2 rounded-md cursor-pointer text-sm"
                      >
                        {brand}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-gray-600 font-bold mb-2 text-sm">
                    Grades
                  </h3>
                  <ul>
                    {(
                      (selectedProduct &&
                        productData[selectedProduct]?.grades) ||
                      []
                    ).map((grade) => (
                      <li
                        key={grade}
                        className="hover:bg-gray-100 p-2 rounded-md cursor-pointer text-sm"
                      >
                        {grade}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Other links showing dropdown without Categories */}
          {[
            "Mild Steel",
            "Non Ferrous",
            "Polymers & Packaging",
            "Chemicals",
            "Energy & Petroleum",
            "Stainless Steel",
            "Building & Construction",
          ].map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-black-200 hover:bg-white hover:text-blue-900 p-2 rounded-md text-sm"
              //onMouseEnter={() => handleHoverLink(link)}
              //onMouseLeave={() => setHoverLink(null)}
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      {/* Shared Dropdown for Other Links */}
      {hoverLink && (
        <div className="absolute bg-white shadow-lg rounded-md mt-2 w-[800px] p-4 grid grid-cols-4 gap-4">
          {/* Columns without Categories */}
          <div>
            <h3 className="text-gray-600 font-bold mb-2 text-sm">Products</h3>
            <ul>
              {(
                (activeCategory &&
                  categories.find((cat) => cat.name === activeCategory)
                    ?.subCategories) ||
                []
              ).map((product) => (
                <li
                  key={product}
                  className="hover:bg-gray-100 p-2 rounded-md cursor-pointer text-sm"
                  onMouseEnter={() => setSelectedProduct(product)}
                >
                  {product}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-gray-600 font-bold mb-2 text-sm">City</h3>
            <ul>
              {(
                (selectedProduct && productData[selectedProduct]?.cities) ||
                []
              ).map((city) => (
                <li
                  key={city}
                  className="hover:bg-gray-100 p-2 rounded-md cursor-pointer text-sm"
                >
                  {city}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-gray-600 font-bold mb-2 text-sm">Brands</h3>
            <ul>
              {(
                (selectedProduct && productData[selectedProduct]?.brands) ||
                []
              ).map((brand) => (
                <li
                  key={brand}
                  className="hover:bg-gray-100 p-2 rounded-md cursor-pointer text-sm"
                >
                  {brand}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-gray-600 font-bold mb-2 text-sm">Grades</h3>
            <ul>
              {(
                (selectedProduct && productData[selectedProduct]?.grades) ||
                []
              ).map((grade) => (
                <li
                  key={grade}
                  className="hover:bg-gray-100 p-2 rounded-md cursor-pointer text-sm"
                >
                  {grade}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Login Modal */}
      <LoginModal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
      />
    </div>
  );
};

export default Navbar;
