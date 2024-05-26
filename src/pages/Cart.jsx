import React from "react";
import CartProductDetails from "../components/CartProductDetails";
import CartDetails from "../components/CartDetails";
import "../styles/Cart.css";

function Cart() {
  return (
    <>
      <main id="cart-main">
        <div id="cart-title">
          <h3>Cart items</h3>
        </div>
        <div id="cart-wrapper">
          <>
            <CartProductDetails />
          </>
          <>
            <CartDetails />
          </>
        </div>
      </main>
    </>
  );
}
export default Cart;
