import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css'; // if you have custom styles for this component

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!email) {
      setError('Email is required');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        'https://food-app-server-wwa1.onrender.com/api/v1/auth/forgot-password',
        { email },
        { headers: { 'Content-Type': 'application/json' } }
      );

      setMessage(response.data.message || 'Password reset email sent!');
    } catch (err) {
      console.log(err);
      const msg = err.response?.data?.error || 'Something went wrong';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>

      <form onSubmit={handleSubmit} className="forgot-password-form">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your registered email"
          required
        />

        {error && <p className="error-message">{error}</p>}
        {message && <p className="success-message">{message}</p>}

        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Reset Link'}
        </button>
      </form>

      <button
        type="button"
        className="back-btn"
        onClick={() => navigate('/login')}
      >
        Back to Login
      </button>
    </div>
  );
};

export default ForgotPassword;
