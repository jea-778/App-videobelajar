import api from "./index";

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);

    return Promise.reject(error);
  }
);

// GET all users
export const getUsers = () => api.get("/users");

// POST new user
export const addUser = (userData) => api.post("/users", userData);

// PUT update user
export const updateUser = (id, userData) => api.put(`/users/${id}`, userData);

// DELETE user
export const deleteUser = (id) => api.delete(`/users/${id}`);
