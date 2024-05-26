import React from "react";
import { Link } from "react-router-dom";
import categories from "../data/categories.json";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="categories-page">
      <h1>Categories</h1>
      <ul className="category-list">
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
