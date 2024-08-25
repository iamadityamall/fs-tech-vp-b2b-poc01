import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa"; // Import relevant icons
import customerImage from "../../assets/customer.jpg";
import customerImageTwo from "../../assets/customer_two.jpeg"; // Replace with your actual image path
import BannerAppSection from "./BannerAppSection";
import RequirementForm from "./TellRequirementForm";
import {
  GRADIENTS,
  BUTTON_STYLES,
  TEXT_STYLES,
  CONTAINER_STYLES,
} from "../../Constants"; // Import constants

const reviews = [
  {
    name: "Mr Rahul Bansal",
    feedback:
      "In our mission to deliver distinctive design capabilities for commercial spaces, our interior design company often grapples with the challenges of volatile raw material prices and extended lead times. OfBusiness has been a transformative partner, introducing transparency to our procurement process and consistently providing raw materials at rates lower than our competitors.",
    image: customerImage,
  },
  {
    name: "Ms Priya Sharma",
    feedback:
      "We have had an excellent experience with OfBusiness. They provide high-quality raw materials on time, which has greatly improved our production process. Highly recommended!",
    image: customerImageTwo,
  },
  // Add more reviews as needed
];

const FeedbackSection = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handleNextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePreviousReview = () => {
    setCurrentReviewIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  const currentReview = reviews[currentReviewIndex];

  return (
    <div className={`${GRADIENTS.skyToWhite} pt-32 pb-10 relative`}>
      <div className={CONTAINER_STYLES.feedbackContainer}>
        <h2 className={`${TEXT_STYLES.heading} mb-10`}>
          What Our Customers Say
        </h2>

        <div className={CONTAINER_STYLES.feedbackCard}>
          {/* Customer Image */}
          <div className="flex-none">
            <img
              src={currentReview.image}
              alt={currentReview.name}
              className="rounded-lg shadow-md h-[200px]"
            />
          </div>

          {/* Feedback Content */}
          <div className="flex-grow">
            <FaQuoteLeft className={TEXT_STYLES.quoteIcon} />
            <p className={TEXT_STYLES.subheading}>{currentReview.feedback}</p>
            <p className="text-blue-600 font-semibold">{currentReview.name}</p>
          </div>

          {/* Fixed Navigation Buttons */}
          <div className="absolute bottom-4 right-4 flex space-x-4">
            <button
              onClick={handlePreviousReview}
              className={BUTTON_STYLES.primary}
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleNextReview}
              className={BUTTON_STYLES.secondary}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        <BannerAppSection />
        <RequirementForm />
      </div>
    </div>
  );
};

export default FeedbackSection;
