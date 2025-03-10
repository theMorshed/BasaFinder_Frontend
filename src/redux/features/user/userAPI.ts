/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { AppDispatch } from "@/redux/store";

const API_URL = "http://localhost:5000/api/user"; // Replace with your backend API URL

// Fetch all users
export const getUsers = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data.data; // Assuming backend sends the list of users
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // Handle errors
  }
};

// Create a new user
export const createUser = (email: string, name: string, role: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.post(`${API_URL}/create-user`, { email, name, role });
    console.log("User created successfully:", response.data);
    return response.data; // Assuming backend responds with the created user
  } catch (error) {
    console.error("Error creating user:", error);
    throw error; // Handle errors
  }
};

// Update an existing user's role
export const updateUserRole = (userId: string, role: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.put(`${API_URL}/${userId}`, { role });
    console.log("User role updated successfully:", response.data);
    return response.data; // Assuming backend responds with the updated user
  } catch (error) {
    console.error("Error updating user role:", error);
    throw error; // Handle errors
  }
};

// Update an user
export const getAUser = (id: string) => async () => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data.data;
  } catch (error) {
    console.error("get user failed:", error);
    throw error;
  }
};

// Update an user
export const updateUser = (id: string, userData: any) => async () => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error("Updating user failed:", error);
    throw error;
  }
};

// Delete a user
export const deleteUser = (userId: string, isBlocked: boolean) => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.put(`${API_URL}/${userId}`, {isBlocked});
    console.log("User deleted successfully:", response.data);
    return userId; // Return userId for removing it from the list in the frontend
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error; // Handle errors
  }
};
