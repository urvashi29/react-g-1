import React, { useCallback, useEffect, useMemo, useState } from "react";
import { fetchProducts } from "./services/productService";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import useDebounce from "./hooks/useDebounce";
import { Suspense } from "react";

const Cart = React.lazy(() => import("./components/Cart"));

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    <p>Loading...</p>;
  }

  const filteredProducts = useMemo(() => {
    console.log("searched!");

    return products.filter((p) => {
      // console.log(`${p.title}`);
      return p.title.toLowerCase().includes(debouncedSearch.toLowerCase());
    });
  }, [debouncedSearch, products]);

  const addToCart = useCallback((product) => {
    console.log("product added");
    setCart((prev) => [...prev, product]);
  }, []);

  return (
    <div style={{ display: "flex", padding: "20px" }}>
      <div style={{ flex: 3 }}>
        <SearchBar value={search} onChange={setSearch} />
        <ProductList products={filteredProducts} onAdd={addToCart} />
      </div>

      <Suspense fallback={<p>Component Loading</p>}>
        <Cart cart={cart} />
      </Suspense>
    </div>
  );
};

export default App;
