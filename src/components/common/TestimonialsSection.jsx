// src/components/common/TestimonialsSection.jsx
import React from "react";

const testimonials = [
  {
    quote:
      "Company provided us with outstanding service and financial solutions that helped our business grow.",
    author: "John Doe, CEO of XYZ Corp",
  },
  {
    quote:
      "The team at Company is fantastic! They offered valuable insights and were always there to support us.",
    author: "Jane Smith, Founder of ABC Ltd",
  },
];

const TestimonialCard = ({ quote, author }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-6">
    <p className="text-gray-700 italic mb-4">"{quote}"</p>
    <h4 className="text-gray-900 font-semibold text-base md:text-lg">
      {author}
    </h4>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
          What Our Clients Say
        </h2>
        <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="max-w-sm w-full md:w-1/2 lg:w-1/3 p-4">
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
