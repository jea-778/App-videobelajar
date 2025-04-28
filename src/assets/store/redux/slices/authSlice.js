import { createSlice } from "@reduxjs/toolkit";

// Fungsi untuk mendapatkan status login dari localStorage
const getInitialState = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return { isLoggedIn };
};

const initialState = getInitialState();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      localStorage.setItem("isLoggedIn", "true");
      state.isLoggedIn = true;
    },
    logout: (state) => {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("currentUser");
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
