import React from "react";
import "../styles/PurchaseModal.css";

const PurchaseModal = ({ show, message, onClose }) => {
  if (!show) {
    return null;
  }

  const handleClose = () => {
    onClose();
    navigate();
  };

  return (
    <div className="modal" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default PurchaseModal;
