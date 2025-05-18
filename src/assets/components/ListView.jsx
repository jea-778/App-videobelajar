import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsers,
  editUser,
  removeUser,
  createUser,
} from "../store/redux/slices/userSlice";

function ListView() {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAddUser = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    const userExists = users.some((u) => u.email === user.email);

    if (userExists) {
      alert("User sudah ada di data, tidak bisa tambah lagi.");
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
    const findUser = users.find((u) => u.id === user.id);
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

  const handleDeleteUser = () => {
    const id = getIdUser();
    try {
      dispatch(removeUser(id));
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
      <div className="flex flex-col p-6 gap-4 border rounded-xl bg-white w-full md:w-[500px]  ">
        <div className="flex flex-col gap-2">
          <h5 className="text-[24px] font-poppins font-bold leading w-full ">
            List data user
          </h5>
          <button
            className="bg-[#3ECF4C] hover:bg-green-600 active:bg-green-700 transition duration-200 rounded-xl text-white font-sans text-[16px] font-medium leading w-full md:w-[200px] h-[34px] md:h-[46px] "
            onClick={() => handleAddUser()}
          >
            Tambah
          </button>
        </div>
        <ul className="flex flex-col gap-4">
          {users && users.length > 0 ? (
            users.map((user) => {
              const isCurrentUser = currentUser?.id === user.id;

              return (
                <li key={user.id}>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col border-[#3ECF4C] border rounded-xl p-2 ">
                      <p className="text-[16px] font-poppins font-medium leading w-full ">
                        Nama : {user.name}
                      </p>
                      <p className="text-[16px] font-poppins font-medium leading w-full ">
                        Email : {user.email}
                      </p>
                    </div>

                    {isCurrentUser && (
                      <div className="flex flex-col md:flex-row md:flex justify-center gap-5">
                        <button
                          className="bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 transition duration-200 rounded-xl text-white font-sans text-[16px] font-medium leading w-full md:w-[212px] h-[34px] md:h-[46px] "
                          onClick={() => handleEditUser(user.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-600 hover:bg-red-700 active:bg-red-800 transition duration-200 rounded-xl text-white font-sans text-[16px] font-medium leading w-full md:w-[212px] h-[34px] md:h-[46px]"
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
    </>
  );
}

export default ListView;
