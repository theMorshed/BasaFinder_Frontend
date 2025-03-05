import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the shape of your state
interface House {
  _id: string;
  location: string;
  description: string;
  rentAmount: number;
  bedrooms: number;
  amenities: string[];
  images: string[];
}

interface HouseState {
  houses: House[];
  loading: boolean;
  error: string | null;
}

const initialState: HouseState = {
  houses: [],
  loading: false,
  error: null,
};

// Create a slice with reducers
const houseSlice = createSlice({
  name: 'house',
  initialState,
  reducers: {
    fetchHousesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchHousesSuccess(state, action: PayloadAction<House[]>) {
      state.loading = false;
      state.houses = action.payload;
    },
    fetchHousesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addHouse(state, action: PayloadAction<House>) {
      state.houses.push(action.payload);
    },
    updateHouse(state, action: PayloadAction<House>) {
      state.houses = state.houses.map((house) =>
        house._id === action.payload._id ? action.payload : house
      );
    },
    deleteHouse(state, action: PayloadAction<string>) {
      state.houses = state.houses.filter((house) => house._id !== action.payload);
    },
  },
});

// Export actions to dispatch
export const {
  fetchHousesStart,
  fetchHousesSuccess,
  fetchHousesFailure,
  addHouse,
  updateHouse,
  deleteHouse,
} = houseSlice.actions;

// Export the reducer to be added to the store
export default houseSlice.reducer;
