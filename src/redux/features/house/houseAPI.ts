/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { AppDispatch } from "@/redux/store";

const API_URL = "http://localhost:5000/api/house"; // Your backend house API URL

// Fetch all houses
export const fetchHouses = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data.data;
  } catch (error) {
    console.error("Fetching houses failed:", error);
    throw error;
  }
};

// Fetch all houses
export const fetchLandlordHouses = (landlordId: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(`${API_URL}/${landlordId}`);
    return response.data.data;
  } catch (error) {
    console.error("Fetching houses failed:", error);
    throw error;
  }
};

// Create a new house listing
export const createHouse = async (houseData: any) => {
  try {
    const response = await axios.post(`${API_URL}/create-house`, houseData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Creating house failed:", error);
    throw error;
  }
};

// **Edit house**
export const updateHouse =
  (id: string, houseData: any) => async () => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, houseData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Updating house failed:", error);
      throw error;
    }
  };

// Delete a house
export const deleteHouse = (id: string) => async () => {
  try {
    await axios.delete(`${API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
  } catch (error) {
    console.error("Deleting house failed:", error);
    throw error;
  }
};
