/* eslint-disable @typescript-eslint/no-unused-vars */
// src/redux/features/rental/rentalAPI.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRentalHousesStart, fetchRentalHousesSuccess, fetchRentalHousesFailure } from './rentalSlice';
import axios from 'axios';

const API_URL = "http://localhost:5000/api/house";
// Example API call to fetch rental houses
export const fetchRentalHouses = createAsyncThunk(
  'rental/fetchRentalHouses',
  async (_, { dispatch }) => {
    try {
      dispatch(fetchRentalHousesStart());
      const response = await axios.get(`${API_URL}`);
      console.log(response);
      dispatch(fetchRentalHousesSuccess(response.data.data));
    } catch (error) {
      dispatch(fetchRentalHousesFailure('Failed to load rental houses'));
    }
  }
);
