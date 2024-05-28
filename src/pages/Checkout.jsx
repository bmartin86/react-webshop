import { CartContext } from "../context/CartContext";
import React, { useContext, useEffect, useState } from "react";
import "../styles/Checkout.css";
import CartProductDetails from "../components/CartProductDetails";
import CheckoutForm from "../components/CheckoutForm";
import OrderDetails from "../components/OrderDetail";

function Checkout() {
  const { items, getTotalCost, setLoading, setError } = useContext(CartContext);

  const [total, setTotal] = useState(null);

  useEffect(() => {
    if (items) {
      setLoading(true);
      try {
        const cartTotal = getTotalCost(items);
        setTotal(cartTotal);
        // Update formData with the correct total value
        setFormData((prevFormData) => ({
          ...prevFormData,
          total: cartTotal,
        }));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
  }, [items, getTotalCost, setLoading, setError]);

  return (
    <main>
      <div id="checkout-main">
        <div id="checkout-title">
          <h2>Checkout</h2>
        </div>
        <div className="checkout-main-flexbox">
          <div className="checkout-left-section">
            <h3 id="my-info">My information</h3>
            <CheckoutForm total={total} />
            <div className="form-h3">
              <h3>View order details</h3>
              <span>{items.length} items</span>
            </div>
            <div className="checkout-products-wrapper">
              <CartProductDetails isInCheckout={true} />
            </div>
          </div>
          <OrderDetails total={total} />
        </div>
      </div>
    </main>
  );
}
export { Checkout };
