/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

type UserType = {
  id: string;
  email: string;
  role: string;
} | null;

type AuthState = {
  accessToken: string | null;
  user: UserType;
};

// Retrieve stored token from localStorage (if available)
const storedToken = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
let storedUser: UserType = null;

if (storedToken) {
  try {
    const decodedToken: any = jwtDecode(storedToken);
    if (decodedToken && decodedToken.id && decodedToken.email && decodedToken.role) {
      storedUser = {
        id: decodedToken.id,
        email: decodedToken.email,
        role: decodedToken.role,
      };
    }
  } catch (error) {
    console.error("Error decoding stored JWT:", error);
  }
}

const initialState: AuthState = {
  accessToken: storedToken,
  user: storedUser,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<{ accessToken: string }>) => {
      state.accessToken = action.payload.accessToken;

      try {
        const decodedToken: any = jwtDecode(action.payload.accessToken);
        if (decodedToken && decodedToken.id && decodedToken.email && decodedToken.role) {
          state.user = {
            id: decodedToken.id,
            email: decodedToken.email,
            role: decodedToken.role,
          };

          // ✅ Store token in localStorage
          localStorage.setItem("accessToken", action.payload.accessToken);
        } else {
          console.warn("JWT token is missing required user fields");
          state.user = null;
        }
      } catch (error) {
        console.error("Error decoding JWT:", error);
        state.user = null;
      }
    },
    logout: (state) => {
      state.accessToken = null;
      state.user = null;

      // ✅ Remove token from localStorage
      localStorage.removeItem("accessToken");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
