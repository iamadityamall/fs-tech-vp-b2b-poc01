// src/components/common/CTASection.jsx
import React from "react";

const CTASection = () => {
  return (
    <section className="bg-blue-600 py-16">
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Ready to Grow Your Business with Company?
        </h2>
        <p className="text-base md:text-lg mb-8">
          Contact us today to learn more about our services and how we can help
          your business succeed.
        </p>
        <a
          href="#"
          className="bg-white text-blue-600 px-4 md:px-6 py-2 md:py-3 rounded-md text-base md:text-lg hover:bg-gray-100"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default CTASection;
