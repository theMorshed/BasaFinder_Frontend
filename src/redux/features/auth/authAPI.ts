  import axios from "axios";
  import { loginSuccess, logout } from "./authSlice";
  import { AppDispatch } from "@/redux/store";

  const API_URL = "http://localhost:5000/api/user"; // Your backend auth API URL

  export const login = (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      // const { accessToken, refreshToken } = response.data.data;
      const { accessToken } = response.data.data;

      // Store tokens in localStorage
      localStorage.setItem("accessToken", accessToken);
      // localStorage.setItem("refreshToken", refreshToken);

      dispatch(loginSuccess({ accessToken }));
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  // Register function
  export const register = (name: string, email: string, phoneNumber: string, password: string, role: string) => async () => {
    try {
      // Sending user registration data to the backend
      const response = await axios.post(`${API_URL}/register-user`, { name, email, phoneNumber,  password, role });
      return response;
    } catch (error) {
      console.error("Registration failed:", error);
      // Handle registration failure (show error message or other actions)
    }
  };

  export const refreshAccessToken = () => async (dispatch: AppDispatch) => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) return dispatch(logout());

      const response = await axios.post(`${API_URL}/refresh-token`, { refreshToken });
      const { accessToken } = response.data;

      localStorage.setItem("accessToken", accessToken);
      dispatch(loginSuccess({ accessToken }));
    } catch (error) {
      console.error("Token refresh failed:", error);
      dispatch(logout());
    }
  };

  export const logoutUser = () => (dispatch: AppDispatch) => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    dispatch(logout());
  };

  // change password
  export const changePassword = (currentPassword: string, newPassword: string, confirmPassword: string) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post(`${API_URL}/change-password`, { currentPassword, newPassword, confirmPassword }, {
        headers: {
          Authorization: `${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
      });
      dispatch(logout());
      return response;
    } catch (error) {
      console.error("Change Password failed:", error);
    }
  };
