import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await login(form.username, form.password);
      console.log(result);
      localStorage.setItem("token", result.token);
      navigate("/notes");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div>
        <h2>Login</h2>
        <input
          placeholder="Username..."
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <input
          placeholder="Password..."
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  );
};

export default Login;
