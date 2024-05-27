import React from "react";
import "../styles/successPopup.css";

function SuccessPopup({ product, cartProductId }) {
  console.log("popup product", product);
  const selectedSize = product.productSizeQuantities.find(
    (productSize) => productSize.productSizeQuantityId === cartProductId
  );
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3>Product Added to Cart</h3>
        <div className="popup-product-info">
          <img
            src={
              product.images.find((image) => image.isCartImage)?.imageUrl ||
              "https://dummyimage.com/300"
            }
            alt={product.productName}
            className="popup-product-image"
          />
          <div>
            <p>{product.productName}</p>
            <p>Price: ${product.productPrice}</p>
            {selectedSize && (
              <>
                <p>Quantity: {selectedSize.availableQuantity}</p>
                <p>Size: {selectedSize.productSize.sizeName}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessPopup;
