import React from "react";

function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="price">${product.price}</p>
      <p className="category">{product.category}</p>
      <p className="description">{product.description}</p>
    </div>
  );
}

export default React.memo(ProductCard);
