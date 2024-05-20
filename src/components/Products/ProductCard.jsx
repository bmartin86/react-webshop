import { React } from "react";
import { Link } from "react-router-dom";
import "./styles/ProductCard.css";

function ProductCard({ product }) {
  return (
    <>
      <div className="product-card" key={product.productId}>
        <div className="product-img-box">
          <Link to={`/products/${product.productId}`}>
            <img
              src={
                product.images?.[0]?.imageUrl || "https://dummyimage.com/300"
              }
              alt="Model wearing product"
              className="product-image"
            />
          </Link>
          <div className="heart-container">
            {/* Replace with heart icon/button */}
            <button onClick={() => handleFavorite(product.productId)}>
              Fav-icon
            </button>
          </div>
        </div>
        <div className="product-description">
          <Link to={`/products/${product.productId}`} className="product-name">
            {product.productName}
          </Link>
          <div className="product-price">{product.productPrice} &euro;</div>
          {product.category && (
            <div className="product-category">
              {product.category.categoryName}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export { ProductCard };
