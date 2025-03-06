"use client"
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { createHouse } from "@/redux/features/house/houseAPI";

type HouseFormValues = {
  location: string;
  description: string;
  rentAmount: number;
  bedrooms: number;
  amenities: string;
  images: string;
};

const CreateHouse = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<HouseFormValues>();
  
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.user);

  const onSubmit = async (data: HouseFormValues) => {
    try {
      const formattedData = {
        ...data,
        landlord: user?.id,
        rentAmount: Number(data.rentAmount),
        bedrooms: Number(data.bedrooms),
        amenities: data.amenities.split(",").map((item) => item.trim()),
        images: data.images.split(",").map((item) => item.trim()),
      };
    //   console.log(createHouse);
     // Call the corrected createHouse function
    await createHouse(formattedData);
    
    reset();
    router.push("/dashboard/landlord/house"); // Redirect after successful creation
    } catch (error) {
      console.error("Error creating house:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Create House</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-gray-700">Location</label>
          <input
            type="text"
            {...register("location", { required: "Location is required" })}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.location && <p className="text-red-500">{errors.location.message}</p>}
        </div>

        <div>
            <label className="block text-gray-700">Description</label>
            <textarea
                {...register("description")}
                className="w-full p-2 border border-gray-300 rounded resize-none"
                rows={3}
                placeholder="Describe your House perfectly."
            />
        </div>

        <div>
          <label className="block text-gray-700">Rent Amount</label>
          <input
            type="number"
            {...register("rentAmount", { required: "Rent amount is required" })}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.rentAmount && <p className="text-red-500">{errors.rentAmount.message}</p>}
        </div>

        <div>
          <label className="block text-gray-700">Bedrooms</label>
          <input
            type="number"
            {...register("bedrooms", { required: "Number of bedrooms is required" })}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.bedrooms && <p className="text-red-500">{errors.bedrooms.message}</p>}
        </div>

        <div>
            <label className="block text-gray-700">Amenities (comma-separated)</label>
            <textarea
                {...register("amenities")}
                className="w-full p-2 border border-gray-300 rounded resize-none"
                rows={3}
                placeholder="e.g., WiFi, Parking, Air Conditioning"
            />
        </div>

        <div>
            <label className="block text-gray-700">Images (comma-separated URLs)</label>
            <textarea
                {...register("images")}
                className="w-full p-2 border border-gray-300 rounded resize-none"
                rows={3}
                placeholder="e.g., https://example.com/img1.jpg, https://example.com/img2.jpg"
            />
        </div>


        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg"
        >
          Create House
        </button>
      </form>
    </div>
  );
};

export default CreateHouse;
