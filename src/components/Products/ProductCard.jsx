import React from 'react';
import { Link } from 'react-router-dom';
import './styles/ProductCard.css';

function ProductCard ({product}) {
  return (
    <div className="product-card">
      <div className="product-img-box">
        <Link key={product.id} to={"/products/"+  product.id}>
          <img src={product.thumbnail} alt="Model wearing product" className="product-image" />
        </Link>
        <div className="heart-container">
          <input type="checkbox" />
        </div>
      </div>
      <div className="product-description">
          <a href="productCategories.html">
            <div className="product-name">
            {product.name}
            </div>
          </a>
        <div className="product-price">{product.price} &euro;</div>
        <div className="product-category">{product.category[0]}</div>
      </div>
    </div>
  )
}
export { ProductCard }