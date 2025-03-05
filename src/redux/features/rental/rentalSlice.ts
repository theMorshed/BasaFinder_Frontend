// src/redux/features/rental/rentalSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the shape of your state
interface RentalHouse {
  location: string;
  description: string;
  rentAmount: number;
  bedrooms: number;
  amenities: string;
  images: string[];
}

interface RentalState {
  rentalHouses: RentalHouse[];
  loading: boolean;
  error: string | null;
}

const initialState: RentalState = {
  rentalHouses: [],
  loading: false,
  error: null,
};

// Create a slice with reducers
const rentalSlice = createSlice({
  name: 'rental',
  initialState,
  reducers: {
    fetchRentalHousesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchRentalHousesSuccess(state, action: PayloadAction<RentalHouse[]>) {
      state.loading = false;
      state.rentalHouses = action.payload;
    },
    fetchRentalHousesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addRentalHouse(state, action: PayloadAction<RentalHouse>) {
      state.rentalHouses.push(action.payload);
    },
  },
});

// Export actions to dispatch
export const {
  fetchRentalHousesStart,
  fetchRentalHousesSuccess,
  fetchRentalHousesFailure,
  addRentalHouse,
} = rentalSlice.actions;

// Export the reducer to be added to the store
export default rentalSlice.reducer;