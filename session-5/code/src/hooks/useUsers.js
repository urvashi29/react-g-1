import { getUsers } from "../api/userApi";
import { useEffect, useState } from "react";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers()
      .then((res) => {
        setUsers(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  });

  return { users, loading };
};
