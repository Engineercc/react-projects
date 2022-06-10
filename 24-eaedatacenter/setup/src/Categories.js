import React, { useState } from "react";

const Categories = ({ categories, filterItems }) => {
  const [activeValue, setActiveValue] = useState(0);
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className={`filter-btn ${index === activeValue && "active-btn"}`}
            onClick={() => {
              filterItems(category);
              setActiveValue(index);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
