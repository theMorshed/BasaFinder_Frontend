"use client"
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fetchHouses } from '@/redux/features/house/houseAPI';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import Link from 'next/link';
import RentalRequestModal from './RentalRequestModal';

type THouse = {
  _id: string;
  landloard: string;
  location: string;
  description: string;
  rentAmount: number;
  bedrooms: number;
  amenities: string[];
  images: string[];
}

const HouseListing = () => {
    const [selectedHouse, setSelectedHouse] = useState<string | null>(null);
    const [houses, setHouses] = useState<THouse[]>([]);
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState) => state.auth.user);
    
    useEffect(() => {
        // Fetch the users on component mount
        async function fetchAllHouses() {
          const response = await dispatch(fetchHouses());
          setHouses(response); // Make sure your API returns the correct format
        }

        fetchAllHouses();
    }, [dispatch]);

    return (
    <div>
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
        {houses.length > 0 ? (
          houses.slice(0, 3).map((house) => (
            <div key={house._id} className="bg-white shadow-lg rounded-lg p-4">
              <img
                src={house.images?.[0] || "https://via.placeholder.com/300"}
                alt="House"
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4">{house.description}</h3>
              <p className="text-gray-500">Location: {house.location}</p>
              <p className="text-gray-500">${house.rentAmount}/month - {house.bedrooms} Bedrooms</p>
              <div className='flex'>
                  <Link href={`/rental/${house._id}`}>
                    <Button className="mt-4 bg-indigo-600 text-white">
                        View Details
                    </Button>
                  </Link>
                  {user?.role === "tenant"? (<Button className="mt-4 ml-4 bg-indigo-600 text-white" onClick={() => setSelectedHouse(house._id)}>
                      Rental Request
                  </Button>) : ('')}
                  
                </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-3">No houses available.</p>
        )}
      </section>

      {/* Rental Request Modal */}
      {selectedHouse && (
        <RentalRequestModal houseId={selectedHouse} onClose={() => setSelectedHouse(null)} />
      )}

      {/* "See All Houses" Button */}
      <div className="flex justify-center mt-6">
        <Link href={'/rental'}>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg">
            See All Houses
            </Button>
        </Link>
      </div>
    </div>
  );
};

export default HouseListing;