import React, { memo, useMemo } from "react";

// memoization
const Cart = memo(({ cart }) => {
  console.log("cart data");

  const total = useMemo(() => {
    return cart.reduce((sum, item) => {
      console.log("sum");
      return sum + item.price;
    }, 0);
  }, [cart]);

  return (
    <>
      <div style={{ flex: 1, borderLeft: "2px solid black", padding: "10px" }}>
        <h2>Cart</h2>
        <p>Total: {total}</p>
        {cart.map((c) => (
          <span>{c.title}</span>
        ))}
      </div>
    </>
  );
});

export default Cart;
