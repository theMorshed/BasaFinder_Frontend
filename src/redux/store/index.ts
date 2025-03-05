import { configureStore } from "@reduxjs/toolkit";
import { api } from "./apiSlice";
import userReducer from './userSlice';
import { thunk } from 'redux-thunk';
import authReducer from '../features/auth/authSlice';
import rentalReducer from '../features/rental/rentalSlice';
import houseReducer from '../features/house/houseSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    user: userReducer,
    auth: authReducer,
    rental: rentalReducer,
    house: houseReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
