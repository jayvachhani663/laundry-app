import "./OrderCancel.css";
import { useState } from "react";
import alertIcon from "../assets/alertIcon.png";

function OrderCancel({ orderId, onClose, onCancelConfirmed }) {
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);

  const mockItems = [
    {
      name: "Shirt",
      serviceType: "Wash, Iron",
      quantity: 2,
      rate: 25,
      total: 50,
    },
    {
      name: "Towel",
      serviceType: "Bleach",
      quantity: 1,
      rate: 20,
      total: 20,
    },
  ];

  const subtotal = mockItems.reduce((sum, item) => sum + item.total, 0);
  const pickupCharges = 90;
  const finalTotal = subtotal + pickupCharges;

  return (
    <div className="summary">
      <div className="summary-header">
        <span>Cancel Order</span>
        <span className="close-btn" onClick={onClose}>
          X
        </span>
      </div>

      <div className="summary-body">
        <div className="store-info">
          <div className="store-address-phone">
            <div>
              <strong>Store Area:</strong>
              <div>jpNagar</div>
            </div>
            <div>
              <strong>Store Address:</strong>
              <div>Near Phone booth, 10th road,</div>
            </div>
            <div>
              <strong>Phone:</strong>
              <div>91 9999999999</div>
            </div>
          </div>
        </div>

        <div className="summary-order-details">
          <h4>Order Details</h4>
          {mockItems.map((item, index) => (
            <div className="summary-order-row" key={index}>
              <div className="product-type">{item.name}</div>
              <div className="service-type">{item.serviceType}</div>
              <div className="product-price">
                {item.quantity} x {item.rate} = {item.total}
              </div>
            </div>
          ))}
        </div>

        <div className="summary-pricing-section">
          <div className="summary-subtotal-row pricing-row">
            <div>Sub total:</div>
            <div>{subtotal}</div>
          </div>
          <div className="summary-pickup-row pricing-row">
            <div>Pickup Charges:</div>
            <div>{pickupCharges}</div>
          </div>
          <div className="summary-total-row">
            <div className="total-label">Total:</div>
            <div className="total-price">Rs {finalTotal}</div>
          </div>
        </div>

        <div className="summary-address-section">
          <h3>Address:</h3>
          <div className="final-address">
            <h4>Home:</h4>
            <p>216, Apple City Colony,</p>
            <p>Bangalore</p>
          </div>
        </div>
      </div>

      <div className="cancel-order-bottom-bar">
        <button
          className="cancel-order-btn"
          onClick={() => setShowConfirmPopup(true)}
        >
          Cancel Order
        </button>
      </div>

      {/* Alert Confirmation */}
      {showConfirmPopup && (
        <div className="confirmation-popup-overlay">
          <div className="confirmation-popup-box">
            <div className="popup-header">
              <span className="popup-title">Alert</span>
              <span className="popup-close" onClick={() => setShowConfirmPopup(false)}>
                ✕
              </span>
            </div>

            <div className="popup-content">
              <img src={alertIcon} alt="alert-icon" className="alertIcon" />
              <p>Are you sure you want to cancel the order?</p>
            </div>

            <div className="popup-actions">
              <button
                className="proceed-btn"
                onClick={() => onCancelConfirmed(orderId)}
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderCancel;
