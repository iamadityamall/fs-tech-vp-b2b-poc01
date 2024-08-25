import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router components
import Navbar from "./components/common/Navbar";
import "./index.css";
import HeroSection from "./components/common/HeroSection";
import AboutSection from "./components/common/AboutSection";
import ServicesSection from "./components/common/ServiceSection";
import TestimonialsSection from "./components/common/TestimonialsSection";
import CTASection from "./components/common/CTASection";
import Footer from "./components/common/Footer";
import ExploreCategories from "./components/common/ExploreCategories"; // Ensure correct path
import CardSection from "./components/common/CardsSection";
import BrandsSection from "./components/common/BrandsSection";
import FeedbackSection from "./components/common/FeedbackSection";
import BannerAppSection from "./components/common/BannerAppSection"; // Ensure correct path
import ChooseUsSection from "./components/common/ChooseUsSection ";
import SteelPage from "./components/common/SteelPage";

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ExploreCategories />
                <ServicesSection />
                <ChooseUsSection />
                <AboutSection />
                <CardSection />
                <BrandsSection />
                <FeedbackSection />
              </>
            }
          />
          <Route path="/steel" element={<SteelPage />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
