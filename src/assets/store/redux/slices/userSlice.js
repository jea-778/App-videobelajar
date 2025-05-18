import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
} from "../../../../services/api/users";

// Async Thunks
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await getUsers();
  return response.data;
});

export const createUser = createAsyncThunk(
  "users/createUser",
  async (userData) => {
    const response = await addUser(userData);
    return response.data;
  }
);

export const editUser = createAsyncThunk(
  "users/editUser",
  async ({ id, userData }) => {
    const response = await updateUser(id, userData);
    return response.data;
  }
);

export const removeUser = createAsyncThunk("users/removeUser", async (id) => {
  await deleteUser(id);
  return id;
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    currentUser: null, // tambah ini
    status: "idle",
    error: null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload; // action.payload berupa user object
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Users
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Create User
      .addCase(createUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      // Edit User
      .addCase(editUser.fulfilled, (state, action) => {
        const index = state.users.findIndex(
          (user) => user.id === action.payload.id
        );
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })
      // Delete User
      .addCase(removeUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user.id !== action.payload);
      });
  },
});

export default usersSlice.reducer;
export const { setCurrentUser } = usersSlice.actions;
