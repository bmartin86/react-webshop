import React from "react";
import { useCartContext } from "../context/CartContext";
import "../styles/PurchaseModal.css";

const PurchaseModal = ({ show, message, onClose, data }) => {
  const { calculateDiscountedPrice } = useCartContext();
  if (!show || !data) {
    return null;
  }

  const handleClose = () => {
    onClose();
  };

  const customer = data.customer;
  const address = customer.address;
  const total = data.total;

  let nbsp = "\u00A0";

  return (
    <div className="modal" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <h2>{message}</h2>
        <div className="order-details">
          <div className="customer-info">
            <h3>Customer Information</h3>
            <p>
              Name: {customer.firstName} {customer.lastName}
            </p>
            <p>Email: {customer.email}</p>
            <p>Phone: {customer.phone}</p>
            <p>
              Address: {address.streetName}, {address.houseNumber},{" "}
              {address.cityName}, {address.zipCode}
            </p>
          </div>
          <h3>Order Details</h3>
          <ul>
            {data.productCustomers.map((product, index) => (
              <li key={index} className="modalProductListItem">
                <div className="modalProductInfoContainer">
                  <p>{product.productSizeQuantity.product.productName}</p>
                  <p>
                    Size: {product.productSizeQuantity.productSize.sizeName}
                  </p>
                  <p>Quantity: {product.quantity}</p>

                  {product.productSizeQuantity.product.discountPercentage ? (
                    <>
                      <p className="price">
                        {(
                          calculateDiscountedPrice(
                            product.productSizeQuantity.product.productPrice,
                            product.productSizeQuantity.product
                              .discountPercentage
                          ) * product.quantity
                        ).toFixed(2)}
                        &euro;
                      </p>
                    </>
                  ) : (
                    <p className="price">
                      {(
                        product.productSizeQuantity.product.productPrice *
                        product.quantity
                      ).toFixed(2)}
                      &euro;
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="total-price">
          <h3>Total Price</h3>
          <p>{`$${total}€`}</p>
          {/* <p>${total}&euro;</p> */}
        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;
