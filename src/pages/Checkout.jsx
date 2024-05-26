import { CartContext } from "../context/CartContext";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "../styles/Checkout.css";
import { useNavigate } from "react-router-dom";
import CartProductDetails from "../components/CartProductDetails";

function Checkout() {
  const {
    items,
    getTotalCost,
    setLoading,
    setError,
    calculateDiscountedPrice,
    clearCartProducts,
  } = useContext(CartContext);

  const [total, setTotal] = useState(null);
  const navigate = useNavigate();

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

  console.log("cartItems", items);

  const [formData, setFormData] = useState({
    customer: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: {
        streetName: "",
        houseNumber: "",
        cityName: "",
        zipCode: "",
        deliveryRemark: "",
      },
    },
    products: items,
    total: total,
  });

  console.log("form data =>", formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split(".");

    setFormData((prevState) => {
      let updatedFormData = { ...prevState };

      if (keys.length === 1) {
        updatedFormData[keys[0]] = value;
      } else if (keys.length === 2) {
        updatedFormData[keys[0]] = {
          ...updatedFormData[keys[0]],
          [keys[1]]: value,
        };
      } else if (keys.length === 3) {
        updatedFormData[keys[0]] = {
          ...updatedFormData[keys[0]],
          [keys[1]]: {
            ...updatedFormData[keys[0]][keys[1]],
            [keys[2]]: value,
          },
        };
      }

      return updatedFormData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/cart/purchase`,
        formData
      );
      console.log("Response:", response.data);
      // Clear the cart from local storage and state
      clearCartProducts();
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  let nbsp = "\u00A0";

  return (
    <main>
      <div id="checkout-main">
        <div id="checkout-title">
          <h2>Checkout</h2>
        </div>

        <div className="checkout-main-flexbox">
          <div className="checkout-left-section">
            <h3 id="my-info">My information</h3>
            <div className="formWrapper">
              <form onSubmit={handleSubmit}>
                <div className="formInner">
                  <div className="flexRow">
                    <input
                      type="text"
                      name="customer.firstName"
                      value={formData.customer.firstName}
                      onChange={handleChange}
                      placeholder="First Name*"
                      required
                    />
                    <input
                      type="text"
                      name="customer.lastName"
                      value={formData.customer.lastName}
                      onChange={handleChange}
                      placeholder="Last Name*"
                      required
                    />
                  </div>
                  <div className="flexRow">
                    <input
                      type="email"
                      name="customer.email"
                      value={formData.customer.email}
                      onChange={handleChange}
                      placeholder="E-mail*"
                      required
                    />
                    <input
                      type="phone"
                      name="customer.phone"
                      value={formData.customer.phone}
                      onChange={handleChange}
                      placeholder="Phone Number*"
                      required
                    />
                  </div>
                  <div className="flexRow">
                    <input
                      type="text"
                      name="customer.address.streetName"
                      value={formData.customer.address.streetName}
                      onChange={handleChange}
                      placeholder="Street Name*"
                      required
                    />
                    <input
                      type="text"
                      name="customer.address.houseNumber"
                      value={formData.customer.address.houseNumber}
                      onChange={handleChange}
                      placeholder="House Number*"
                      required
                    />
                  </div>
                  <div className="flexRow">
                    <input
                      type="text"
                      name="customer.address.cityName"
                      value={formData.customer.address.cityName}
                      onChange={handleChange}
                      placeholder="City *"
                      required
                    />
                    <input
                      type="text"
                      name="customer.address.zipCode"
                      value={formData.customer.address.zipCode}
                      onChange={handleChange}
                      placeholder="ZIP Code*"
                      required
                    />
                  </div>
                  <div className="textarea-div">
                    <textarea
                      name="customer.address.deliveryRemark"
                      value={formData.customer.address.deliveryRemark}
                      onChange={handleChange}
                      id=""
                      cols="30"
                      rows="7"
                      placeholder="Delivery remark..."
                    ></textarea>
                  </div>
                  {/* Uncomment if you need card details */}
                  {/* 
                  <div className="flexRow">
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      placeholder="Card number*"
                      required
                    />
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      placeholder="CVV*"
                      required
                    />
                    <input
                      type="text"
                      name="cardExpDate"
                      value={formData.cardExpDate}
                      onChange={handleChange}
                      placeholder="Expiration date {dd/mm/yyyy}*"
                      required
                    />
                  </div> 
                  */}

                  <div className="row">
                    <div className="checkbox">
                      <div>
                        <input
                          type="checkbox"
                          required
                          name="requiredCheckbox"
                          value={formData.requiredCheckbox}
                          id="required-checkbox"
                        />
                      </div>
                      <div>
                        <div>
                          <label htmlFor="requiredCheckbox">
                            <span>
                              I accept the collection and processing of personal
                              data provided in the form, without which my
                              request cannot be fulfilled, and allow FASHION
                              STORE to contact me for the purpose of sending
                              notifications. *
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="checkbox">
                      <div>
                        <input
                          type="checkbox"
                          name="newsletter"
                          id="newsletter"
                        />
                      </div>
                      <div>
                        <label htmlFor="newsletter">
                          <span>Subscribe me to the newsletter.</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="input-flex-column">
                    <div>
                      <input
                        type="submit"
                        id="form-submit"
                        value="Proceed to payment"
                      />
                    </div>
                    <div className="checkbox checkbox-info">
                      Fields marked with an (*) are required information.
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="form-h3">
              <h3>View order details</h3>

              <span>{items.length} items</span>
            </div>

            <div className="checkout-products-wrapper">
              <>
                <CartProductDetails isInCheckout={true} />
              </>
              {/* <div className="checkout-products-flexbox">
                <div className="description-row"></div>
                {items.length > 0 ? (
                  items.map((product) => (
                    <div
                      className="products-row"
                      key={product.id.productSizeQuantityId}
                    >
                      <div>
                        <img
                          src={
                            product.product.images.find(
                              (image) => image.isCartImage
                            )?.imageUrl || "https://dummyimage.com/300"
                          }
                          alt="Product image"
                          className="checkout-img"
                        />
                      </div>
                      <div>{product.product.productName}</div>
                      <div>
                        <div>In cart: {product.quantity}</div>
                        <div>Available: {product.id.availableQuantity}</div>
                      </div>
                      <div>
                        {product.product.discountPercentage ? (
                          <>
                            <span className="discountedPrice">
                              {calculateDiscountedPrice(
                                product.product.productPrice,
                                product.product.discountPercentage
                              )}
                              &euro;
                            </span>
                            {nbsp}
                            <span className="old-price">
                              {product.product.productPrice}&euro;
                            </span>
                          </>
                        ) : (
                          <>
                            <span className="price">
                              {product.product.productPrice}&euro;
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </div> */}
            </div>
          </div>

          <div className="transaction-info-wrapper">
            <div className="transaction-info-flexbox">
              <div className="transaction-info-row">
                <div>Order value</div>
                <div>{total}&euro;</div>
              </div>

              <div className="transaction-info-row">
                <div>Shipping</div>
                <div>FREE</div>
              </div>
              <div id="transaction-info-bold">
                <div>Total</div>
                <div>{total}&euro;</div>
              </div>
              <div>
                <div id="disclaimer">
                  <div>
                    By continuing, you agree to{" "}
                    <span>
                      <br />
                    </span>
                    FASHION STORE's{" "}
                    <a href="/terms-and-conditions">
                      General Terms and Conditions.
                    </a>
                  </div>
                  <div>
                    We will process your personal data in accordance with
                    FASHION STORE's{" "}
                    <a href="/privacy-policy">Privacy Notice.</a>
                  </div>
                  <div>
                    Please note that the tax amount is an estimation and the
                    final amount can change. If the estimated tax is presented
                    as TBD, the order value does not include any tax and it will
                    be added when the items are shipped.
                  </div>
                  <div>
                    Need help? Please contact{" "}
                    <a href="/contact">Customer Service.</a>{" "}
                    <span>
                      <br />
                    </span>
                    For quick help, chat with us!.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export { Checkout };
