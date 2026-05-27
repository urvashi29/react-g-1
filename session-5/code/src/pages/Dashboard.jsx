import React from "react";
import { useEffect } from "react";

// Sequiential API Call
const Dashboard = () => {
  const fetchData = async () => {
    try {
      const user = await fetch("");
      const posts = await fetch("");
      const comments = await fetch("");
      // setUser()
      // setPosts()
      // setComments();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div></div>;
};

export default Dashboard;
