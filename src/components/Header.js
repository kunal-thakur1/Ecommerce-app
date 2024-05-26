import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Header.css";

const Header = () => {
  const { cart } = useCart();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout ({cart.length})</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
