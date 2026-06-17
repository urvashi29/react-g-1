import React from "react";
import Counter from "./components/Counter";
import ApiCall from "./components/ApiCall";

const App = () => {
  return (
    <div>
      <Counter />
      <ApiCall />
    </div>
  );
};

export default App;

// Animation:
// https://motion.dev/ react + animation
// JS animation library: https://gsap.com/
