import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [orderComplete, setOrderComplete] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    setShowCheckoutModal(true);
    setCheckoutStep(1);
    setOrderComplete(false);
  };

  const handlePayment = () => {
    setCheckoutStep(2);
    // Simulate payment processing
    setTimeout(() => {
      setOrderComplete(true);
    }, 2000);
  };

  const handleCloseModal = () => {
    setShowCheckoutModal(false);
    setCheckoutStep(1);
    setOrderComplete(false);
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className="empty-cart">Your cart is empty</div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-price">{formatPrice(item.price)}</p>
                  <div className="quantity-controls">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button 
                  className="remove-item-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <div className="total">
              <span>Total:</span>
              <span>{formatPrice(getTotal())}</span>
            </div>
            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}

      {showCheckoutModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            {!orderComplete ? (
              <>
                <h3>{checkoutStep === 1 ? 'Order Summary' : 'Processing Payment...'}</h3>
                {checkoutStep === 1 ? (
                  <>
                    <div className="order-summary">
                      {cart.map((item) => (
                        <div key={item.id} className="order-item">
                          <span>{item.name} x {item.quantity}</span>
                          <span>{formatPrice(item.price * item.quantity)}</span>
                        </div>
                      ))}
                      <div className="order-total">
                        <span>Total Amount:</span>
                        <span>{formatPrice(getTotal())}</span>
                      </div>
                    </div>
                    <div className="modal-buttons">
                      <button className="cancel-btn" onClick={handleCloseModal}>Cancel</button>
                      <button className="pay-btn" onClick={handlePayment}>Pay Now</button>
                    </div>
                  </>
                ) : (
                  <div className="processing-payment">
                    <div className="loader"></div>
                    <p>Please wait while we process your payment...</p>
                  </div>
                )}
              </>
            ) : (
              <div className="order-success">
                <div className="success-icon">✓</div>
                <h3>Order Successful!</h3>
                <p>Thank you for your purchase.</p>
                <p>Your order has been placed successfully.</p>
                <button className="close-btn" onClick={handleCloseModal}>Close</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart; 