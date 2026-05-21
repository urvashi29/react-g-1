import React, { useState } from "react";
import { useEffect } from "react";

const Products = () => {
  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState("Alina");

  // initial rendering (mounted)
  useEffect(() => {
    // api call
    console.log("Intial Rendering");
  }, []);

  //   called when state is updated
  useEffect(() => {
    console.log("Count Update");
    //post api call
  }, [count]);

  //   on every re-render
  useEffect(() => {
    console.log("called on every render");
  });

  useEffect(() => {
    const id = setTimeout(() => {
      console.log("Count Update after 1 second");
    }, 1000);

    // componentDidUnmount()
    return () => {
      clearTimeout(id);
    };
  }, [firstName]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={handleClick}>+</button>
      <button onClick={() => setFirstName("Alex")}>Name</button>
    </>
  );
};

export default Products;
