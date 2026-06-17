import React from "react";
import {
  useGetAllPostQuery,
  useGetAllUsersQuery,
  useGetPostByIdQuery,
} from "../slices/userSlice";

const ApiCall = () => {
  const responsePosts = useGetAllPostQuery();
  //   const responseUsers = useGetAllUsersQuery();
    const responseById = useGetPostByIdQuery(6);

  console.log(responsePosts, responseById);

  if (responsePosts.isLoading) return <p>Loading...</p>;

  return (
    <div>
      {responsePosts.data.length &&
        responsePosts.data.map((post) => (
          <div key={post.id}>{post.title} </div>
        ))}
    </div>
  );
};

export default ApiCall;
