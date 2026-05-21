import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Product = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios("https://dummyjson.com/products");
      console.log(response.data.products);
      setProducts(response.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const productList =
    products.length &&
    products.map((product) => {
      return (
        <>
          <h4>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </h4>
          <p>{product.description}</p>
        </>
      );
    });

  return <div>{productList}</div>;
};

export default Product;

// npm install axios
