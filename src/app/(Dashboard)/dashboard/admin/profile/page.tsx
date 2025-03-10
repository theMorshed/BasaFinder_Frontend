"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { getAUser, updateUser } from "@/redux/features/user/userAPI";

interface IUser {
  _id: string;
  name: string;
  email: string;
  role: string;
  phoneNumber: string;
}

const ProfilePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.auth.user);

  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    role: "",
  });

  useEffect(() => {
    if (!user?.id) return; // Avoid calling API if user is not available

    // Fetch the user details
    async function fetchAUser() {
      try {
        const response = await dispatch(getAUser(user!.id));
        console.log(response);
        if (response) {
          setCurrentUser(response);
        }
      } catch (error) {
        console.error("Fetching user failed:", error);
      }
    }

    fetchAUser();
  }, [dispatch, user?.id]);

  // Update form data when currentUser changes
  useEffect(() => {
    if (currentUser) {
      setFormData({
        name: currentUser.name || "",
        email: currentUser.email || "",
        phoneNumber: currentUser.phoneNumber || "",
        role: currentUser.role || "",
      });
    }
  }, [currentUser]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(updateUser(user?.id as string, formData));
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Profile update failed:", error);
    }
  };

  if (!currentUser) {
    return <p>Loading...</p>; // Prevent rendering form before data is loaded
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-6 text-center">Update Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-gray-700 mb-1">Name:</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="text-gray-700 mb-1">Email:</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="text-gray-700 mb-1">Phone Number:</span>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="text-gray-700 mb-1">Role:</span>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2 mt-1 bg-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="tenant">Tenant</option>
            <option value="landlord">Landlord</option>
          </select>
        </label>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-blue-600 transition duration-300 mt-4"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
