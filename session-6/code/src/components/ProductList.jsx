import React from "react";

const ProductItem = ({ product, onAdd }) => {
  //   console.log(`${product.title}`);

  return (
    <div style={{ marginBottom: "10px" }}>
      <span>
        {product.title} {product.price}
      </span>

      <button onClick={() => onAdd(product)}>Add</button>
    </div>
  );
};

const ProductList = ({ products, onAdd }) => {
  // console.log("product list");

  return (
    <>
      {products.length &&
        products.map((product) => (
          <ProductItem key={product.id} product={product} onAdd={onAdd} />
        ))}
    </>
  );
};

export default ProductList;
