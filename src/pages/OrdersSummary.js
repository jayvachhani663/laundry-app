import "./OrdersSummary.css";

function OrdersSummary({ onClose }) {
  // Static data – mock product summary
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
        <span>Order Summary</span>
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
        <div className="order-progress-bar">
          <div className="progress-step completed">Pickup</div>
          <div className="progress-line completed"></div>
          <div className="progress-step current">Washing</div>
          <div className="progress-line"></div>
          <div className="progress-step">Ironing</div>
          <div className="progress-line"></div>
          <div className="progress-step">Delivered</div>
        </div>

        <div className="summary-order-details">
          <h4>Order Deatails</h4>
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
        <div className="summary-divider" />

        <div className="summary-address-section">
           <h3>Address:</h3>
          <div className="final-address">
            <h4>Home:</h4>
            <p>216, Apple City Colony,</p>
            <p>Bangalore</p>
          </div>
        </div>
        <div className="summary-bottom-bar"></div>
      </div>
    </div>
  );
}

export default OrdersSummary;
