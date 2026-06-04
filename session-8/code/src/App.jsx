import React from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import { useStore } from "./context/StoreProvider";
import { useCallback } from "react";

const App = () => {
  // consuming a context
  // const { theme } = useContext(StoreContext);
  const { theme } = useStore();

  return (
    <>
      <div
        style={{
          background: theme === "light" ? "#fff" : "black",
          color: theme === "light" ? "black" : "#fff",
          padding: "20px",
        }}
      >
        <Navbar />
        <ProductList />
      </div>
    </>
  );
};

export default App;

// Hooks
// useState()
// useEffect()
// useContext()
// useParams()
// useNavigate()
// useReducer()
// useMemo()
// useCallback()
// Custom Hooks

// REDUX: useDispatch(), useSelector()
