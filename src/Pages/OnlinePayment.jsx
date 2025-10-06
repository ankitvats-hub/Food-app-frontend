import React from 'react';
import './OnlinePayment.css';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Context/cartContext';

const OnlinePayment = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const orderId = 'ORDER-' + Math.floor(100000 + Math.random() * 900000);
  const transactionId = 'TXN-' + Math.floor(1000000000 + Math.random() * 9000000000);

  const handlePay = () => {
    clearCart();
    navigate('/card-payment');
  };

  return (
    <div className="payment-container">
      <div className="payment-box">
        <h1>💳 Online Payment</h1>
        <p><strong>Order ID:</strong> {orderId}</p>
        <p><strong>Transaction ID:</strong> {transactionId}</p>
        <button className="pay-btn" onClick={handlePay}>Pay with Card</button>
      </div>
    </div>
  );
};

export default OnlinePayment;
