"use client"
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { fetchHouses } from '@/redux/features/house/houseAPI';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import Link from 'next/link';
import RentalRequestModal from '@/components/shared/RentalRequestModal';

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

const HouseListingPage = () => {
    const [houses, setHouses] = useState<THouse[]>([]);
    const [selectedHouse, setSelectedHouse] = useState<string | null>(null);
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
        {/* Banner Section */}
        <div className="relative w-full h-64 bg-gray-800">
            <div className="absolute inset-0 flex items-center justify-center text-white">
                <h1 className="text-[35px] md:text-[38px] lg:text-[50px] xl:text-[6xl] 2xl:text-[65px] text-white font-bold">
                All Rental Houses
                </h1>
            </div>
        </div>
        {/* Rental House Listings */}
        <section className="container mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {houses.length > 0 ? (
            houses.map((house) => (
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
      </div>
    );
};

export default HouseListingPage;