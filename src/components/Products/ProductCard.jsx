import { React, useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import "./styles/ProductCard.css";

function ProductCard({ product }) {
  const { calculateDiscountedPrice } = useCartContext();
  const [isFavChecked, setIsFavChecked] = useState(false);

  const handleFavChange = () => {
    setIsFavChecked(!isFavChecked);
    // TODO add function to handle favorite
    // handleFavorite(product.productId);
  };
  let nbsp = "\u00A0";
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
            <label style={{ cursor: "pointer" }}>
              <input
                type="checkbox"
                style={{ display: "none" }}
                checked={isFavChecked}
                onChange={handleFavChange}
                aria-label="Favorite"
              />
              <Icon
                icon="ph:heart-fill"
                width="2em"
                height="2em"
                style={{ color: isChecked ? "red" : "white" }}
                aria-hidden="true"
              />
            </label>
          </div>
        </div>
        <div className="product-description">
          <Link to={`/products/${product.productId}`} className="product-name">
            {product.productName}
          </Link>
          {product.discountPercentage ? (
            <p className="productPrice discountedPrice">
              {calculateDiscountedPrice(
                product.productPrice,
                product.discountPercentage
              )}
              &euro;
              <span>{nbsp}</span>
              <span className="productPrice old-price">
                {product.productPrice.toFixed(2)}&euro;
              </span>
            </p>
          ) : (
            <p className="productPrice">
              {product.productPrice.toFixed(2)}&euro;
            </p>
          )}
          {/* <div className="product-price">{product.productPrice} &euro;</div> */}
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
