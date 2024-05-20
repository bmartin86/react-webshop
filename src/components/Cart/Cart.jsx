import { Link } from "react-router-dom";
import "./Cart.css";

function Cart() {
  return (
    <>
      <main id="cart-main">
        <div id="cart-title">
          <h2>Shopping Bag</h2>
        </div>
        <div id="cart-wrapper">
          <section id="cart-left">
            <article className="cart-item">
              <div className="cart-img-wrapper">
                <img
                  src="images/products/women-jeans.webp"
                  alt="Product image"
                  className="cart-img"
                />
              </div>
              <div className="item-info-wrapper">
                <div className="item-info-top">
                  <div className="item-name">Women denim jeans</div>
                  <div className="item-price">31.99&euro;</div>
                </div>
                <div className="item-info-middle">
                  <div>Art.no.</div>
                  <div>0979945001</div>
                  <div>Size:</div>
                  <div>XL</div>
                  <div>Color:</div>
                  <div>Blue</div>
                  <div>Total:</div>
                  <div>31.99&euro;</div>
                </div>
                <div className="item-info-bottom">
                  <div id="item-quantity-selector">
                    <div>&minus;</div>
                    <div>1</div>
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

            <article className="cart-item">
              <div className="cart-img-wrapper">
                <img
                  src="images/products/men-sweater5.webp"
                  alt="Product image"
                  className="cart-img"
                />
              </div>
              <div className="item-info-wrapper">
                <div className="item-info-top">
                  <div className="item-name">Men shirt</div>
                  <div className="item-price">28.99&euro;</div>
                </div>
                <div className="item-info-middle">
                  <div>Art.no.</div>
                  <div>0979945001</div>
                  <div>Size:</div>
                  <div>XL</div>
                  <div>Color:</div>
                  <div>Blue</div>
                  <div>Total:</div>
                  <div>28.99&euro;</div>
                </div>
                <div className="item-info-bottom">
                  <div id="item-quantity-selector">
                    <div>&minus;</div>
                    <div>1</div>
                    <div>&plus;</div>
                  </div>
                </div>
              </div>
              <div className="trash-icon-div">
                <Link to="">
                  <img
                    src="images/icons/trash-can-regular.svg"
                    alt="Trash can icon"
                    id="trash-icon"
                  />
                </Link>
              </div>
            </article>
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
