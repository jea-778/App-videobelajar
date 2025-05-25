import { useUsers } from "../../hooks/useApi";

function UserList() {
  const users = useUsers();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
