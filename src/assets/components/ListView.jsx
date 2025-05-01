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
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAddUser = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    const userExists = users.some((u) => u.email === user.email);

    if (userExists) {
      alert("User sudah ada di daftar, tidak bisa tambah lagi.");
    } else {
      dispatch(createUser(user));
    }

    if (!user) {
      alert("Belum login, tidak ada data user!");
      return;
    }
  };

  const getIdUser = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) return null;
    const findUser = users.find((u) => u.email === user.email);
    return findUser ? findUser.id : null;
  };

  const handleEditUser = () => {
    const updatedUser = JSON.parse(localStorage.getItem("currentUser"));
    const id = getIdUser();

    dispatch(editUser({ id, userData: updatedUser }));
    if (!id) {
      alert("User belum terdaftar di database");
      return;
    }
  };

  const handleDeleteUser = async () => {
    const id = getIdUser();
    try {
      const confirmDelete = window.confirm("Yakin ingin menghapus akun?");
      if (!confirmDelete) return;

      await deleteUser(id);
      localStorage.removeItem("currentUser");
      dispatch(logout());
      navigate("/");
    } catch (error) {
      alert("Error deleting user:", error.message);
    }

    if (!id) {
      alert("User belum terdaftar di database");
      return;
    }
  };

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Error: {error}</div>;

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <>
      <div className="flex flex-col justify-start p-6 border rounded-xl bg-white w-[500px]  ">
        <div className="flex flex-col gap-4">
          <h5>List data user</h5>
          <button
            className="bg-[#3ECF4C] hover:bg-green-600 active:bg-green-700 transition duration-200 rounded-lg text-white font-sans text-[16px] font-medium leading w-full md:w-[112px] h-[34px] md:h-[46px] "
            onClick={() => handleAddUser()}
          >
            Tambah
          </button>
          <ul className="flex flex-col gap-4">
            {users && users.length > 0 ? (
              users.map((user) => {
                const isCurrentUser = currentUser?.id === user.id;

                return (
                  <li key={user.id}>
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <p className="text-[16px] font-poppins font-medium leading w-full ">
                          Nama: {user.name}
                        </p>
                        <p className="text-[16px] font-poppins font-medium leading w-full ">
                          Email: {user.email}
                        </p>
                      </div>

                      {isCurrentUser && (
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
                      )}
                    </div>
                  </li>
                );
              })
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
