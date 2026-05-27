import React from "react";
import { useState } from "react";
import { useEffect } from "react";

// Multiple API (random)
const Contact = () => {
  const [data, setData] = useState({});

  const fetchData = async () => {
    try {
      const [users, posts, comments] = Promise.all([
        fetch("users"),
        fetch("posts"),
        fetch("comments"),
      ]);
      setData({ users, posts, comments });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <div></div>;
};

export default Contact;
