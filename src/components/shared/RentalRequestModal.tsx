"use client"
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { fetchSingleHouse } from "@/redux/features/house/houseAPI";
import { createRentalRequest } from "@/redux/features/rental/rentalAPI";

type RentalRequestFormValues = {
  moveInDate: string;
  rentalDuration: string;
};

interface RentalRequestModalProps {
  houseId: string;
  onClose: () => void; // Close modal function
}

type THouse = {
  _id: string;
  landlord: string;
  location: string;
  description: string;
  rentAmount: number;
  bedrooms: number;
  amenities: string[];
  images: string[];
}

const RentalRequestModal: React.FC<RentalRequestModalProps> = ({ houseId, onClose }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<RentalRequestFormValues>();
    const dispatch = useDispatch<AppDispatch>();
    const [house, setHouse] = useState<THouse | null>(null);

    useEffect(() => {
        if (houseId) {
        dispatch(fetchSingleHouse(houseId as string))
            .then((data) => setHouse(data))
            .catch((error) => console.error("Error fetching house details:", error));
        }
    }, [houseId, dispatch]);

    const user = useSelector((state: RootState) => state.auth.user);

    const onSubmit = async (data: RentalRequestFormValues) => {
        try {
            // Format the data to match the IRentalRequest interface
            const formattedData = {
                tenant: user?.id, // tenant is the logged-in user
                house: houseId, // The houseId passed into the modal
                landlord: house?.landlord, // Replace with actual landlord ID if available
                moveInDate: new Date(data.moveInDate), // Convert to Date object
                rentalDuration: data.rentalDuration, // rentalDuration is a string (number of months)
                status: "pending", // Default status is "pending"
                paymentStatus: "pending", // Default payment status is "pending"
            };

            // Submit the rental request
            await createRentalRequest(formattedData);

            reset();
            alert("Rental request submitted successfully!");
            onClose(); // Close the modal after submission
        } catch (error) {
            console.error("Error submitting rental request:", error);
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h1 className="text-2xl font-semibold mb-4">Rental Request</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <label className="block text-gray-700">Move-In Date</label>
                <input
                type="date"
                {...register("moveInDate", { required: "Move-in date is required" })}
                className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.moveInDate && <p className="text-red-500">{errors.moveInDate.message}</p>}
            </div>

            <div>
                <label className="block text-gray-700">Rental Duration (in months)</label>
                <input
                type="number"
                {...register("rentalDuration", { required: "Rental duration is required" })}
                className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.rentalDuration && <p className="text-red-500">{errors.rentalDuration.message}</p>}
            </div>

            <div className="flex justify-between items-center">
                <button
                type="submit"
                className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg"
                >
                Submit Request
                </button>
                <button
                type="button"
                onClick={onClose}
                className="py-2 px-4 bg-gray-300 text-gray-700 font-semibold rounded-lg"
                >
                Cancel
                </button>
            </div>
            </form>
        </div>
        </div>
    );
};

export default RentalRequestModal;
