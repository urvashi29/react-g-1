import axiosClient from "../api/axiosClient";

export const getUsers = () => {
  return axiosClient.get("/users");
};

// export const postUser = (body) => {
//     return axiosClient.post(/"users", body)
// }

export const getUserById = (id) => {
  return axiosClient.get(`/users/${id}`);
};
