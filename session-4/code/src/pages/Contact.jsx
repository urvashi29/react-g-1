import React from "react";
import Banner from "../components/Banner";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/home");
  }, 2000);

  return (
    <div>
      <Banner display="Contact" />
    </div>
  );
};

export default Contact;
