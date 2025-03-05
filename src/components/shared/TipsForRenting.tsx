// This is a React component for your landing page in Next.js

import React from 'react';

const TipsForRenting = () => {
  return (
    <section className="bg-gray-50 py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">Tips for Renting Your Dream Home</h2>
        <p className="text-lg text-gray-600 mb-12">
          Renting a home is an exciting journey. Here are some useful tips to help guide you in finding the perfect place to live.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Set a Clear Budget</h3>
            <p className="text-gray-600">
              Knowing your budget is key to narrowing down your options. Consider all costs, including rent, utilities, and maintenance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Research the Neighborhood</h3>
            <p className="text-gray-600">
              Location matters! Check out nearby amenities and transportation options to ensure the area suits your lifestyle.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Understand Your Lease Agreement</h3>
            <p className="text-gray-600">
              Read the fine print carefully. Understand lease terms, rent increase clauses, and any pet or subletting restrictions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Inspect the Property</h3>
            <p className="text-gray-600">
              Always visit the property in person. Look for any issues with appliances, plumbing, or safety features.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">5. Check for Hidden Costs</h3>
            <p className="text-gray-600">
              Ask about additional costs like maintenance, parking, or pet fees to avoid unexpected expenses.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">6. Know Your Rights as a Tenant</h3>
            <p className="text-gray-600">
              Familiarize yourself with local tenant laws to ensure you are aware of your rights and responsibilities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">7. Ask About Maintenance & Repairs</h3>
            <p className="text-gray-600">
              Know how maintenance issues are handled and who’s responsible for repairs before signing the lease.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">8. Consider Renters Insurance</h3>
            <p className="text-gray-600">
              Renters insurance protects your personal belongings from theft or damage. It’s a small cost for peace of mind.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">9. Look for Flexible Lease Terms</h3>
            <p className="text-gray-600">
              If you need flexibility, search for properties with month-to-month leases or shorter lease terms.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">10. Plan Ahead for Your Move-In</h3>
            <p className="text-gray-600">
              Start preparing early to ensure a smooth transition. Schedule movers and set up utilities in advance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TipsForRenting;
