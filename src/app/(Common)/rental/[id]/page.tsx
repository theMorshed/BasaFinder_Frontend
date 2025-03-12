"use client"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { fetchSingleHouse } from "@/redux/features/house/houseAPI";
import { useParams } from "next/navigation";
import Image from "next/image";

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

const HouseDetails = () => {
  const { id } = useParams(); // Get house ID from URL
  const dispatch = useDispatch<AppDispatch>();
  const [house, setHouse] = useState<THouse | null>(null);

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleHouse(id as string))
        .then((data) => setHouse(data))
        .catch((error) => console.error("Error fetching house details:", error));
    }
  }, [id, dispatch]);

  if (!house) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full h-64 bg-gray-800">
          <div className="absolute inset-0 flex items-center justify-center text-white">
              <h1 className="text-[35px] md:text-[38px] lg:text-[50px] xl:text-[6xl] 2xl:text-[65px] text-white font-bold">
              House Details
              </h1>
          </div>
      </div>
      <div className="container mx-auto p-6 min-h-screen mt-20">
        <h1 className="text-3xl font-bold mb-7">{house.description}</h1>
        <Image
          src={house.images?.[0] || "https://via.placeholder.com/600"}
          alt="House" width={1024} height={600}
          className="w-full h-96 object-cover rounded-lg"
        />
        <p className="text-lg mt-4">📍 Location: {house.location}</p>
        <p className="text-lg">💰 Rent: ${house.rentAmount}/month</p>
        <p className="text-lg">🛏️ Bedrooms: {house.bedrooms}</p>
        <p className="text-lg">🛠 Amenities: {house.amenities.join(", ")}</p>
      </div>
    </div>
  );
};

export default HouseDetails;
