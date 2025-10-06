import { useCart } from '../Context/cartContext';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart } = useCart();
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate('/ourmenu');
  };

  return (
    <div className="cart-container">
      <div className="cart-box">
        <div className="our-menu-button">
          <button onClick={handleMenuClick}>OUR MENU</button>
        </div>

        <h1 className="cart-title">🛒 Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">Your cart is empty.</div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <div className="cart-item-info">
                    <img src={item.image} alt={item.name} className="cart-item-img" />
                    <div>
                      <h2 className="item-name">{item.name}</h2>
                      <p className="item-price">₹{item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <button className="checkout-btn" onClick={() => navigate('/online-payment')}>Pay Online</button>
              <button className="checkout-btn" onClick={() => navigate('/cash-on-delivery')}>
                Cash On Delivery
              </button>
              <div className="cart-total">
                <h2>Total: ₹{totalPrice.toFixed(2)}</h2>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
