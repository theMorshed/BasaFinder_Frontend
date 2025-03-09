import React from "react";
import HeroBanner from "@/components/shared/Hero";
import TestimonialSection from "@/components/shared/Testimonial";
import TipsForRenting from "@/components/shared/TipsForRenting";
import HouseListing from "@/components/shared/HouseListing";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <HeroBanner />

      <HouseListing />

      <TestimonialSection />

      <TipsForRenting />

    </div>
  );
};

export default LandingPage;