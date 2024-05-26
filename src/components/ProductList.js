import React from "react";
import { useCart } from "../context/CartContext";
import "./ProductList.css"; // Add CSS import

const ProductList = ({ products }) => {
  const { dispatch } = useCart();

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
