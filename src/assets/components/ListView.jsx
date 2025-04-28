import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsers,
  editUser,
  removeUser,
  createUser,
} from "../store/redux/slices/userSlice";
import { deleteUser } from "../../services/api/users";
import { logout } from "@assets/store/redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

function ListView() {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.users);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [dispatch, status]);

  const handleAddUser = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) {
      alert("Belum login, tidak ada data user!");
    } else if (user) {
      dispatch(createUser(user));
    } else {
      console.log("Tidak ada current user di localStorage.");
    }
  };

  const handleEditUser = (id) => {
    const updatedUser = JSON.parse(localStorage.getItem("currentUser"));
    dispatch(editUser({ id, userData: updatedUser }));
  };

  const handleDeleteUser = async (id) => {
    const userString = localStorage.getItem("currentUser");
    const currentUser = userString ? JSON.parse(userString) : null;

    if (!currentUser) {
      console.error("User not found in localStorage");
      return;
    }

    try {
      const confirmDelete = window.confirm("Yakin ingin menghapus akun?");
      if (!confirmDelete) return;

      await deleteUser(currentUser.id);
      localStorage.removeItem("currentUser");
      localStorage.removeItem("users");
      dispatch(logout());
      navigate("/");
    } catch (error) {
      alert("Error deleting user:", error);
    }
    dispatch(removeUser(id));
    dispatch(deleteUser(id));
    localStorage.removeItem("users");
    localStorage.removeItem("currentUser");
    dispatch(logout());
    navigate("/");
  };

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Error: {error}</div>;

  return (
    <>
      <div className="flex flex-col justify-center items-center border rounded-xl bg-white w-[300px]  ">
        <div className="flex flex-col p-2 gap-4">
          <h5>List data user</h5>
          <button
            className="bg-[#3ECF4C] hover:bg-green-600 active:bg-green-700 transition duration-200 rounded-lg text-white font-sans text-[16px] font-medium leading w-full md:w-[112px] h-[34px] md:h-[46px] "
            onClick={() => handleAddUser()}
          >
            Tambah
          </button>
          <ul className="flex flex-col gap-4">
            {users && users.length > 0 ? (
              users.map((user) => (
                <li key={user.id}>
                  <div className="flex flex-col gap-4">
                    <p className="text-[16px] font-[400] font-sans leading-[120%] tracking-[0%]">
                      Nama: {user.name}
                    </p>
                    <p className="text-[16px] font-[400] font-sans leading-[120%] tracking-[0%]">
                      Email: {user.email}
                    </p>
                    <div className="flex gap-5">
                      <button
                        className="bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 transition duration-200 rounded-lg text-white font-sans text-[16px] font-medium leading w-full md:w-[112px] h-[34px] md:h-[46px] "
                        onClick={() => handleEditUser(user.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-600 hover:bg-red-700 active:bg-red-800 transition duration-200 rounded-lg text-white font-sans text-[16px] font-medium leading w-full md:w-[112px] h-[34px] md:h-[46px] "
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <li>No users found.</li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ListView;
