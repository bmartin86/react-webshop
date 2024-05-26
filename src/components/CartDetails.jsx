import { CartContext } from "../context/CartContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/Cart.css";
function CartDetails() {
  const { getTotalCost } = useContext(CartContext);

  return (
    <>
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
            <Link to="/checkout">
              <div>Continue to checkout</div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
export default CartDetails;
