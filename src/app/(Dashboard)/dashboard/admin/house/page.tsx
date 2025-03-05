"use client"
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { fetchHousesStart, fetchHousesSuccess, fetchHousesFailure } from '@/redux/features/house/houseSlice';
import axios from 'axios';
import Link from 'next/link';
import { deleteHouse, fetchHouses } from '@/redux/features/house/houseAPI';

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

const AdminHouseList = () => {
  const [houses, setHouses] = useState<THouse[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  
  useEffect(() => {
    // Fetch the users on component mount
    async function fetchAllHouses() {
      const response = await dispatch(fetchHouses());
      setHouses(response); // Make sure your API returns the correct format
    }

    fetchAllHouses();
  }, [dispatch]);

  // const dispatch = useDispatch();

  // // Access house data from Redux store
  // const { houses, loading, error } = useSelector((state: RootState) => state.house);

  // useEffect(() => {
  //   const fetchHouses = async () => {
  //     dispatch(fetchHousesStart());
  //     try {
  //       const response = await axios.get('http://localhost:5000/api/house');
  //       dispatch(fetchHousesSuccess(response.data));
  //     } catch (err) {
  //       dispatch(fetchHousesFailure('Failed to load houses.'));
  //     }
  //   };

  //   fetchHouses();
  // }, [dispatch]);

  const handleDelete = async (id: string) => {
    try {
      await deleteHouse(id); // Assuming you have a function to handle house deletion
      dispatch(fetchHousesStart()); // Re-fetch houses after deletion
    } catch (err) {
      console.error("Error deleting house", err);
    }
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold text-sky-800">Manage Houses</h1>
      <h2 className="text-2xl font-semibold mb-4 mt-8">Admin House Listings</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Location</th>
              <th className="px-4 py-2 border-b">Rent Amount</th>
              <th className="px-4 py-2 border-b">Bedrooms</th>
              <th className="px-4 py-2 border-b">Amenities</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {houses.length > 0 ? (
              houses.map((house) => (
                <tr key={house._id} className="text-center">
                  <td className="px-4 py-2 border-b">{house.location}</td>
                  <td className="px-4 py-2 border-b">${house.rentAmount}</td>
                  <td className="px-4 py-2 border-b">{house.bedrooms}</td>
                  <td className="px-4 py-2 border-b">{house.amenities.join(', ')}</td>
                  <td className="px-4 py-2 border-b">
                    <Link href={`/admin/edit-house/${house._id}`} className="text-blue-500 mr-4">
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(house._id)}
                      className="text-red-500"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-4">No houses available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminHouseList;
