import { CartContext } from "../context/CartContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import "../styles/Cart.css";
function CartProductDetails({ isInCheckout }) {
  const {
    items,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    calculateDiscountedPrice,
  } = useContext(CartContext);

  let plus = "\u002B";
  let minus = "\u2212";
  let nbsp = "\u00A0";

  return (
    <>
      <section id="cart-left">
        {items.length > 0 ? (
          items.map((cartProduct) => (
            <article
              className="cart-item"
              key={cartProduct.id.productSizeQuantityId}
            >
              <div className="cart-img-wrapper">
                <img
                  src={
                    cartProduct.product.images.find(
                      (image) => image.isCartImage
                    )?.imageUrl || "https://dummyimage.com/300"
                  }
                  alt="Product image"
                  className="cart-img"
                />
              </div>
              <div className="item-info-wrapper">
                <div className="item-info-top">
                  <div className="item-name bold">
                    {cartProduct.product.productName}
                  </div>

                  <div className="item-price">
                    {cartProduct.product.discountPercentage ? (
                      <>
                        <span className="discountedPrice">
                          {calculateDiscountedPrice(
                            cartProduct.product.productPrice,
                            cartProduct.product.discountPercentage
                          )}
                          &euro;
                        </span>
                        {nbsp}
                        <span className="old-price">
                          {cartProduct.product.productPrice.toFixed(2)}&euro;
                        </span>
                      </>
                    ) : (
                      <span className="price">
                        {cartProduct.product.productPrice}&euro;
                      </span>
                    )}
                  </div>
                </div>
                <div className="item-info-middle">
                  <div>Art.no.</div>
                  <div className="bold">
                    {cartProduct.id.productSizeQuantityId}
                  </div>
                  <div>Size:</div>
                  <div className="bold">
                    {cartProduct.id.productSize.sizeName}
                  </div>
                  <div>Category:</div>
                  <div className="bold">
                    {cartProduct.product.category.categoryName}
                  </div>
                  <div>Total:</div>
                  {cartProduct.product.discountPercentage ? (
                    <div className="bold">
                      {(
                        calculateDiscountedPrice(
                          cartProduct.product.productPrice,
                          cartProduct.product.discountPercentage
                        ) * cartProduct.quantity
                      ).toFixed(2)}
                      &euro;
                    </div>
                  ) : (
                    <div className="bold">
                      {(
                        cartProduct.product.productPrice * cartProduct.quantity
                      ).toFixed(2)}
                      &euro;
                    </div>
                  )}
                </div>
                <div className="item-info-bottom">
                  {!isInCheckout && (
                    <div id="item-quantity-selector">
                      <div onClick={() => removeOneFromCart(cartProduct.id)}>
                        {minus}
                      </div>
                      <div className="bold">1</div>
                      <div
                        onClick={() =>
                          addOneToCart(cartProduct.id, cartProduct.product)
                        }
                      >
                        {plus}
                      </div>
                    </div>
                  )}
                  {/* <div> */}
                  <div>
                    In Cart:{nbsp}
                    <span className="bold">{cartProduct.quantity}</span>
                  </div>
                  <div>
                    Available:{nbsp}
                    <span className="bold">
                      {cartProduct.id.availableQuantity}
                    </span>
                  </div>
                  {/* </div> */}
                </div>
              </div>
              {/* Conditionally render the delete button */}
              {!isInCheckout && (
                <div
                  className="trash-icon-div"
                  onClick={() => deleteFromCart(cartProduct.id)}
                >
                  <Icon
                    icon="iwwa:trash"
                    width="1.6rem"
                    height="1.6rem"
                    className="trashIcon"
                  />
                </div>
              )}
            </article>
          ))
        ) : (
          <>
            <article className="emptyCart">No items in cart</article>
            <Link to="/products" className="emptyCart link">
              <Icon icon="icon-park:left" width="22" height="22" />
              <span>back to shop...</span>
            </Link>
          </>
        )}
      </section>
    </>
  );
}
export default CartProductDetails;
