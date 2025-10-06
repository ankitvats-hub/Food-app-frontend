import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CashOnDelivery.css';
import { useCart } from '../Context/cartContext';

function CashOnDelivery() {
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const generateOrderId = () => {
    const orderNumber = Math.floor(Math.random() * 1000000);
    setOrderId(orderNumber);
    clearCart();
  };

  useEffect(() => {
    if (orderId) {
      const timer = setTimeout(() => {
        navigate('/Home');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [orderId, navigate]);

  return (
    <div className="order-container">
      <h1>Cash on Delivery</h1>
      <div className="order-details">
        {orderId ? (
          <>
            <h2>Order ID: #{orderId}</h2>
            <p>Your order has been placed successfully. Our delivery team will contact you shortly.</p>
          </>
        ) : (
          <button onClick={generateOrderId} className="order-btn">
            Confirm Order
          </button>
        )}
      </div>
    </div>
  );
}

export default CashOnDelivery;
