import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;

{
  /* <a href="/contact.html"></a> */
}
