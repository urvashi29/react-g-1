import React from "react";
import { useUsers } from "../hooks/useUsers";

const User = () => {
  const { users, loading } = useUsers();

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {users.map((user) => (
        <p>{user.name}</p>
      ))}
    </>
  );
};

export default User;
