import React from "react";
import "./CartItem.css"; // Add CSS import

const CartItem = ({ item, removeItem, increaseQuantity, decreaseQuantity }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h2>{item.name}</h2>
        <p>${item.price}</p>
        <button onClick={() => increaseQuantity(item)}>+</button>
        <span>{item.quantity}</span>
        <button onClick={() => decreaseQuantity(item)}>-</button>
        <button onClick={() => removeItem(item)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
