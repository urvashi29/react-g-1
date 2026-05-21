import React, { useState } from "react";
import Products from "./Products";

const App = () => {
  const count = 0; //normal variable

  // [state variable, method to update it] = useState(initial value) //array destructuring
  const [firstName, setFirstName] = useState("Alina");
  const [age, setAge] = useState(20);
  const [isMarried, setIsMarried] = useState(false);
  const [hobbies, setHobbies] = useState(["Reading", "Traveling", "Cooking"]);
  const [address, setAddress] = useState({
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
  });

  const [addToCart, setAddToCart] = useState(function () {});

  const handleUpdate = () => {
    setFirstName("Alex");
    setIsMarried(true);
    setAddress({ ...address, city: "New York" });
    setHobbies([...hobbies, "Gaming"]);
    count = 20;
  };

  return (
    <>
      <p>{count}</p>
      <p>{firstName}</p>
      <p>{age}</p>
      <p>
        {address.city} {address.country}
      </p>
      {hobbies.map((hobby) => {
        return <p>{hobby}</p>;
      })}

      <button onClick={() => setAge(24)}>updateAge</button>

      <button onClick={handleUpdate}>Update</button>
      <Products />
    </>
  );
};

export default App;
