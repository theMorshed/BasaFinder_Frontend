import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import HeroBanner from "@/components/shared/Hero";
import TestimonialSection from "@/components/shared/Testimonial";
import TipsForRenting from "@/components/shared/TipsForRenting";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <HeroBanner />

      {/* Search Bar Section */}
      <section className="container mx-auto py-12 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          Find Your Dream Rental Home
        </h2>
        <p className="text-lg text-center text-gray-600 mb-8">
          Search by location, price, and bedrooms to discover the perfect home for you.
        </p>
        <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center">
          <Input placeholder="Enter Location" className="flex-1 px-4 py-3 border rounded-md" />
          <Input placeholder="Price Range (e.g. $500 - $1500)" className="flex-1 px-4 py-3 border rounded-md" />
          <Input placeholder="Bedrooms (e.g. 1, 2, 3+)" className="flex-1 px-4 py-3 border rounded-md" />
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg">
            Search
          </Button>
        </div>
      </section>


      {/* Rental House Listings */}
      <section className="container mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white shadow-lg rounded-lg p-4">
            <img
              src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
              alt="House"
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Beautiful Apartment</h3>
            <p className="text-gray-500">Location: City Center</p>
            <p className="text-gray-500">$1200/month - 3 Bedrooms</p>
            <Button className="mt-4 w-full bg-indigo-600 text-white">View Details</Button>
          </div>
        ))}
      </section>

      <TestimonialSection />

      <TipsForRenting />

    </div>
  );
};

export default LandingPage;