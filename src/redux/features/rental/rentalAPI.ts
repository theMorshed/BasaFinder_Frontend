/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { AppDispatch } from "@/redux/store";

const API_URL = "https://basafinderbackend.vercel.app/api/rental-request"; // Your backend house API URL

// Create a new house listing
export const createRentalRequest = async (requestData: any) => {
  try {
    const response = await axios.post(`${API_URL}/create-request`, requestData, {
      headers: {
        Authorization: `${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Creating request failed:", error);
    throw error;
  }
};

// Fetch all houses
export const fetchRentalRequests = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data.data;
  } catch (error) {
    console.error("Fetching houses failed:", error);
    throw error;
  }
};

// Fetch all houses
export const fetchTenantRequests = (tenantId: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(`${API_URL}/tenant/${tenantId}`, {
      headers: {
        Authorization: `${localStorage.getItem("accessToken")}`
      }});
    return response.data.data;
  } catch (error) {
    console.error("Fetching houses failed:", error);
    throw error;
  }
};

// Fetch all houses
export const fetchLandlordRequests = (landlordId: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(`${API_URL}/landlord/${landlordId}`, {
      headers: {
        Authorization: `${localStorage.getItem("accessToken")}`
      }});
    return response.data.data;
  } catch (error) {
    console.error("Fetching houses failed:", error);
    throw error;
  }
};

// Update an existing user's role
export const updateRequest = (requestId: string, status: string) => async (dispatch: AppDispatch) => {
  try {
    let response;
    if (status === 'approved') {
      response = await axios.patch(`${API_URL}/${requestId}/approve`, {status}, {
      headers: {
        Authorization: `${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      }});
    } else {
      response = await axios.patch(`${API_URL}/${requestId}/reject`);
    }
    
    return response.data.data; // Assuming backend responds with the updated user
  } catch (error) {
    console.error("Error updating user role:", error);
    throw error; // Handle errors
  }
};

// // Fetch single house
// export const fetchSingleHouse = (id: string) => async (dispatch: AppDispatch) => {
//   try {
//     const response = await axios.get(`${API_URL}/${id}`);  
//     return response.data.data;
//   } catch (error) {
//     console.error("Fetching house failed:", error);
//     throw error;
//   }
// };

// // **Edit house**
// export const updateHouse =
//   (id: string, houseData: any) => async () => {
//     try {
//       const response = await axios.put(`${API_URL}/${id}`, houseData, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//           "Content-Type": "application/json",
//         },
//       });
//       return response.data;
//     } catch (error) {
//       console.error("Updating house failed:", error);
//       throw error;
//     }
//   };

// // Delete a house
// export const deleteHouse = (id: string) => async () => {
//   try {
//     await axios.delete(`${API_URL}/${id}`, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//       },
//     });
//   } catch (error) {
//     console.error("Deleting house failed:", error);
//     throw error;
//   }
// };

