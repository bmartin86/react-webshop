import React, { useEffect, useState } from "react";
import handleFetchError from "../../functions/handleFetchError";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./styles/ProductDetail.css";

function ProductDetail() {
  const { id: productId } = useParams();
  const idx = Number.parseInt(productId);
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/products/${idx}`
        );
        const product = res.data;
        setProduct(product);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductById();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const calculateDiscountedPrice = (price, discount) => {
    return (price - price * (discount / 100)).toFixed(2);
  };

  let nbsp = "\u00A0";
  {
    console.log("selected product => ", product);
  }

  return (
    <main>
      <div className="main-product-wrapper">
        {product.images && product.images.length > 0 && (
          <div className="left-div">
            {product.images.map((image) => (
              <div className="img-container" key={image.imageId}>
                <img src={image.imageUrl} alt="Model wearing product" />
              </div>
            ))}
          </div>
        )}

        <div className="right-div">
          <div className="product-description-div">
            <h3>{product.productName}</h3>
            {product.discountPercentage ? (
              <p className="discountedPrice">
                {calculateDiscountedPrice(
                  product.productPrice,
                  product.discountPercentage
                )}
                &euro;
                <span>{nbsp}</span>
                <span className="old-price">{product.productPrice}&euro;</span>
              </p>
            ) : (
              <p className="price">{product.productPrice}&euro;</p>
            )}
            <p id="sizes">Sizes</p>
            <div className="sizes-div">
              {product.productSizeQuantities?.map((productSize) => {
                return (
                  <div
                    className="size-box"
                    key={productSize.productSizeQuantityId}
                  >
                    {productSize.productSize.sizeName}
                  </div>
                );
              })}
            </div>
            <div>
              <button id="add-to-bag">Add to bag</button>
            </div>
            <div>
              <Link to="/cart">
                <button id="see-cart">See cart</button>
              </Link>
            </div>
          </div>
          <div className="description-text-div">
            <h3>Description & fit</h3>
            <p className="small-font">
              {product.gender.genderName}
              <span>{nbsp}</span>
              {product.category.categoryName}
            </p>
            <p id="description-text">{product.productDescription}</p>
            <p className="small-font">Article number:1215834003</p>
            <ul>
              <li>
                <span className="bold">Model size: </span>
                The model is 177cm/5'10" and wears a size M
              </li>
              <li>
                <span className="bold">Length: </span>
                Long
              </li>
              <li>
                <span className="bold">Waist Rise: </span>
                Regular waist
              </li>
              <li>
                <span className="bold">Fit: </span>
                Loose fit
              </li>
              <li>
                <span className="bold">Style: </span>
                Pull-on Pants, Straight Leg, Wide leg
              </li>
              <li>
                <span className="bold">Description: </span>
                Cream/dark blue, Patterned
              </li>
              <li>
                <span className="bold">Concept: </span>
                MODERN CLASSIC
              </li>
            </ul>
          </div>
          <div className="materials-div">
            <h3>Materials</h3>
            <h4>Composition</h4>
            <ul>
              <li>
                <span className="bold">Shell:</span>
                Rayon 88%, Lyocell 10%, Linen 2%
              </li>
              <li>
                <span className="bold">Pocket lining:</span>
                Polyester 100%
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
export { ProductDetail };
