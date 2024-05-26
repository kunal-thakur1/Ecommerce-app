import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products.json";
import Footer from "../components/Footer";
import "./Home.css";

const Home = () => {
  // const { addToCart } = useCart();

  const keyboardProducts = products.filter(
    (product) => product.categoryId === "1"
  );
  const headphoneProducts = products.filter(
    (product) => product.categoryId === "2"
  );

  return (
    <div className="home">
      <div className="banner">
        <h1>Sale - 50% Off!</h1>
        <p>Don't miss out on our huge sale. Limited time only!</p>
      </div>
      <h1>Welcome to the E-commerce App</h1>

      <section>
        <h2>Keyboards</h2>
        <div className="product-list">
          {keyboardProducts.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>

              <button>
                <Link to="/category/1">Shop for more</Link>
              </button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Headphones</h2>
        <div className="product-list">
          {headphoneProducts.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button>
                <Link to="/category/2">Shop for more</Link>
              </button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
