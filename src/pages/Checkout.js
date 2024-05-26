import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import "./Checkout.css";

const Checkout = () => {
  const { cart, dispatch } = useCart();

  const removeItem = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  const increaseQuantity = (product) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: product });
  };

  const decreaseQuantity = (product) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: product });
  };

  return (
    <div>
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        ))
      )}
    </div>
  );
};

export default Checkout;
