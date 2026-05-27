import axiosClient from "./axiosClient";

export const getPosts = () => {
  return axiosClient.get("/posts");
};

export const getPostById = (id) => {
  return axiosClient.get(`/posts/${id}`);
};
