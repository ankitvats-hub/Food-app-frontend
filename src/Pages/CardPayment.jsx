import React, { useState } from 'react';
import './CardPayment.css';
import { useNavigate } from 'react-router-dom';
import './UpiPinScreen.css';

const UpiPinScreen = ({ onSubmit }) => {
  const [pin, setPin] = useState('');

  const handleDigit = (digit) => {
    if (pin.length < 4) {
      setPin(pin + digit);
    }
  };

  const handleClear = () => setPin('');
  const handleSubmit = () => {
    if (pin.length === 4) {
      onSubmit(pin);
    } else {
      alert('Enter 4-digit PIN');
    }
  };

  return (
    <div className="upi-container">
      <h3>Bank of Baroda</h3>
      <p className='code'>XXXX5862</p>
      <h4>ENTER 4-DIGIT UPI PIN</h4>
      <div className="pin-input">
        {[...Array(4)].map((_, i) => (
          <span key={i}>{pin[i] ? '●' : '_'}</span>
        ))}
      </div>
      <p className="warning">
        ⚠️ UPI PIN will keep your account secure. Do not share this PIN with anyone.
      </p>
      <div className="keypad">
        {[1,2,3,4,5,6,7,8,9,'',0,'C'].map((val, i) => (
          <button
            key={i}
            onClick={() => val === 'C' ? handleClear() : typeof val === 'number' ? handleDigit(val) : null}
          >
            {val === 'C' ? '⌫' : val}
          </button>
        ))}
      </div>
      <button className="submit-btn" onClick={handleSubmit}>✓</button>
    </div>
  );
};

const CardPayment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [showUpiScreen, setShowUpiScreen] = useState(false);
  const navigate = useNavigate();

  const handleCardSubmit = (e) => {
    e.preventDefault();

    if (!cardNumber || !cardName || !expiry || !cvv) {
      alert('Please fill all card details.');
      return;
    }

    if (
      isNaN(cardNumber) ||
      isNaN(expiry.replace('/', '')) ||
      isNaN(cvv)
    ) {
      alert('Card Number, Expiry, and CVV must be numeric.');
      return;
    }

    if (cardNumber.length !== 12) {
      alert('Card number must be exactly 12 digits.');
      return;
    }

    setShowUpiScreen(true);
  };

  const handlePinSubmit = (pin) => {
    alert('Payment Successful!');
    navigate('/home');
  };

  const allowOnlyNumbers = (value) => value.replace(/\D/g, '');

  return (
    <div className="card-payment-container">
      {!showUpiScreen ? (
        <form className="card-payment-form" onSubmit={handleCardSubmit}>
          <h2>💳 Card Payment</h2>

          <label>Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(allowOnlyNumbers(e.target.value).slice(0, 12))}
            placeholder="Enter 12-digit card number"
          />

          <label>Name on Card</label>
          <input
            type="text"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            placeholder="John Doe"
          />

          <div className="card-row">
            <div>
              <label>Expiry Date</label>
              <input
                type="text"
                value={expiry}
                onChange={(e) => setExpiry(allowOnlyNumbers(e.target.value).slice(0, 4))}
                placeholder="MMYY"
                maxLength={4}
              />
            </div>
            <div>
              <label>CVV</label>
              <input
                type="password"
                value={cvv}
                onChange={(e) => setCvv(allowOnlyNumbers(e.target.value).slice(0, 3))}
                placeholder="123"
                maxLength={3}
              />
            </div>
          </div>

          <button type="submit" className="submit-payment-btn">
            Submit Payment
          </button>
        </form>
      ) : (
        <UpiPinScreen onSubmit={handlePinSubmit} />
      )}
    </div>
  );
};

export default CardPayment;
