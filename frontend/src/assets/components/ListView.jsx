import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsers,
  editUser,
  removeUser,
  createUser,
  setCurrentUser,
} from "../store/redux/slices/userSlice";
import { hideLoading, showLoading } from "../store/redux/slices/loadingSlice";

function ListView() {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.users);
  const currentUser = useSelector((state) => state.users.currentUser);

  useEffect(() => {
    dispatch(fetchUsers());

    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      dispatch(setCurrentUser(user));
    }
  }, [dispatch]);

  const handleAddUser = async () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) {
      alert("Belum login, tidak ada data user!");
      return;
    }

    const userExists = users.some((u) => u.email === user.email);
    if (userExists) {
      alert("User sudah ada di data, tidak bisa tambah lagi.");
      return;
    }

    try {
      dispatch(showLoading());
      await dispatch(createUser(user)).unwrap();
      dispatch(setCurrentUser(user));
    } catch (error) {
      alert("Error adding user: " + error.message);
    } finally {
      dispatch(hideLoading());
    }
  };


  const getIdUser = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) return null;
    const findUser = users.find((u) => u.id === user.id);
    return findUser ? findUser.id : null;
  };

  const handleEditUser = async () => {
    const updatedUser = JSON.parse(localStorage.getItem("currentUser"));
    const id = getIdUser();

    try {
      dispatch(showLoading());
      await dispatch(editUser({ id, userData: updatedUser })).unwrap();
    } catch (error) {
      alert("Error editing user: " + error.message);
    } finally {
      dispatch(hideLoading());
    }
    if (!id) {
      alert("User belum terdaftar di database");
      return;
    }
  };

  const handleDeleteUser = async () => {
    const id = getIdUser();
    if (!id) {
      alert("User belum terdaftar di database");
      return;
    }

    try {
      dispatch(showLoading());
      await dispatch(removeUser(id)).unwrap();
    } catch (error) {
      alert("Error deleting user: " + error.message);
    } finally {
      dispatch(hideLoading());
    }
  };


  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Error: {error}</div>;

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
          {Array.isArray(users) && users.length > 0 ? (
            users.map((user) => {
              const isCurrentUser = currentUser?.id === user.id;

              return (
                <li key={user.id}>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col border border-[#3ECF4C] rounded-xl p-4">
                      <p className="text-[16px] font-medium font-poppins leading">
                        Nama : {user.name || 'Tidak ada nama'}
                      </p>
                      <p className="text-[16px] font-medium font-poppins leading">
                        Email : {user.email || 'Tidak ada email'}
                      </p>
                    </div>

                    {isCurrentUser && (
                      <div className="flex flex-col md:flex-row justify-center gap-4">
                        <button
                          className="bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 transition duration-200 rounded-xl text-white text-[16px] font-medium w-full md:w-[212px] h-[46px]"
                          onClick={() => handleEditUser(user.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-600 hover:bg-red-700 active:bg-red-800 transition duration-200 rounded-xl text-white text-[16px] font-medium w-full md:w-[212px] h-[46px]"
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
            <li className="text-center text-gray-500">No users found.</li>
          )}
        </ul>

      </div>
    </>
  );
}

export default ListView;
