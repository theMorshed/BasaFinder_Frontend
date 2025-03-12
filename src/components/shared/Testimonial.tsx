import Image from "next/image";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    text: "BasaFinder helped me find the perfect rental home within days! The search process was seamless, and I loved how easy it was to compare listings.",
    image: "https://avatar.iran.liara.run/public/boy?username=Ash",
    location: "New York, USA",
  },
  {
    name: "Sarah Ahmed",
    text: "I was struggling to find an affordable house, but BasaFinder made it effortless. Highly recommended for anyone looking for a stress-free rental search!",
    image: "https://avatar.iran.liara.run/public/boy?username=Ash",
    location: "London, UK",
  },
  {
    name: "Michael Lee",
    text: "Great platform! The user-friendly interface and advanced filters made it simple to find exactly what I was looking for.",
    image: "https://avatar.iran.liara.run/public/boy?username=Ash",
    location: "Toronto, Canada",
  },
];

const TestimonialSection = () => {
  return (
    <section className="container mx-auto py-36 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
        What Our Clients Say
      </h2>
      <p className="text-lg text-center text-gray-600 mb-12">
        Real experiences from happy renters who found their perfect home with BasaFinder.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white shadow-lg p-6 rounded-lg text-center">
            <FaQuoteLeft className="text-indigo-600 text-3xl mx-auto mb-4" />
            <p className="text-gray-700 text-lg italic">{testimonial.text}</p>
            <div className="mt-6 flex flex-col items-center">
              <Image
                src={testimonial.image}
                alt={testimonial.name} width={300} height={300}
                className="w-16 h-16 rounded-full border-2 border-indigo-600"
              />
              <h4 className="text-lg font-semibold mt-3">{testimonial.name}</h4>
              <p className="text-gray-500 text-sm">{testimonial.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
