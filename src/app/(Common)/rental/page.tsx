// pages/rentals.tsx

import Image from "next/image";

const rentals = [
  {
    id: 1,
    name: 'Modern Apartment in Downtown',
    location: 'Downtown City',
    price: 1200,
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
  },
  {
    id: 2,
    name: 'Cozy Studio near the Beach',
    location: 'Sunny Beach',
    price: 800,
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
  },
  {
    id: 3,
    name: 'Spacious House with Garden',
    location: 'Green Valley',
    price: 1500,
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
  },
  {
    id: 4,
    name: 'Charming Loft in the City Center',
    location: 'City Center',
    price: 1000,
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
  },
];

const RentalsPage = () => {
  return (
    <div className="bg-gray-50">
        {/* Banner Section */}
        <div className="relative w-full h-64 bg-gray-800">
            <div className="absolute inset-0 flex items-center justify-center text-white">
                <h1 className="text-[35px] md:text-[38px] lg:text-[50px] xl:text-[6xl] 2xl:text-[65px] text-white font-bold">
                All Rental Houses
                </h1>
            </div>
        </div>

      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Available Rentals</h1>

          {/* Rental Listings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rentals.map((rental) => (
              <div
                key={rental.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <Image src={rental.image}
                  alt={rental.name}
                  className="w-full h-48 object-cover" width={500} height={400} />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{rental.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{rental.location}</p>
                  <p className="text-lg font-bold text-indigo-600 mb-4">${rental.price}/month</p>
                  <button className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

    </div>
  );
};

export default RentalsPage;
