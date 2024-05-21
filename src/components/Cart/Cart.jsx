import { CartContext } from "../../context/CartContext";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const cart = useContext(CartContext);
  console.log("cartItemsformCartComponent =>", cart.items);
  const cartProducts = cart.items;

  return (
    <>
      <main id="cart-main">
        <div id="cart-title">
          <h2>Shopping Bag</h2>
        </div>
        <div id="cart-wrapper">
          <section id="cart-left">
            {cartProducts.length > 0 ? (
              cartProducts.map((cartProduct) => (
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
                      <div className="item-name">
                        {cartProduct.product.productName}
                      </div>
                      <div className="item-price">
                        {cartProduct.productPrice}&euro;
                      </div>
                    </div>
                    <div className="item-info-middle">
                      <div>Art.no.</div>
                      <div>0979945001</div>
                      <div>Size:</div>
                      <div>{cartProduct.id.productSize.sizeName}</div>
                      <div>Color:</div>
                      <div>Blue</div>
                      <div>Total:</div>
                      <div>{cartProduct.product.productPrice}&euro;</div>
                    </div>
                    <div className="item-info-bottom">
                      <div id="item-quantity-selector">
                        <div>&minus;</div>
                        <div>{cartProduct.quantity}</div>
                        <div>&plus;</div>
                      </div>
                    </div>
                  </div>
                  <div className="trash-icon-div">
                    <img
                      src="images/icons/trash-can-regular.svg"
                      alt="Trash can icon"
                      id="trash-icon"
                    />
                  </div>
                </article>
              ))
            ) : (
              <article>No items in cart</article>
            )}
          </section>

          <section id="cart-right">
            <div id="checkout-box-wrapper">
              <div id="log-in-box">
                <Link to="">
                  <div>Log in</div>
                </Link>
              </div>
              <div id="order-detail">
                <div className="order-detail-top">
                  <div>Order Value</div>
                  <div>60.99&euro;</div>
                </div>
                {/* <!-- dodati promotion --> */}
                {/* <!-- <div>
              <div>Promotion</div>
              <div>-31.99&euro;</div>
            </div> --> */}
                <div className="order-detail-bottom">
                  <div>Shipping</div>
                  <div>FREE</div>
                </div>
              </div>
              <div className="total-box">
                <div>Total</div>
                <div>60.99&euro;</div>
              </div>
              <div id="check-out-box">
                <Link to="checkout.html">
                  <div>Continue to checkout</div>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
export default Cart;
