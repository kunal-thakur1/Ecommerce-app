import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products.json";
import ProductList from "../components/ProductList";
import "./Category.css";

const Category = () => {
  const { id } = useParams();
  const categoryProducts = products.filter(
    (product) => product.categoryId === id
  );

  return (
    <div>
      <h1 id="shophere">Shop Here </h1>
      <ProductList products={categoryProducts} />
    </div>
  );
};

export default Category;
