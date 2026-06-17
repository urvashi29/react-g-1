import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),

  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),

    getPostById: builder.query({
      query: (id) => {
        return {
          url: `posts/${id}`,
          method: "GET",
        };
      },
    }),

    getAllUsers: builder.query({
      query: () => ({
        url: "users",
        method: "GET",
      }),
    }),

    postData: builder.mutation({
      query: (user) => ({
        url: "/",
        body: user,
        method: "POST",
      }),
    }),
  }),
});

// prefix -> use
// suffix -> Query
export const { useGetAllPostQuery, useGetPostByIdQuery, useGetAllUsersQuery } =
  userApi;

console.log(userApi);
