import { CartContext } from "../../context/CartContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const {
    items,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  } = useContext(CartContext);

  return (
    <>
      <main id="cart-main">
        <div id="cart-title">
          <h2>Shopping Bag</h2>
        </div>
        <div id="cart-wrapper">
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
                      <div className="item-name">
                        {cartProduct.product.productName}
                      </div>
                      <div className="item-price">
                        {cartProduct.product.productPrice}&euro;
                      </div>
                    </div>
                    <div className="item-info-middle">
                      <div>Art.no.</div>
                      <div>{cartProduct.id.productSizeQuantityId}</div>
                      <div>Size:</div>
                      <div>{cartProduct.id.productSize.sizeName}</div>
                      <div>Category:</div>
                      <div>{cartProduct.product.category.categoryName}</div>
                      <div>Total:</div>
                      <div>
                        {(
                          cartProduct.product.productPrice *
                          cartProduct.quantity
                        ).toFixed(2)}
                        &euro;
                      </div>
                    </div>
                    <div className="item-info-bottom">
                      <div id="item-quantity-selector">
                        <div onClick={() => removeOneFromCart(cartProduct.id)}>
                          &minus;
                        </div>
                        <div>{cartProduct.quantity}</div>
                        <div
                          onClick={() =>
                            addOneToCart(cartProduct.id, cartProduct.product)
                          }
                        >
                          &plus;
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="trash-icon-div"
                    onClick={() => deleteFromCart(cartProduct.id)}
                  >
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
                  <div>{getTotalCost()}&euro;</div>
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
                <div>{getTotalCost()}&euro;</div>
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
