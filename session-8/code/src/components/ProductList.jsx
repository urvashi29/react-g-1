import React from "react";
import products from "../data/products";
import { useStore } from "../context/StoreProvider";

const ProductList = () => {
  const { addToCart } = useStore();

  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          {product.name} - {product.price}
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </>
  );
};

export default ProductList;
