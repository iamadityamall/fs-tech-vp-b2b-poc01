// src/constants.js

export const COLORS = {
  primaryGradientStart: "#1E201E", // teal-400
  primaryGradientEnd: "#3C3D37", // blue-500
  secondary: "#1a202c", // gray-900
  white: "#ffffff", // white
  lightBlue: "#90cdf4", // light blue
  textPrimary: "#ffffff", // white for text
  textSecondary: "#2d3748", // gray-700
  highlight: "#ebf8ff", // light blue-100
  shadow: "rgba(0, 0, 0, 0.1)", // shadow color
};

export const GRADIENTS = {
  verticalSkyBlueToWhite: `linear-gradient(to bottom, ${COLORS.primaryGradientEnd}, ${COLORS.white})`,
  // Add more gradients if needed
  tealToBlue: "bg-gradient-to-r from-[#3C3D37] to-[#1E201E]",
  skyToWhite: "bg-gradient-to-b from-white to-white",
};

export const BUTTON_STYLES = {
  //primary: "p-2 bg-blue-500 text-white rounded-md w-full max-w-[400px]",
  primary:
    "bg-blue-500 text-white rounded-full p-2 hover:bg-blue-700 transition duration-200",
  secondary:
    "bg-gray-300 text-black rounded-full p-2 hover:bg-gray-500 transition duration-200",
};

export const LABEL_STYLES = "text-sm text-gray-700 ml-3 mb-1";
export const INPUT_STYLES = "w-full p-2 border rounded-md";

export const TEXT_STYLES = {
  heading: "text-4xl font-bold text-black",
  subheading: "text-lg text-gray-600",
  quoteIcon: "text-teal-500 text-2xl mb-4",
};

export const CONTAINER_STYLES = {
  feedbackContainer: "container mx-auto px-8 max-w-7xl text-left",
  feedbackCard:
    "flex items-center bg-white rounded-lg shadow-lg p-8 space-x-8 relative   ",
};

// src/constants/footerConstants.js



export const GRADIENT_BACKGROUND = "bg-black";
export const FOOTER_TEXT_COLOR = "text-white";
export const APP_STORE_URL = "https://apps.apple.com";
export const PLAY_STORE_URL = "https://play.google.com";
export const COMPANY_INFO = {
  name: "Synergy Private Limited",
  description:
    "Smart Procurement for SMEs\nGet Best Prices for your Raw Materials requirements",
  address: `1234 Elm Street, Suite 567,\nDowntown Business District,\nMetropolis City, ZIP 12345`,
  cin: "ABCD1234EFG5678",
  phone: "0123456789",
  email: "info@dummycompany.com",
};
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  youtube: "https://youtube.com",
};
export const FOOTER_CATEGORIES = [
  "Mild Steel",
  "Non Ferrous",
  "Polymers & Packaging",
  "Chemicals",
  "Energy & Petroleum",
  "Stainless Steel",
  "Building & Construction",
];
export const FOOTER_LINKS = {
  company: ["About Us", "Team", "Investors", "Debt Partners", "SMEAssist"],
  resources: ["OFB in News", "Blogs", "CEO Speaks", "Download Media Kit"],
  support: [
    "Privacy & Terms",
    "Contact Us",
    "General Enquiries",
    "Supplier Enquiries",
    "Partner Enquiries",
    "Investor Relations",
  ],
};
