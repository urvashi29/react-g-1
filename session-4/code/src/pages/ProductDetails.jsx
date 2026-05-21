import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { pid } = useParams();
  console.log(pid);

  const fetchProduct = async () => {
    try {
      const response = await axios(`https://dummyjson.com/products/${pid}`);
      console.log(response.data);
      setProduct(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return <>{product.title && <h1>{product.title}</h1>}</>;
};

export default ProductDetails;
