import React, { useEffect } from "react";
import { fetchProducts } from "../services/fetchProducts";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, toggleWishlist } from "../action/actions";

const ProductList = () => {
  const products = useSelector((state) => state.productList.products);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      {products.map((p) => (
        <div key={p.id} style={{ marginBottom: "10px" }}>
          <img src={p.thumbnail} />
          <span>
            {p.title} - {p.price}
          </span>

          <button onClick={() => dispatch(toggleWishlist(p.id))}>
            {p.liked ? "❤️" : "🤍"}
          </button>
        </div>
      ))}
    </>
  );
};

export default ProductList;
