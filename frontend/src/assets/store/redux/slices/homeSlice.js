import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  error: "",
  subs: "",
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSubs: (state, action) => {
      state.subs = action.payload;
    },
  },
});

export const { setEmail, setError, setSubs } = homeSlice.actions;
export default homeSlice.reducer;
