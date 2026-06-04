import React from "react";
import { createContext, useState, useContext } from "react";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [cart, setCart] = useState([]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <>
      <StoreContext.Provider value={{ theme, cart, toggleTheme, addToCart }}>
        {children}
      </StoreContext.Provider>
    </>
  );
};

export default StoreProvider;

// custom hook
export const useStore = () => useContext(StoreContext);

// useReducer()
