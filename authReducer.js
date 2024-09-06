// src/redux/authReducer.js
import { createSlice } from "@reduxjs/toolkit"; // Assuming you're using Redux Toolkit

const initialState = {
  user: null, // Initial state for the user object
  // Add other authentication state properties as needed
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.user = action.payload; // Update user state on successful login
    },
    registerUser(state, action) {
      // Add logic to handle user registration and update state
    },
    // Add other authentication actions as needed
  },
});

export const { loginSuccess, registerUser } = authSlice.actions; // Export actions
export default authSlice.reducer; // Export the reducer
