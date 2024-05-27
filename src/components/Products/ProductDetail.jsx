import { useCartContext } from "../../context/CartContext";
import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./styles/ProductDetail.css";

function ProductDetail() {
  const { id: productId } = useParams();
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSizeId, setSelectedSizeId] = useState(null);

  const { addOneToCart, getProductQuantity, calculateDiscountedPrice } =
    useCartContext();
  const productQuantity = getProductQuantity(selectedSizeId);

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/products/${productId}`
        );
        const product = res.data;
        setProduct(product);
      } catch (error) {
        handleFetchError(error, setError);
      } finally {
        setLoading(false);
      }
    };

    fetchProductById();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleFetchError = async (error, setError) => {
    if (error.response) {
      console.error("Server Error:", error.response.data);
    } else if (error.request) {
      console.error("Network Error:", error.request);
    } else {
      console.error("Error:", error.message);
    }
    setError(error);
  };

  const handleSelectSize = (sizeId) => {
    setSelectedSizeId(sizeId);
  };

  const handleAddToCart = (selectedSizeId) => {
    if (selectedSizeId !== null) {
      const selectedProductSize = product.productSizeQuantities.find(
        (size) => size.productSizeQuantityId === selectedSizeId
      );
      addOneToCart(selectedProductSize, product);
    } else {
      alert("Please select a size first.");
    }
  };

  // ------------- random functions--------------
  function getRandomHeight(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomSize(sizes) {
    const randomIndex = Math.floor(Math.random() * sizes.length);
    return sizes[randomIndex];
  }

  function getRandomFit(fits) {
    const randomIndex = Math.floor(Math.random() * fits.length);
    return fits[randomIndex];
  }

  const height = getRandomHeight(168, 192);
  const sizes = ["S", "M", "L", "XL"];
  const size = getRandomSize(sizes);
  const fits = ["Loose Fit", "Slim Fit", "Regular Fit"];
  const fit = getRandomFit(fits);

  let nbsp = "\u00A0";

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
                <span className="old-price">
                  {product.productPrice.toFixed(2)}&euro;
                </span>
              </p>
            ) : (
              <p className="price">{product.productPrice.toFixed(2)}&euro;</p>
            )}
            <p id="sizes">Sizes</p>
            <div className="sizes-div">
              {product.productSizeQuantities
                .filter((productSize) => productSize.availableQuantity > 0)
                .map((productSize) => (
                  <label
                    key={productSize.productSizeQuantityId}
                    className="size-radio"
                  >
                    <input
                      type="radio"
                      name="size"
                      value={productSize.productSizeQuantityId}
                      checked={
                        selectedSizeId === productSize.productSizeQuantityId
                      }
                      onChange={() =>
                        handleSelectSize(productSize.productSizeQuantityId)
                      }
                    />
                    {productSize.productSize.sizeName}
                  </label>
                ))}
            </div>
            <div>
              <button
                id="add-to-bag"
                onClick={() => handleAddToCart(selectedSizeId)}
              >
                Add to cart
              </button>
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
            <p className="small-font">
              Article number:121583
              <span>{product.productId}</span>
            </p>
            <ul>
              <li>
                <span className="bold">Model size: </span>
                The model is {height}cm tall and wears a size {size}
              </li>
              <li>
                <span className="bold">Fit: </span>
                {fit}
              </li>
              <li>
                <span className="bold">Concept: </span>
                MODERN CLASSIC
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
export { ProductDetail };
