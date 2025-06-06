import React, { useState } from "react";
import "./Summary.css";

const SERVICE_PRICES = {
  wash: 10,
  iron: 15,
  towel: 20,
  bleach: 25,
};

function Summary({ onClose, orderItems }) {
  const [selectedArea, setSelectedArea] = useState("");

  const storeDetails = {
    jpNagar: {
      address: "Near Phone booth, 10th road,",
      phone: "91 9999999999",
    },
    koramangala: {
      address: "Opposite Forum Mall, 5th Block",
      phone: "91 8888888888",
    },
    indiranagar: {
      address: "Next to Metro Station, 1st Stage",
      phone: "91 7777777777",
    },
  };

  const handleAreaChange = (e) => {
    setSelectedArea(e.target.value);
  };

  const selectedItems = orderItems.filter(
    (item) =>
      item.quantity > 0 && Object.values(item.selectedServices).includes(true)
  );

  const priceRows = selectedItems.map((item) => {
    const { product, quantity, selectedServices } = item;

    const servicePrice = Object.entries(selectedServices).reduce(
      (total, [type, selected]) => {
        if (selected) total += SERVICE_PRICES[type];
        return total;
      },
      0
    );

    const totalPrice = quantity * servicePrice;

    return {
      name: product.name,
      quantity,
      servicePrice,
      totalPrice,
    };
  });

  const subtotal = priceRows.reduce((sum, row) => sum + row.totalPrice, 0);
  const pickupCharges = 90;
  const finalTotal = subtotal + pickupCharges;

  return (
    <div className="summary">
      <div className="summary-header">
        <span>Summary</span>
        <span className="close-btn" onClick={onClose}>
          X
        </span>
      </div>

      <div className="store-info">
        <select
          className="area-select"
          value={selectedArea}
          onChange={handleAreaChange}
        >
          <option value="">Select Area</option>
          <option value="jpNagar">Jp Nagar</option>
          <option value="koramangala">Koramangala</option>
          <option value="indiranagar">Indiranagar</option>
        </select>

        <div className="store-address-phone">
          <div>
            <strong>Store Address:</strong>
            <div>
              {selectedArea ? storeDetails[selectedArea].address : "--"}
            </div>
          </div>
          <div>
            <strong>Phone:</strong>
            <div>{selectedArea ? storeDetails[selectedArea].phone : "--"}</div>
          </div>
        </div>
      </div>
      <div className="summary-order-details">
        {selectedItems.map((item, index) => {
          const { product, quantity, selectedServices } = item;

          const selectedTypes = Object.entries(selectedServices)
            .filter(([_, selected]) => selected)
            .map(([service]) => service)
            .join(", ");

          const servicePrice = Object.entries(selectedServices).reduce(
            (total, [type, selected]) => {
              if (selected && SERVICE_PRICES[type]) {
                total += SERVICE_PRICES[type];
              }
              return total;
            },
            0
          );

          const totalPrice = quantity * servicePrice;

          return (
            <div className="summary-order-row" key={index}>
              <div className="product-type">{product.name}</div>
              <div className="service-type">{selectedTypes}</div>
              <div className="product-price">
                {quantity} x {servicePrice} = {totalPrice}
              </div>
            </div>
          );
        })}
      </div>
      {/* Pricing summary below order details */}
      <div className="summary-pricing-section">
        <div className="summary-subtotal-row">
          <div>Sub total:</div>
          <div>{subtotal}</div>
        </div>

        <div className="summary-pickup-row">
          <div>Pickup Charges:</div>
          <div>{pickupCharges}</div>
        </div>

        <div className="summary-total-row">
          <div>
            <strong>Total:</strong>
          </div>
          <div>
            <strong>Rs {finalTotal}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
