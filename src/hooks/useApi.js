import { useState, useEffect } from "react";
import { getUsers } from "../api/users";

export const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  return users;
};
