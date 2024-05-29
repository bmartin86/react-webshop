import { CartContext } from "../context/CartContext";
import React, { useContext, useState } from "react";
import axios from "axios";
import "../styles/Checkout.css";
import { useNavigate } from "react-router-dom";
import PurchaseModal from "./PurchaseModal";

function CheckoutForm({ formData, setFormData, initialFormData }) {
  const { setLoading, setError, clearCartProducts } = useContext(CartContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate();
  const [modalData, setModalData] = useState(null);

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
      if (response.data.isProcessed) {
        setModalMessage("Purchase successful!");
        setModalData(response.data);
      } else {
        setModalMessage("Purchase failed. Please try again.");
        setModalData(null);
      }

      // Set the modal visible and show the message before clearing the cart
      setModalVisible(true);
      setLoading(false);

      // Clear the cart from local storage and state after setting the modal visible
      clearCartProducts();
      setFormData(initialFormData);
    } catch (error) {
      console.error("Error:", error);
      setModalMessage(`Purchase failed: ${error.message}`);
      setModalData(null);
      setError(error.message);
      setLoading(false);
      setModalVisible(true);
    }
  };

  const handleModalClose = () => {
    setModalVisible(false);
    navigate("/");
  };

  return (
    <>
      <div className="formWrapper">
        <form onSubmit={handleSubmit}>
          <PurchaseModal
            show={modalVisible}
            message={modalMessage}
            onClose={handleModalClose}
            data={modalData}
          />
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
                        I accept the collection and processing of personal data
                        provided in the form, without which my request cannot be
                        fulfilled, and allow FASHION STORE to contact me for the
                        purpose of sending notifications. *
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="checkbox">
                <div>
                  <input type="checkbox" name="newsletter" id="newsletter" />
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
    </>
  );
}
export default CheckoutForm;
