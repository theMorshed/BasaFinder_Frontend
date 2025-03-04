import { configureStore } from "@reduxjs/toolkit";
import { api } from "./apiSlice";
import userReducer from './userSlice';
import { thunk } from 'redux-thunk';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [api.reducerPath]: api.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
