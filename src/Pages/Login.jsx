import React, { useState } from 'react';
import axios from 'axios';
import Home from './Home';
import { useNavigate } from 'react-router-dom';
import "../Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Both fields are required');
      return;
    }

    try {
      const response = await axios.post('https://food-app-server-wwa1.onrender.com/api/v1/auth/login', {
        email,
        password,
      });

      alert(response.data.message);
      localStorage.setItem('token', response.data.token);
      setError('');
      navigate('/Home');
    } catch (err) {
      const msg = err.response?.data?.error || 'Login failed';
      setError(msg);
    }
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleForgotPasswordClick = () => {
    navigate('/forgot-password');
  };

  return (
    <div className="login-outer">
      <div className="lottie-left">
        <lottie-player
          src="https://assets10.lottiefiles.com/packages/lf20_tll0j4bb.json"
          background="transparent"
          speed="1"
          style={{ width: "300px", height: "300px" }}
          loop
          autoplay
        ></lottie-player>
      </div>

      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="button"
            className="forgot-password-btn"
            onClick={handleForgotPasswordClick}
          >
            Forgot Password?
          </button>

          {error && <p className="error-message">{error}</p>}

          <button type="submit">Login</button>
        </form>
        <br />
        <button type="button" onClick={handleRegisterClick}>Register!</button>
      </div>
    </div>
  );
};

export default Login;
