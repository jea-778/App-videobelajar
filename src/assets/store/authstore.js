import { create } from "zustand";

// Fungsi untuk mengambil state dari localStorage
const getInitialState = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return { isLoggedIn };
};

const useAuthStore = create((set) => ({
  isLoggedIn: getInitialState().isLoggedIn,
  login: () => {
    localStorage.setItem('isLoggedIn', 'true');
    set({ isLoggedIn: true });
  },
  logout: () => {
    localStorage.removeItem('isLoggedIn');
    set({ isLoggedIn: false });
  },
}));

export default useAuthStore;