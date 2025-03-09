"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter, useParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { fetchSingleHouse, updateHouse } from "@/redux/features/house/houseAPI";

type HouseFormValues = {
  location: string;
  description: string;
  rentAmount: number;
  bedrooms: number;
  amenities: string;
  images: string;
};

const EditHouse = () => {
  const { id } = useParams(); // Get house ID from URL
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<HouseFormValues>();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchHouseDetails() {
      try {
        const houseData = await dispatch(fetchSingleHouse(id as string));
        if (houseData) {
          setValue("location", houseData.location);
          setValue("description", houseData.description);
          setValue("rentAmount", houseData.rentAmount);
          setValue("bedrooms", houseData.bedrooms);
          setValue("amenities", houseData.amenities.join(", "));
          setValue("images", houseData.images.join(", "));
        }
      } catch (error) {
        console.error("Error fetching house:", error);
        setError("Failed to load house details.");
      }
    }

    if (id) {
      fetchHouseDetails();
    }
  }, [id, dispatch, setValue]);

  // Handle form submission
  const onSubmit = async (data: HouseFormValues) => {
    setLoading(true);
    setError(null);

    try {
      const formattedData = {
        ...data,
        rentAmount: Number(data.rentAmount),
        bedrooms: Number(data.bedrooms),
        amenities: data.amenities.split(",").map((item) => item.trim()),
        images: data.images.split(",").map((item) => item.trim()),
      };

      await updateHouse(id as string, formattedData)();

      reset();
      router.push("/dashboard/admin/house");
    } catch (err) {
      console.error("Error updating house:", err);
      setError("Failed to update house. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Edit House</h1>

      {error && <p className="text-red-500">{error}</p>}

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
          disabled={loading}
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg"
        >
          {loading ? "Updating..." : "Update House"}
        </button>
      </form>
    </div>
  );
};

export default EditHouse;
