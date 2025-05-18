import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/userSlice";
import homeReducer from "./slices/homeSlice";
import authReducer from "./slices/authSlice";
import loadingReducer from "./slices/loadingSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    home: homeReducer,
    auth: authReducer,
    loading: loadingReducer,
  },
});
